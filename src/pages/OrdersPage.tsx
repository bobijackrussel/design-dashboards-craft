import { Link } from "react-router-dom";
import { ArrowLeft, Search, Filter, Download, Eye, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const OrdersPage = () => {
  const orders = [
    {
      id: "ORD-001",
      client: "John Smith",
      item: "Custom Suit - Navy Blue",
      status: "In Progress",
      statusColor: "bg-blue-500",
      date: "2024-01-15",
      amount: "$850.00",
      tailor: "Maria Garcia",
      deadline: "2024-02-15",
    },
    {
      id: "ORD-002",
      client: "Emma Wilson",
      item: "Evening Dress - Burgundy",
      status: "Completed",
      statusColor: "bg-success",
      date: "2024-01-10",
      amount: "$1,200.00",
      tailor: "Maria Garcia",
      deadline: "2024-01-30",
    },
    {
      id: "ORD-003",
      client: "Michael Brown",
      item: "Wedding Suit - Charcoal",
      status: "Pending",
      statusColor: "bg-amber-500",
      date: "2024-01-20",
      amount: "$950.00",
      tailor: "Carlos Rodriguez",
      deadline: "2024-03-01",
    },
    {
      id: "ORD-004",
      client: "Sarah Johnson",
      item: "Business Blazer - Black",
      status: "In Progress",
      statusColor: "bg-blue-500",
      date: "2024-01-18",
      amount: "$650.00",
      tailor: "Maria Garcia",
      deadline: "2024-02-10",
    },
    {
      id: "ORD-005",
      client: "David Lee",
      item: "Casual Shirt Set",
      status: "Cancelled",
      statusColor: "bg-destructive",
      date: "2024-01-12",
      amount: "$320.00",
      tailor: "Anna Kowalski",
      deadline: "2024-02-05",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle2 className="w-4 h-4" />;
      case "In Progress":
        return <Clock className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
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
          <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Orders
          </h1>
          <p className="text-lg text-muted-foreground">
            Manage and track all customer orders
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-xl p-6 shadow-card border border-border mb-6 animate-fade-in">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search orders..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Orders Grid */}
        <div className="grid gap-4">
          {orders.map((order, index) => (
            <div
              key={order.id}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 border border-border animate-fade-in group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-3">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-card-foreground">{order.id}</h3>
                        <Badge className={`${order.statusColor} text-white flex items-center gap-1`}>
                          {getStatusIcon(order.status)}
                          {order.status}
                        </Badge>
                      </div>
                      <p className="text-lg font-medium text-foreground mb-1">{order.item}</p>
                      <p className="text-sm text-muted-foreground">Client: {order.client}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">Order Date</p>
                      <p className="font-medium text-foreground">{order.date}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Deadline</p>
                      <p className="font-medium text-foreground">{order.deadline}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Tailor</p>
                      <p className="font-medium text-foreground">{order.tailor}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Amount</p>
                      <p className="font-bold text-primary text-lg">{order.amount}</p>
                    </div>
                  </div>
                </div>

                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity gap-2 group-hover:scale-105 transition-transform">
                  <Eye className="w-4 h-4" />
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
