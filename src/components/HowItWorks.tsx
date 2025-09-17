import { Search, MessageCircle, Car, ThumbsUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";


const HowItWorks = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: Search,
      title: t('step1Title'),
      description: t('step1Description'),
      step: "01"
    },
    {
      icon: MessageCircle,
      title: t('step2Title'),
      description: t('step2Description'),
      step: "02"
    },
    {
      icon: Car,
      title: t('step3Title'),
      description: t('step3Description'),
      step: "03"
    },
    {
      icon: ThumbsUp,
      title: t('step4Title'),
      description: t('step4Description'),
      step: "04"
    }
  ];
  return (
    <section className="py-20 surface-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('howItWorksTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('howItWorksSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-primary to-primary/30 transform translate-x-4 z-0"></div>
              )}
              
              <Card className="card-shadow hover:card-shadow-glow transition-all duration-500 hover:-translate-y-3 border-0 bg-gradient-to-br from-white to-purple-50/30 relative z-10 group">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full hero-gradient text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-10 w-10" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;