import { Link } from "react-router-dom";
import { ArrowLeft, Search, Filter, Plus, Star, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const OffersPage = () => {
  const offers = [
    {
      id: 1,
      title: "Custom Business Suit",
      tailor: "Maria Garcia",
      location: "Milan, Italy",
      price: "$850 - $1,200",
      rating: 4.9,
      reviews: 127,
      category: "Suits",
      imageColor: "from-slate-700 to-slate-900",
      featured: true,
    },
    {
      id: 2,
      title: "Evening Gown Design",
      tailor: "Sophie Laurent",
      location: "Paris, France",
      price: "$1,500 - $2,800",
      rating: 5.0,
      reviews: 89,
      category: "Dresses",
      imageColor: "from-rose-500 to-purple-600",
      featured: true,
    },
    {
      id: 3,
      title: "Traditional Wedding Attire",
      tailor: "Raj Patel",
      location: "Mumbai, India",
      price: "$980 - $1,450",
      rating: 4.8,
      reviews: 203,
      category: "Wedding",
      imageColor: "from-amber-500 to-red-600",
    },
    {
      id: 4,
      title: "Casual Shirt Collection",
      tailor: "Carlos Rodriguez",
      location: "Barcelona, Spain",
      price: "$120 - $280",
      rating: 4.7,
      reviews: 156,
      category: "Casual",
      imageColor: "from-blue-400 to-cyan-500",
    },
    {
      id: 5,
      title: "Premium Blazer Service",
      tailor: "Anna Kowalski",
      location: "Warsaw, Poland",
      price: "$420 - $680",
      rating: 4.9,
      reviews: 94,
      category: "Business",
      imageColor: "from-indigo-600 to-purple-700",
    },
    {
      id: 6,
      title: "Traditional Kimono",
      tailor: "Yuki Tanaka",
      location: "Tokyo, Japan",
      price: "$1,100 - $1,900",
      rating: 5.0,
      reviews: 67,
      category: "Traditional",
      imageColor: "from-pink-500 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        <Link to="/tailor" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Dashboard
        </Link>

        <div className="mb-8 animate-fade-in-up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
                Offers
              </h1>
              <p className="text-lg text-muted-foreground">
                Browse and manage tailor offers
              </p>
            </div>
            <Button className="bg-gradient-primary hover:opacity-90 gap-2">
              <Plus className="w-5 h-5" />
              Create New Offer
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-xl p-6 shadow-card border border-border mb-8 animate-fade-in">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search offers..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 border border-border hover:scale-105">
                {/* Image Placeholder */}
                <div className={`h-48 bg-gradient-to-br ${offer.imageColor} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  {offer.featured && (
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-white/90 text-foreground backdrop-blur-sm">
                      {offer.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                    {offer.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4" />
                    {offer.location}
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">
                    by {offer.tailor}
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="font-bold text-foreground">{offer.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({offer.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Price Range</p>
                      <p className="text-lg font-bold text-primary">{offer.price}</p>
                    </div>
                    <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
