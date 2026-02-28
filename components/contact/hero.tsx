import { Button } from '@/components/ui/button';
import { TabsRef } from 'flowbite-react';
import { RefObject } from 'react';
import Link from 'next/link';

const Hero = ({ tabsRef }: { tabsRef: RefObject<TabsRef | null> }) => {
  const handleClick = (id: number) => {
    document.getElementById('support')?.scrollIntoView({ behavior: 'smooth' });
    tabsRef.current?.setActiveTab(id);
  };

  return (
    <section id="hero" className="py-16 lg:py-20 bg-primary text-center">
      <div className="pt-16 px-6">
        <h1 className="text-4xl lg:text-6xl text-amber font-bold mb-4 lg:mb-6">
          Contact & Support
        </h1>
        <h2 className="text-xl lg:text-2xl text-cream mb-8 px-4">
          Helping university students receive daily meals during studies
        </h2>
        <div className="max-w-125 mx-auto grid sm:grid-cols-3 gap-5 justify-center">
          <Button variant="hero-outline" className="cursor-pointer" onClick={() => handleClick(0)}>
            Student Help
          </Button>
          <Button variant="hero-outline" className="cursor-pointer" onClick={() => handleClick(1)}>
            Restaurant Info
          </Button>
          <Button variant="hero-outline" className="cursor-pointer" onClick={() => handleClick(2)}>
            Sponsor Info
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
