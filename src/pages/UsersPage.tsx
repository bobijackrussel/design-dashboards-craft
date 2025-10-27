import { Link } from "react-router-dom";
import { ArrowLeft, Search, Plus, Mail, Phone, MapPin, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const UsersPage = () => {
  const users = [
    {
      id: 1,
      name: "Maria Garcia",
      email: "maria.garcia@email.com",
      phone: "+39 123 456 7890",
      location: "Milan, Italy",
      role: "Tailor",
      status: "Active",
      orders: 127,
    },
    {
      id: 2,
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "+1 555 123 4567",
      location: "New York, USA",
      role: "Client",
      status: "Active",
      orders: 8,
    },
    {
      id: 3,
      name: "Sophie Laurent",
      email: "sophie.laurent@email.com",
      phone: "+33 1 23 45 67 89",
      location: "Paris, France",
      role: "Tailor",
      status: "Active",
      orders: 89,
    },
    {
      id: 4,
      name: "Emma Wilson",
      email: "emma.wilson@email.com",
      phone: "+44 20 7123 4567",
      location: "London, UK",
      role: "Client",
      status: "Active",
      orders: 12,
    },
    {
      id: 5,
      name: "Carlos Rodriguez",
      email: "carlos.rodriguez@email.com",
      phone: "+34 91 123 4567",
      location: "Barcelona, Spain",
      role: "Tailor",
      status: "Active",
      orders: 156,
    },
    {
      id: 6,
      name: "Michael Brown",
      email: "michael.brown@email.com",
      phone: "+1 555 987 6543",
      location: "Chicago, USA",
      role: "Client",
      status: "Inactive",
      orders: 3,
    },
  ];

  const getRoleBadge = (role: string) => {
    return role === "Tailor" 
      ? "bg-primary text-primary-foreground" 
      : "bg-secondary text-secondary-foreground";
  };

  const getStatusBadge = (status: string) => {
    return status === "Active"
      ? "bg-success text-success-foreground"
      : "bg-muted text-muted-foreground";
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
                User Management
              </h1>
              <p className="text-lg text-muted-foreground">
                Manage clients and tailors
              </p>
            </div>
            <Button className="bg-gradient-primary hover:opacity-90 gap-2">
              <Plus className="w-5 h-5" />
              Add User
            </Button>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-card border border-border mb-6 animate-fade-in">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search users..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="grid gap-4">
          {users.map((user, index) => (
            <div
              key={user.id}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 border border-border animate-fade-in group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-card-foreground">{user.name}</h3>
                    <Badge className={getRoleBadge(user.role)}>{user.role}</Badge>
                    <Badge className={getStatusBadge(user.status)}>{user.status}</Badge>
                  </div>

                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      {user.email}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      {user.phone}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {user.location}
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className="text-sm text-muted-foreground">
                      Total Orders: <span className="font-bold text-primary">{user.orders}</span>
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="gap-1">
                    <Edit className="w-3 h-3" />
                    Edit
                  </Button>
                  <Button size="sm" variant="outline" className="text-destructive hover:text-destructive gap-1">
                    <Trash2 className="w-3 h-3" />
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
