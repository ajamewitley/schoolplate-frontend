import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/n3.jpg"
          alt="Cameroonian students sharing a meal together"
          width={1200}
          quality={75}
          height={800}
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-accent-foreground/90 via-accent-foreground/20 to-accent-foreground/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fadeUp">
            <Heart className="w-6 h-6 text-amber animate-pulse" fill="currentColor" />
            <span className="text-sm text-primary-foreground/90">Empowering Cameroonian Students</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6 animate-fadeUp" style={{ animationDelay: "0.1s" }}>
            Nourish a Dream,{" "}
            <span className="text-amber">One Meal at a Time</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fadeUp" style={{ animationDelay: "0.2s" }}>
            Many students attend classes on empty stomach. Sponsor meals for university students across Cameroon through our
            partner restaurants — every donation is converted directly into a plate of food.<br />Help them focus on education, not hunger.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fadeUp" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" className="" asChild>
              <Link href="#">
                Sponsor a Student
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link href="/auth">I'm a Student</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-4 mt-12 pt-8 border-t border-primary-foreground/20 animate-fadeUp" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="text-3xl font-display text-primary-foreground">1,500+</p>
              <p className="text-sm text-primary-foreground/60">Students Fed</p>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20 hidden sm:block" />
            <div>
              <p className="text-3xl font-display text-primary-foreground">45+</p>
              <p className="text-sm text-primary-foreground/60">Partner Restaurants</p>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20 hidden sm:block" />
            <div>
              <p className="text-3xl font-display text-primary-foreground">15</p>
              <p className="text-sm text-primary-foreground/60">Universities Reached</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;