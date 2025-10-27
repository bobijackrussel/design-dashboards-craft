import { Link } from "react-router-dom";
import { ArrowLeft, Globe, Package, Users, Award, Layers, Activity } from "lucide-react";

const AdminDashboard = () => {
  const managementCards = [
    {
      title: "Country Management",
      description: "Manage countries and tailor locations",
      icon: Globe,
      path: "/admin/countries",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Material Management",
      description: "Add and edit fabric materials",
      icon: Package,
      path: "/admin/materials",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "User Management",
      description: "Manage clients and tailors",
      icon: Users,
      path: "/admin/users",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Quality Management",
      description: "Define material quality levels",
      icon: Award,
      path: "/admin/quality",
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Category Management",
      description: "Organize item categories",
      icon: Layers,
      path: "/admin/categories",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Status Management",
      description: "Configure order statuses",
      icon: Activity,
      path: "/admin/statuses",
      color: "from-rose-500 to-red-500",
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
            Admin Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Manage system settings, users, and master data
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {managementCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.path}
                to={card.path}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 border border-border hover:scale-105 h-full">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">
                    {card.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm">
                    {card.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
