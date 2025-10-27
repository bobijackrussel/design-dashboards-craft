import { Link } from "react-router-dom";
import { ArrowLeft, Search, Filter, Plus, Eye, Edit, Image as ImageIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ItemsPage = () => {
  const items = [
    {
      id: "ART-001",
      name: "Classic Navy Suit",
      category: "Suits",
      subcategory: "Business",
      material: "Wool Blend",
      quality: "Premium",
      colors: ["Navy", "Black", "Charcoal"],
      price: "$850",
      variations: 12,
      imageColor: "from-blue-900 to-slate-800",
    },
    {
      id: "ART-002",
      name: "Silk Evening Dress",
      category: "Dresses",
      subcategory: "Evening",
      material: "Pure Silk",
      quality: "Luxury",
      colors: ["Burgundy", "Emerald", "Gold"],
      price: "$1,200",
      variations: 8,
      imageColor: "from-purple-700 to-rose-600",
    },
    {
      id: "ART-003",
      name: "Cotton Dress Shirt",
      category: "Shirts",
      subcategory: "Formal",
      material: "Egyptian Cotton",
      quality: "Premium",
      colors: ["White", "Light Blue", "Pink"],
      price: "$180",
      variations: 24,
      imageColor: "from-sky-400 to-blue-500",
    },
    {
      id: "ART-004",
      name: "Linen Blazer",
      category: "Jackets",
      subcategory: "Casual",
      material: "Pure Linen",
      quality: "Standard",
      colors: ["Beige", "Navy", "Olive"],
      price: "$420",
      variations: 9,
      imageColor: "from-amber-600 to-orange-700",
    },
    {
      id: "ART-005",
      name: "Wedding Tuxedo",
      category: "Suits",
      subcategory: "Wedding",
      material: "Italian Wool",
      quality: "Luxury",
      colors: ["Black", "Midnight Blue"],
      price: "$1,450",
      variations: 6,
      imageColor: "from-gray-900 to-black",
    },
    {
      id: "ART-006",
      name: "Cashmere Coat",
      category: "Outerwear",
      subcategory: "Winter",
      material: "Cashmere",
      quality: "Luxury",
      colors: ["Camel", "Black", "Gray"],
      price: "$890",
      variations: 5,
      imageColor: "from-stone-600 to-amber-800",
    },
  ];

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case "Luxury":
        return "bg-gradient-accent text-white";
      case "Premium":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

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
              <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Items Catalog
              </h1>
              <p className="text-lg text-muted-foreground">
                Browse and manage your item collection
              </p>
            </div>
            <Button className="bg-gradient-primary hover:opacity-90 gap-2">
              <Plus className="w-5 h-5" />
              Add New Item
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
                  placeholder="Search items by name, category, or material..."
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

        {/* Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 border border-border hover:scale-105">
                {/* Image Placeholder */}
                <div className={`h-56 bg-gradient-to-br ${item.imageColor} relative overflow-hidden flex items-center justify-center`}>
                  <ImageIcon className="w-16 h-16 text-white/30" />
                  <Badge className="absolute top-4 right-4 bg-white/90 text-foreground backdrop-blur-sm">
                    {item.id}
                  </Badge>
                  <Badge className={`absolute top-4 left-4 ${getQualityColor(item.quality)}`}>
                    {item.quality}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-card-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.category} › {item.subcategory}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Material:</span>
                      <span className="font-medium text-foreground">{item.material}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Variations:</span>
                      <span className="font-medium text-foreground">{item.variations}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Available Colors:</p>
                    <div className="flex flex-wrap gap-1">
                      {item.colors.map((color) => (
                        <Badge key={color} variant="outline" className="text-xs">
                          {color}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <p className="text-2xl font-bold text-primary">{item.price}</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="gap-1">
                        <Edit className="w-3 h-3" />
                        Edit
                      </Button>
                      <Button size="sm" className="bg-gradient-primary hover:opacity-90 gap-1">
                        <Eye className="w-3 h-3" />
                        View
                      </Button>
                    </div>
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

export default ItemsPage;
