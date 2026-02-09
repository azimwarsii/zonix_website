import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-zonix-bg text-zonix-text selection:bg-zonix-accent selection:text-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-zonix-bg/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tighter hover:text-white transition-colors">
            zonix.
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-zonix-muted">
            <Link to="/support" className="hover:text-zonix-text transition-colors">Support</Link>
            <Link to="/privacy" className="hover:text-zonix-text transition-colors">Privacy</Link>
            <Link 
              to="/" 
              className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all border border-white/5 flex items-center gap-2"
            >
              Join Waitlist <ArrowRight size={14} />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-zonix-text p-2">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-zonix-bg p-6 md:hidden">
          <nav className="flex flex-col space-y-6 text-lg font-medium text-zonix-muted">
            <Link to="/" className="block hover:text-zonix-text">Home</Link>
            <Link to="/support" className="block hover:text-zonix-text">Support</Link>
            <Link to="/privacy" className="block hover:text-zonix-text">Privacy Policy</Link>
            <Link to="/terms" className="block hover:text-zonix-text">Terms & Conditions</Link>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-24 px-6 relative">
         {/* Subtle background gradient blob */}
         <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-zonix-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
         <div className="max-w-6xl mx-auto">
            {children}
         </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-20 bg-zonix-bg">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zonix-muted text-sm">
            © {new Date().getFullYear()} Zonix Inc. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-zonix-muted">
            <Link to="/privacy" className="hover:text-zonix-text transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-zonix-text transition-colors">Terms</Link>
            <Link to="/support" className="hover:text-zonix-text transition-colors">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;