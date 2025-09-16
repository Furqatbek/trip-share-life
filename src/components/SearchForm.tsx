import { useState } from "react";
import { MapPin, Calendar, Users, Search } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const SearchForm = () => {
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
            From
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5" />
            <Input
              type="text"
              placeholder="Departure city"
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              className="pl-10 h-12 border-2 border-muted focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            To
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5" />
            <Input
              type="text"
              placeholder="Destination city"
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
              className="pl-10 h-12 border-2 border-muted focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            Date
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
            Passengers
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
          Search
        </HeroButton>
      </div>
    </Card>
  );
};

export default SearchForm;