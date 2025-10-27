import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Eye, Ruler, Heart } from "lucide-react";

const ClientDashboard = () => {
  const clientCards = [
    {
      title: "Browse Offers",
      description: "Explore available items and services",
      icon: Eye,
      path: "/offers",
      color: "from-primary to-secondary",
      featured: true,
    },
    {
      title: "My Orders",
      description: "Track your order status",
      icon: ShoppingCart,
      path: "/orders",
      color: "from-secondary to-accent",
      featured: true,
    },
    {
      title: "My Measurements",
      description: "View and update measurements",
      icon: Ruler,
      path: "/client/measurements",
      color: "from-accent to-primary",
    },
    {
      title: "Saved Creations",
      description: "Your favorite designs",
      icon: Heart,
      path: "/client/favorites",
      color: "from-rose-500 to-pink-500",
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
            Client Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Browse items, place orders, and track your requests
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {clientCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.path}
                to={card.path}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`bg-card rounded-xl p-8 shadow-card hover:shadow-hover transition-all duration-300 border border-border hover:scale-105 h-full ${card.featured ? 'md:p-10' : ''}`}>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-card-foreground">
                    {card.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {card.description}
                  </p>

                  {card.featured && (
                    <div className="mt-6 inline-flex items-center text-primary font-medium">
                      Explore
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

export default ClientDashboard;
