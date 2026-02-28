import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { blogPosts } from "@/lib/blog-data";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Blog | Trade Engine - Insights for Landscaping Businesses</title>
        <meta name="description" content="Expert insights on growing your landscaping business with AI-powered quoting, design visualisation, and automation. Written by industry professionals." />
        <link rel="canonical" href="https://trade-engine.co.uk/blog" />
        <meta property="og:title" content="Blog | Trade Engine" />
        <meta property="og:description" content="Expert insights on growing your landscaping business with AI-powered quoting, design visualisation, and automation." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navigation />
      <main>
        <section className="pt-32 pb-24 md:pb-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Insights for Landscaping Businesses
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Practical advice on quoting, lead generation, and growing your landscaping business with technology.
              </p>
            </div>

            <div className="space-y-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                  data-testid={`link-blog-${post.slug}`}
                >
                  <article className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="aspect-[2/1] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-slate-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-medium text-primary">
                        <span>Read article</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
