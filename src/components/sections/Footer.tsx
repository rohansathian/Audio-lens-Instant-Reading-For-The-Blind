export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-800 bg-navy-950 py-12 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Project Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="text-xl font-display font-bold text-white tracking-tight">
            Blind People <span className="text-accent-soft">Navigation System</span>
          </div>
          <p className="text-sm text-gray-500 max-w-sm">
            Empowering visually impaired individuals to navigate independently with 
            affordable, offline AI edge technology.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a href="#github" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
            Source Code (GitHub)
          </a>
          <a href="#developer" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
            Developer Info
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xs text-gray-500">
          © {currentYear} Engineering Capstone Project. All rights reserved.
        </div>
        <div className="text-xs text-gray-500">
          Designed & Built by Rohan
        </div>
      </div>
      
    </footer>
  );
}
