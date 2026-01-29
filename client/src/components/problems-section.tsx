import { Card, CardContent } from "@/components/ui/card";
import { 
  Ban, 
  Clock, 
  MessageSquareX, 
  Eye, 
  Calculator, 
  Shield,
  CheckCircle2
} from "lucide-react";

const problems = [
  {
    icon: Ban,
    problem: "Time-wasting tyre-kickers",
    solution: "Qualifies buyers and sets price expectations upfront before you lift a finger",
  },
  {
    icon: MessageSquareX,
    problem: '"Can you just quote it?" enquiries',
    solution: "Customers see real costs instantly - no more unpaid site visits for unrealistic budgets",
  },
  {
    icon: Eye,
    problem: '"I can\'t picture it" blockers',
    solution: "AI visualisation shows customers their finished garden in 90 seconds - approvals happen faster",
  },
  {
    icon: Clock,
    problem: "Endless admin and follow-up chasing",
    solution: "Automates first interaction entirely - your website works 24/7 while you focus on jobs",
  },
  {
    icon: Calculator,
    problem: "Underpricing due to guesswork",
    solution: "Standardises pricing logic across every quote - protects your margins consistently",
  },
  {
    icon: Shield,
    problem: '"That seems expensive" objections',
    solution: "Educates clients on why landscaping costs what it costs with visual proof",
  },
];

export function ProblemsSection() {
  return (
    <section className="py-24 md:py-32 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-amber-400 tracking-wide uppercase mb-3">
            Sound Familiar?
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Problems We Solve
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Every landscaper knows these frustrations. Our system eliminates them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className="bg-slate-800/50 border-slate-700 hover:border-amber-500/50 transition-all duration-300"
                data-testid={`card-problem-${index}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0 glow-ring">
                      <Icon size={20} className="text-red-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{item.problem}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pl-14">
                    <CheckCircle2 size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-300 text-sm leading-relaxed">{item.solution}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
