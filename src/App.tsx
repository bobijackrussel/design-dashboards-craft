import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/AdminDashboard";
import TailorDashboard from "./pages/TailorDashboard";
import ClientDashboard from "./pages/ClientDashboard";
import OrdersPage from "./pages/OrdersPage";
import OffersPage from "./pages/OffersPage";
import ItemsPage from "./pages/ItemsPage";
import CountriesPage from "./pages/CountriesPage";
import MaterialsPage from "./pages/MaterialsPage";
import UsersPage from "./pages/UsersPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/tailor" element={<TailorDashboard />} />
          <Route path="/client" element={<ClientDashboard />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/admin/countries" element={<CountriesPage />} />
          <Route path="/admin/materials" element={<MaterialsPage />} />
          <Route path="/admin/users" element={<UsersPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
