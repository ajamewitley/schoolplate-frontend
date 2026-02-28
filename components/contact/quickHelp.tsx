import { Button } from '@/components/ui/button';
import { Mail, Phone, TriangleAlert } from 'lucide-react';
import { FaBolt, FaWhatsapp } from 'react-icons/fa';

const QuickHelp = () => {
  return (
    <section id="quick-help" className="py-16 px-6 lg:py-20">
      <div className="max-w-3xl mx-auto bg-destructive/10 border border-destructive/50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-secondary mb-3">Quick Help</h2>
        <p className="mb-6">
          Need immediate help with anything?
          <br />
          Contact our support team through any of the methods below.
        </p>
        <div className="grid sm:grid-cols-3 justify-center gap-4">
          <Button
            variant="outline"
            className="text-foreground border-foreground hover:bg-foreground hover:text-background cursor-pointer"
          >
            <Phone className="shrink-0" />
            Call
          </Button>
          <Button variant="outline" className="cursor-pointer">
            <FaWhatsapp className="shrink-0" />
            WhatsApp
          </Button>
          <Button
            variant="outline"
            className="text-amber border-amber hover:bg-amber hover:text-foreground cursor-pointer"
          >
            <Mail className="shrink-0" />
            Mail
          </Button>
        </div>

        <p className="mt-6 flex gap-3 justify-center">
          <FaBolt className="text-amber shrink-0" />
          Response time: Under 2 hours
        </p>
      </div>
    </section>
  );
};

export default QuickHelp;
