import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Gift } from "lucide-react";
import { Link } from "wouter";

export function ProductTeaserSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Sparkles size={16} className="fill-current" />
            <span className="text-sm font-medium">Our Flagship Product</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Landscaping{" "}
            <span className="text-primary">AI Engine</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The complete AI-powered website solution for landscaping businesses. 
            Instant quotes, stunning visualizations, and automated lead nurturing.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto overflow-visible" data-testid="card-product-teaser">
          <CardContent className="p-8">
            {/* Special Offer Banner */}
            <div className="bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-md border border-accent/30 p-4 mb-8">
              <div className="flex items-center justify-center gap-3 text-center">
                <Gift size={20} className="text-accent flex-shrink-0" />
                <p className="text-sm font-medium text-foreground">
                  Limited Time: First month AI FREE + £500 in free ad spend
                </p>
              </div>
            </div>

            {/* Pricing Display */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Setup Fee</p>
                <div className="flex items-baseline gap-2 justify-center">
                  <span className="text-3xl font-bold text-accent">£3,499</span>
                  <span className="text-lg text-muted-foreground line-through">£4,995</span>
                </div>
                <p className="text-xs text-muted-foreground">one-time</p>
              </div>
              <div className="hidden sm:block w-px h-16 bg-border" />
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Monthly</p>
                <div className="flex items-baseline gap-1 justify-center">
                  <span className="text-3xl font-bold">£199</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-xs text-accent font-medium">First month FREE</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button size="lg" asChild data-testid="button-product-learn-more">
                <Link href="/products">
                  Learn More About Our AI Engine
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                See how it works and what's included
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
