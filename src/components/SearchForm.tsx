import { useState } from "react";
import { MapPin, Calendar, Users, Search } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const SearchForm = () => {
  const { t } = useLanguage();
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("1");

  const handleSearch = () => {
    console.log("Searching rides:", { fromLocation, toLocation, date, passengers });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto p-6 card-shadow-hover bg-white/95 backdrop-blur-sm border-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        <div className="relative">
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            {t('from')}
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5" />
            <Input
              type="text"
              placeholder={t('departureCityPlaceholder')}
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              className="pl-10 h-12 border-2 border-muted focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            {t('to')}
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5" />
            <Input
              type="text"
              placeholder={t('destinationCityPlaceholder')}
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
              className="pl-10 h-12 border-2 border-muted focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            {t('date')}
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5" />
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="pl-10 h-12 border-2 border-muted focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            {t('passengers')}
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5" />
            <Input
              type="number"
              min="1"
              max="8"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="pl-10 h-12 border-2 border-muted focus:border-primary transition-colors"
            />
          </div>
        </div>

        <HeroButton 
          onClick={handleSearch}
          size="lg"
          className="h-12 w-full"
        >
          <Search className="mr-2 h-5 w-5" />
          {t('search')}
        </HeroButton>
      </div>
    </Card>
  );
};

export default SearchForm;