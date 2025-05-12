
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Import the pages
import Learn from "./pages/Learn";
import LearnModule from "./pages/LearnModule";
import LearningPath from "./pages/LearningPath";
import Labs from "./pages/Labs";
import Editor from "./pages/Editor";
import Roadmap from "./pages/Roadmap";
import Quiz from "./pages/Quiz";
import QuizDetails from "./pages/Quiz/QuizDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/module/:slug" element={<LearnModule />} />
          <Route path="/learn/path/:pathId" element={<LearningPath />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/:quizId" element={<QuizDetails />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
