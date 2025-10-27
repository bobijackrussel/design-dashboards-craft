import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingBag, Tag, Shirt, Ruler, Palette } from "lucide-react";

const TailorDashboard = () => {
  const tailorCards = [
    {
      title: "My Orders",
      description: "View and manage customer orders",
      icon: ShoppingBag,
      path: "/orders",
      color: "from-primary to-primary-glow",
      featured: true,
    },
    {
      title: "My Offers",
      description: "Create and manage item offers",
      icon: Tag,
      path: "/offers",
      color: "from-secondary to-accent",
      featured: true,
    },
    {
      title: "Items Catalog",
      description: "Browse and add items to catalog",
      icon: Shirt,
      path: "/items",
      color: "from-accent to-primary",
      featured: true,
    },
    {
      title: "Measurements",
      description: "Manage customer measurements",
      icon: Ruler,
      path: "/tailor/measurements",
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "My Creations",
      description: "Showcase finished works",
      icon: Palette,
      path: "/tailor/creations",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="mb-12 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Tailor Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Manage your orders, offers, and creations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tailorCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.path}
                to={card.path}
                className={`group animate-fade-in ${card.featured ? 'md:col-span-1' : ''}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 border border-border hover:scale-105 h-full ${card.featured ? 'lg:p-8' : ''}`}>
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">
                    {card.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm">
                    {card.description}
                  </p>

                  {card.featured && (
                    <div className="mt-4 inline-flex items-center text-primary text-sm font-medium">
                      View Details
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TailorDashboard;
