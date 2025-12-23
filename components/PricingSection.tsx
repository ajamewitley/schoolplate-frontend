import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "One-Time Supporter",
    price: "1,000",
    currency: "XAF",
    period: "one time",
    description: "Provide a plate redeemable at partner restaurants",
    features: [
      "One-time plate for the day",
      "Consumed at any partner restaurant",
      "Go Anonymous while helping",
      "No strings attached",
    ],
    popular: false,
  },
  {
    name: "Weekly Supporter",
    price: "5,000",
    currency: "XAF",
    period: "per week",
    description: "Feed a student for an entire week",
    features: [
      "5 plates per week",
      "Choose your student",
      "Become the parent",
      "Weekly photo updates",
      "A Thank you message from student",
    ],
    popular: true,
  },
  {
    name: "Monthly Champion",
    price: "20,000",
    currency: "XAF",
    period: "per month",
    description: "Become a champion for a student's success",
    features: [
      "30 plates per month",
      "Personal student match",
      "Your photo showcased on our Champions Billboard",
      "Video updates",
      "Direct messaging",
      "Certificate of appreciation",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber font-semibold text-sm uppercase tracking-wider">Sponsorship Plans</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-accent-foreground mt-4 mb-6">
            Choose How You Want to Help
          </h2>
          <p className="text-muted-foreground text-lg">
            Your donation goes directly to partner restaurants. Student consumes the meal — no cash handling by student.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 ${
              plan.popular ? "border-2 border-amber" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-amber px-4 py-1 rounded-full text-sm font-semibold text-foreground shadow-glow">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-display text-2xl text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-display text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.currency}</span>
                </div>
                <p className="text-muted-foreground text-sm">{plan.period}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
                size="lg"
                asChild
              >
                <Link href="#">Start Sponsoring</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
