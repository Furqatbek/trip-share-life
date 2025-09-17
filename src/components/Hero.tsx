import { ArrowRight, MapPin, Clock, Shield } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="glass-effect rounded-2xl p-4">
          <MapPin className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="glass-effect rounded-2xl p-4">
          <Clock className="h-6 w-6 text-secondary" />
        </div>
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <div className="glass-effect rounded-2xl p-4">
          <Shield className="h-6 w-6 text-accent" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 leading-tight tracking-tight">
            {t('heroTitle1')}
            <span className="block gradient-text mt-2">{t('heroTitle2')}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>
          
          {/* Main CTA */}
          <div className="animate-bounce-in mb-16" style={{ animationDelay: '0.3s' }}>
            <HeroButton variant="primary" size="lg" className="shadow-button text-lg px-12 py-4 h-auto">
              {t('requestRide')}
              <ArrowRight className="ml-3 h-5 w-5" />
            </HeroButton>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="glass-effect rounded-2xl p-6 hover:shadow-soft transition-all duration-300">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-medium text-foreground mb-2">{t('quickBooking')}</h3>
              <p className="text-sm text-muted-foreground">{t('quickBookingDesc')}</p>
            </div>
            <div className="glass-effect rounded-2xl p-6 hover:shadow-soft transition-all duration-300">
              <Clock className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h3 className="font-medium text-foreground mb-2">{t('fastPickup')}</h3>
              <p className="text-sm text-muted-foreground">{t('fastPickupDesc')}</p>
            </div>
            <div className="glass-effect rounded-2xl p-6 hover:shadow-soft transition-all duration-300">
              <Shield className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-medium text-foreground mb-2">{t('safeRides')}</h3>
              <p className="text-sm text-muted-foreground">{t('safeRidesDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;