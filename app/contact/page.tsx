'use client';

import Navbar from '@/components/Navbar';
import Map from '@/components/contact/map';
import Form from '@/components/contact/form';
import FAQ from '@/components/contact/faq';
import Hero from '@/components/contact/hero';
import { useRef } from 'react';
import { TabsRef } from 'flowbite-react';
import Footer from '@/components/Footer';
import QuickHelp from '@/components/contact/quickHelp';

const Contact = () => {
  const tabsRef = useRef<TabsRef>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero tabsRef={tabsRef} />
        <FAQ />
        <QuickHelp />
        <Map />
        <Form tabsRef={tabsRef} />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
