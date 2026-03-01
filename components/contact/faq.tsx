import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/accordion';

const FAQ = () => {
  return (
    <section id="faq" className="py-16 lg:py-20 bg-card">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="border rounded-xl">
          <AccordionItem value="faq-1">
            <AccordionTrigger className="font-bold text-lg p-5">
              How do students receive meals?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-5">
              Students receive a badge which is shown at partner restaurants.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger className="font-bold text-lg p-5">
              What happens if I miss a day?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-5">
              Immediately report through the Missed your meal section and support will assist you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger className="font-bold text-lg p-5">
              Can restaurants join anytime?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-5">
              Yes, onboarding takes 24-48 hours after verification.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4">
            <AccordionTrigger className="font-bold text-lg p-5">
              How do sponsors track impact?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-5">
              Sponsors receive monthly reports showing students fed and meals delivered.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
