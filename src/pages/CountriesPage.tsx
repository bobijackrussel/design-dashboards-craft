import { Link } from "react-router-dom";
import { ArrowLeft, Search, Plus, Globe, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CountriesPage = () => {
  const countries = [
    { name: "Italy", code: "IT", tailors: 45, flag: "🇮🇹" },
    { name: "France", code: "FR", tailors: 38, flag: "🇫🇷" },
    { name: "United Kingdom", code: "GB", tailors: 32, flag: "🇬🇧" },
    { name: "Spain", code: "ES", tailors: 28, flag: "🇪🇸" },
    { name: "Germany", code: "DE", tailors: 25, flag: "🇩🇪" },
    { name: "India", code: "IN", tailors: 52, flag: "🇮🇳" },
    { name: "Poland", code: "PL", tailors: 18, flag: "🇵🇱" },
    { name: "Japan", code: "JP", tailors: 22, flag: "🇯🇵" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        <Link to="/admin" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Admin Dashboard
        </Link>

        <div className="mb-8 animate-fade-in-up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Country Management
              </h1>
              <p className="text-lg text-muted-foreground">
                Manage countries and tailor locations
              </p>
            </div>
            <Button className="bg-gradient-primary hover:opacity-90 gap-2">
              <Plus className="w-5 h-5" />
              Add Country
            </Button>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-card border border-border mb-6 animate-fade-in">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search countries..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {countries.map((country, index) => (
            <div
              key={country.code}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 border border-border hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{country.flag}</div>
                <Badge variant="outline">{country.code}</Badge>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-card-foreground">
                {country.name}
              </h3>
              
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Globe className="w-4 h-4" />
                <span className="text-sm">{country.tailors} Tailors</span>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 gap-1">
                  <Edit className="w-3 h-3" />
                  Edit
                </Button>
                <Button size="sm" variant="outline" className="text-destructive hover:text-destructive gap-1">
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountriesPage;
