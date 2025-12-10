import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import masalaLogo from "@/assets/LOGO.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Gallery", path: "/gallery" },
  ];

  const rightNavItems = [
    { label: "Shop", path: "/shop" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Left Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={masalaLogo} alt="Masala Spices" className="h-12 w-12" />
            <div className="flex flex-col items-start">
              <span className="text-2xl font-display font-bold text-foreground leading-none">
                VARDHAMAN
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                Spices Food Company
              </span>
            </div>
          </div>

          {/* Right Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {rightNavItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Cart Icon */}
          {/* <button className="p-2 hover:bg-secondary rounded-lg transition-colors relative">
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center font-semibold">
              0
            </span>
          </button> */}
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {[...navItems, ...rightNavItems].map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="flex items-center justify-between text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
