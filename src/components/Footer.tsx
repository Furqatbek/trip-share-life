import { Car, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-primary rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">{t('brandName')}</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              {t('footerDescription')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('quickLinks')}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">{t('findRides')}</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">{t('offerRide')}</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">{t('howItWorks')}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('support')}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">{t('helpCenter')}</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">{t('termsService')}</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">{t('privacyPolicy')}</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">{t('contactUs')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('followUs')}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-white/80">support@tashgo.uz</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-white/80">+998 (71) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-white/80">Tashkent, Uzbekistan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 {t('brandName')}. {t('rightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;