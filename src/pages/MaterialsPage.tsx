import { Link } from "react-router-dom";
import { ArrowLeft, Search, Plus, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MaterialsPage = () => {
  const materials = [
    { name: "Wool", type: "Natural", items: 124, qualities: ["Standard", "Premium", "Luxury"] },
    { name: "Silk", type: "Natural", items: 89, qualities: ["Premium", "Luxury"] },
    { name: "Cotton", type: "Natural", items: 256, qualities: ["Standard", "Premium"] },
    { name: "Linen", type: "Natural", items: 67, qualities: ["Standard", "Premium"] },
    { name: "Cashmere", type: "Natural", items: 43, qualities: ["Luxury"] },
    { name: "Polyester", type: "Synthetic", items: 178, qualities: ["Standard"] },
    { name: "Velvet", type: "Natural", items: 52, qualities: ["Premium", "Luxury"] },
    { name: "Denim", type: "Natural", items: 94, qualities: ["Standard", "Premium"] },
  ];

  const getTypeColor = (type: string) => {
    return type === "Natural" ? "bg-success text-success-foreground" : "bg-secondary text-secondary-foreground";
  };

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
                Material Management
              </h1>
              <p className="text-lg text-muted-foreground">
                Manage fabric materials and their properties
              </p>
            </div>
            <Button className="bg-gradient-primary hover:opacity-90 gap-2">
              <Plus className="w-5 h-5" />
              Add Material
            </Button>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-card border border-border mb-6 animate-fade-in">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search materials..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {materials.map((material, index) => (
            <div
              key={material.name}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 border border-border hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-card-foreground">{material.name}</h3>
                <Badge className={getTypeColor(material.type)}>{material.type}</Badge>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3">
                Used in {material.items} items
              </p>

              <div className="mb-4">
                <p className="text-xs text-muted-foreground mb-2">Available Qualities:</p>
                <div className="flex flex-wrap gap-1">
                  {material.qualities.map((quality) => (
                    <Badge key={quality} variant="outline" className="text-xs">
                      {quality}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t border-border">
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

export default MaterialsPage;
