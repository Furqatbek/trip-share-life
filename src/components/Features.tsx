import { Shield, DollarSign, Leaf, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";


const Features = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Shield,
      title: t('safeSecureTitle'),
      description: t('safeSecureDescription'),
      color: "text-green-600"
    },
    {
      icon: DollarSign,
      title: t('affordableTitle'),
      description: t('affordableDescription'),
      color: "text-primary"
    },
    {
      icon: Leaf,
      title: t('ecoFriendlyTitle'),
      description: t('ecoFriendlyDescription'),
      color: "text-green-500"
    },
    {
      icon: Users,
      title: t('communityTitle'),
      description: t('communityDescription'),
      color: "text-purple-600"
    }
  ];
  return (
    <section className="py-20 surface-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('featuresTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('featuresSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">{/* Updated to 2 columns */}
          {features.map((feature, index) => (
            <Card key={index} className="card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary/10 to-primary/20 mb-6`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;