import { Button } from '@/components/ui/button';
import { ArrowRight, Heart } from 'lucide-react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-2">
        <div className="max-w-4xl mx-auto text-center bg-gradient-hero rounded-3xl p-12 md:p-16 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full blur-2xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-8 py-2 mb-6">
              <Heart className="w-6 h-6 text-amber animate-pulse" fill="currentColor" />
              <span className="text-sm text-primary-foreground">
                Join 50+ Donors Making a Difference
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
              Ready to Change a Student's Life?
            </h2>

            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Your sponsorship goes to partner restaurants where students redeem these plates. No
              cash to students — just guaranteed nutrition fueling their dreams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group" asChild>
                <Link href="/auth">
                  Start Sponsoring
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
