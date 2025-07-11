
import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag, User, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { link } from 'fs';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);

  const collections = [
    { name: 'Essential Collection', description: 'Timeless basics for every professional' },
    { name: 'Premium Series', description: 'Luxury fabrics and exclusive designs'},
    { name: 'Limited Edition', description: 'Seasonal drops and collaborations' },
  ];

  return (
    <header className="relative bg-white/95 backdrop-blur-md border-b border-gray-100 top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold text-luxury-charcoal tracking-tight">
                Luxy<span className="text-luxury-rose">Attire</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div 
              className="relative"
              onMouseEnter={() => setIsCollectionsOpen(true)}
              onMouseLeave={() => setIsCollectionsOpen(false)}
            >
              <Link 
                to={null}
                className="flex items-center text-luxury-charcoal hover:text-luxury-plum transition-colors duration-200 font-medium"
              >
                Collections
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              
              {/* Collections Dropdown */}
              {isCollectionsOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-lg shadow-xl border border-gray-100 p-6 animate-fade-in">
                  <div className="space-y-4">
                    {collections.map((collection, index) => (
                      <Link 
                        key={index} 
                        to={"/collections"}
                        className="group cursor-pointer p-3 rounded-md hover:bg-gray-50 transition-colors duration-200 block"
                      >
                        <h3 className="font-semibold text-luxury-charcoal group-hover:text-luxury-plum transition-colors duration-200">
                          {collection.name}
                        </h3>
                        <p className="text-sm text-luxury-stone mt-1">{collection.description}</p>
                      </Link>
                    ))}
                    {/* <Link 
                      to="/collections"
                      className="block pt-4 border-t border-gray-100 text-luxury-plum hover:text-luxury-plum/80 font-medium"
                    >
                      View All Collections →
                    </Link> */}
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/about" className="text-luxury-charcoal hover:text-luxury-plum transition-colors duration-200 font-medium">About</Link>
            {/* <a href="#" className="text-luxury-charcoal hover:text-luxury-plum transition-colors duration-200 font-medium">Sustainability</a> */}
            <Link to="/contact" className="text-luxury-charcoal hover:text-luxury-plum transition-colors duration-200 font-medium">Contact</Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button size="sm" className="hidden sm:flex bg-transparent hover:bg-white text-luxury-plum" asChild>
              <Link to="/search">
                <Search className="h-5 w-5"/>
              </Link>
            </Button>
            <Button size="sm" className='bg-transparent hover:bg-white text-luxury-plum' asChild>
              <Link to="/profile">
                <User className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="sm" className="relative bg-transparent hover:bg-white text-luxury-plum" asChild>
              <Link to="/cart">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-luxury-rose text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 animate-slide-up">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-luxury-charcoal">Collections</h3>
                {collections.map((collection, index) => (
                  <Link 
                    key={index} 
                    to={null} 
                    className="block pl-4 py-2 text-luxury-stone hover:text-luxury-plum transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {collection.name}
                  </Link>
                ))}
              </div>
              <Link 
                to="/about" 
                className="block py-2 text-luxury-charcoal hover:text-luxury-plum transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block py-2 text-luxury-charcoal hover:text-luxury-plum transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-100 flex space-x-4">
                <Link to="/search" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" size="sm">
                    <Search className="h-5 w-5 " />
                  </Button>
                </Link>
                <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" size="sm">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="relative">
                    <ShoppingBag className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 bg-luxury-rose text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      0
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
