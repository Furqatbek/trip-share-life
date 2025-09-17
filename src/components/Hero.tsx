import { ArrowRight, Shield, Users, Star } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";
import SearchForm from "@/components/SearchForm";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-image-modern.jpg";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        <img 
          src={heroImage} 
          alt="People sharing rides" 
          className="w-full h-full object-cover mix-blend-overlay opacity-30"
        />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
          <Shield className="h-8 w-8 text-white" />
        </div>
      </div>
      <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
          <Users className="h-8 w-8 text-white" />
        </div>
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
          <Star className="h-8 w-8 text-white" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="text-center mb-8 sm:mb-12 animate-slide-up">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            {t('heroTitle1')}
            <span className="block gradient-text bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">{t('heroTitle2')}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            {t('heroSubtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
            <HeroButton variant="secondary" size="lg">
              {t('findARide')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </HeroButton>
            <HeroButton variant="outline" size="lg">
              {t('offerARide')}
            </HeroButton>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-white/80 mb-8 sm:mb-16 px-4">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm font-medium">{t('verifiedDrivers')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm font-medium">{t('averageRating')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm font-medium">{t('happyTravelers')}</span>
            </div>
          </div>
        </div>

        {/* Search Form */}
        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <SearchForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;