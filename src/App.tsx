import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Company from "./pages/Company";
import PowerEquipment from "./pages/PowerEquipment";
import CardioEquipment from "./pages/CardioEquipment";
import FunctionalTraining from "./pages/FunctionalTraining";
import ProductDetail from "./pages/ProductDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LicenseAgreement from "./pages/LicenseAgreement";
import CustomDevelopment from "./pages/CustomDevelopment";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/company" element={<Company />} />
          <Route path="/products/power" element={<PowerEquipment />} />
          <Route path="/products/cardio" element={<CardioEquipment />} />
          <Route path="/products/functional" element={<FunctionalTraining />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/custom" element={<CustomDevelopment />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/license" element={<LicenseAgreement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
