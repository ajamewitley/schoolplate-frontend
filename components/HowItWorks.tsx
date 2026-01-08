import { Search, CreditCard, Store, Utensils } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Browse Students',
    description:
      'Explore profiles of university students from across Cameroon. Filter by university, field of study, or need level.',
  },
  {
    icon: CreditCard,
    title: 'Choose Your Plan',
    description:
      'Select a sponsorship plan that fits your budget — daily, weekly, or monthly meals. Your donation goes directly to partner restaurants.',
  },
  {
    icon: Store,
    title: 'Restaurant Receives Payment',
    description:
      "We partner with trusted restaurants near each university. Your sponsorship is credited to the student's meal account.",
  },
  {
    icon: Utensils,
    title: 'Student consumes the Meal',
    description: 'Sponsored students visit partner restaurants and consume their plates',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber font-semibold text-sm uppercase tracking-wider">
            Simple Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
            How SchoolPlate Works
          </h2>
          <p className="text-muted-foreground text-lg">
            In just four simple steps, you can start making a real difference in a student's life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-border" />
              )}

              <div className="relative bg-background rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-amber flex items-center justify-center text-foreground font-bold shadow-glow">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="font-display text-xl text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
