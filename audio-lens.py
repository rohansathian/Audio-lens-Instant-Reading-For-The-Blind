import time
import os
import cv2
import pytesseract
from PIL import Image
from ultralytics import YOLO
import pyttsx3

# ✅ Tesseract path for Windows
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

# ✅ Mock GPIO (replaces RPi.GPIO for laptop)
class GPIO:
    BCM = IN = PUD_UP = LOW = 0
    @staticmethod
    def setmode(m): pass
    @staticmethod
    def setup(pin, *args, **kwargs): pass
    @staticmethod
    def input(pin): return 1
    @staticmethod
    def cleanup(): pass

TEXT_BUTTON_PIN = 17
OBJECT_BUTTON_PIN = 27
GPIO.setmode(GPIO.BCM)
GPIO.setup(TEXT_BUTTON_PIN, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(OBJECT_BUTTON_PIN, GPIO.IN, pull_up_down=GPIO.PUD_UP)

IMAGE_PATH = "captured.jpg"

model = YOLO("yolov5nu.pt")

# ✅ Offline TTS - reinitializes every time to fix pyttsx3 repeat bug
def speak(text):
    print(f"Speaking: {text}")
    engine = pyttsx3.init()
    engine.setProperty('rate', 120)
    engine.setProperty('volume', 1.0)
    engine.say(text)
    engine.runAndWait()
    engine.stop()

# ✅ Uses laptop webcam instead of libcamera
def capture_image():
    print("Capturing image from webcam...")
    cap = cv2.VideoCapture(0)
    time.sleep(1)
    ret, frame = cap.read()
    cap.release()
    if ret:
        cv2.imwrite(IMAGE_PATH, frame)
        print("Image captured.")
    else:
        print("Failed to capture image.")

def image_to_text(image_path):
    image = Image.open(image_path)
    rotated_image = image.rotate(-90, expand=True)
    extracted_text = pytesseract.image_to_string(rotated_image)
    if extracted_text.strip():
        print("Extracted Text:\n", extracted_text)
        speak(extracted_text)
    else:
        print("No text detected in the image.")
        speak("No text detected in the image.")

def detect_object():
    cap = cv2.VideoCapture(0)
    time.sleep(1)
    ret, frame = cap.read()
    cap.release()
    if ret:
        results = model.predict(frame, imgsz=320, conf=0.5)
        detected_objects = set()
        for r in results:
            for box in r.boxes:
                cls = int(box.cls[0])
                label = model.names[cls]
                detected_objects.add(label)
        if detected_objects:
            object_list = ", ".join(detected_objects)
            print("Detected objects:", object_list)
            speak(f"Detected objects are: {object_list}")
        else:
            print("No objects detected.")
            speak("No objects detected.")
    else:
        print("Failed to capture image.")
        speak("Failed to capture image.")

# ✅ Keyboard input instead of physical buttons
print("System running. Press T for text, O for object detection, Q to quit.")
try:
    while True:
        user_input = input("Enter command (T/O/Q): ").strip().upper()
        if user_input == "T":
            print("Text mode!")
            capture_image()
            time.sleep(1)
            image_to_text(IMAGE_PATH)
        elif user_input == "O":
            print("Object detection mode!")
            detect_object()
        elif user_input == "Q":
            break
        time.sleep(0.5)
except KeyboardInterrupt:
    print("\nStopped.")
    GPIO.cleanup()
