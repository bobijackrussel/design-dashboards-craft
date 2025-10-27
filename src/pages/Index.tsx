import { Link } from "react-router-dom";
import { Users, Scissors, User } from "lucide-react";

const Index = () => {
  const roles = [
    {
      title: "Admin Dashboard",
      description: "Manage countries, materials, users, and system settings",
      icon: Users,
      path: "/admin",
      gradient: "from-primary to-secondary",
    },
    {
      title: "Tailor Dashboard",
      description: "View orders, manage offers, and create items",
      icon: Scissors,
      path: "/tailor",
      gradient: "from-secondary to-accent",
    },
    {
      title: "Client Dashboard",
      description: "Browse offers, place orders, and track measurements",
      icon: User,
      path: "/client",
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Tailor Management
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional tailoring and order management system. Select your role to continue.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <Link
                key={role.path}
                to={role.path}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-full bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 border border-border hover:scale-105 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${role.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-3 text-card-foreground">
                      {role.title}
                    </h2>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {role.description}
                    </p>

                    <div className="mt-6 flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Access Dashboard
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
