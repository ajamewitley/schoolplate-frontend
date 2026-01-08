'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(false);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" onClick={handleClick} className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center">
              <span className="text-primary-foreground font-display text-xl">S</span>
            </div>
            <span className="font-display text-2xl text-foreground">SchoolPlate</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#how-it-works"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              How it Works
            </a>
            <a
              href="#students"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Students
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Sponsorship Plans
            </a>
            <a
              href="#impact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Our Impact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/auth">Sign In</Link>
            </Button>
            <Button variant="default" asChild>
              <Link href="#">Start Sponsoring</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fadeIn">
            <div className="flex flex-col gap-4">
              <a
                href="#how-it-works"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={handleClick}
              >
                How it Works
              </a>
              <a
                href="#students"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={handleClick}
              >
                Students
              </a>
              <a
                href="#pricing"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={handleClick}
              >
                Sponsorship Plans
              </a>
              <a
                href="#impact"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={handleClick}
              >
                Our Impact
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Button variant="ghost" className="w-full">
                  <Link href="/auth" className="w-full">
                    Sign In
                  </Link>
                </Button>
                <Button onClick={handleClick} variant="default" className="w-full">
                  <Link href="#" className="w-full">
                    Start Sponsoring
                  </Link>
                </Button>
              </div>
            </div>
            <div
              onClick={handleClick}
              className="fixed top-0 left-0 h-screen w-screen bg-background/30 blur-lg -z-1"
            ></div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
