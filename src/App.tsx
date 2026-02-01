import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import News from "./pages/News";
import Clubs from "./pages/Clubs";
import ClubDetail from "./pages/ClubDetail";
import Alumni from "./pages/Alumni";
import AlumniDetail from "./pages/AlumniDetail";
import Students from "./pages/Students";
import AlumniSolidarity from "./pages/AlumniSolidarity";
import Kvkk from "./pages/Kvkk";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
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
          <Route path="/news" element={<News />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/clubs/:slug" element={<ClubDetail />} />
          <Route path="/students" element={<Students />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/alumni/:id" element={<AlumniDetail />} />
          <Route path="/mezun-dayanisma" element={<AlumniSolidarity />} />
          <Route path="/kvkk" element={<Kvkk />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
