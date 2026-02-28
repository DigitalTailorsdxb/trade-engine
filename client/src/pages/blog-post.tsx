import { Helmet } from "react-helmet-async";
import { Link, useParams } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { getBlogPost } from "@/lib/blog-data";
import { ArrowLeft, Clock, Calendar, Play, ArrowRight } from "lucide-react";

function renderContent(text: string) {
  if (text.startsWith("## ")) {
    return (
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-12 mb-4">
        {text.replace("## ", "")}
      </h2>
    );
  }

  if (text === "---") {
    return <hr className="my-10 border-slate-200" />;
  }

  if (text.startsWith("- ")) {
    const items = text.split("\n").filter((l) => l.startsWith("- "));
    return (
      <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed text-lg my-4 pl-4">
        {items.map((item, i) => (
          <li key={i}>{item.replace("- ", "")}</li>
        ))}
      </ul>
    );
  }

  const formatted = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>');

  return (
    <p
      className="text-slate-700 leading-relaxed text-lg my-4"
      dangerouslySetInnerHTML={{ __html: formatted }}
    />
  );
}

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = getBlogPost(params.slug || "");

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-32 pb-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Article not found</h1>
            <p className="text-slate-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog">
              <Button data-testid="button-back-to-blog">
                <ArrowLeft size={16} className="mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleDemoClick = () => {
    window.open("https://www.premium-landscapes.co.uk", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.title} | Trade Engine Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://trade-engine.co.uk/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.image} />
        <meta property="article:published_time" content="2026-02-28" />
        <meta property="article:author" content={post.author} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: "2026-02-28",
            author: {
              "@type": "Person",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "Trade Engine AI Ltd",
            },
          })}
        </script>
      </Helmet>
      <Navigation />
      <main>
        <article className="pt-32 pb-24 md:pb-32">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary transition-colors mb-8"
              data-testid="link-back-to-blog"
            >
              <ArrowLeft size={14} />
              Back to Blog
            </Link>

            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6" data-testid="text-blog-title">
                {post.title}
              </h1>
              <p className="text-sm text-slate-500">
                By <span className="font-medium text-slate-700">{post.author}</span>
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden mb-10">
              <img
                src={post.image}
                alt={post.title}
                className="w-full aspect-[2/1] object-cover"
              />
            </div>

            <div className="prose-container" data-testid="text-blog-content">
              {post.content.map((paragraph, index) => (
                <div key={index}>{renderContent(paragraph)}</div>
              ))}
            </div>

            <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <p className="text-sm text-slate-500 mb-2">About the author</p>
              <p className="font-semibold text-slate-900 mb-2">{post.author}</p>
              <p className="text-slate-600 text-sm">{post.authorBio}</p>
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                Ready to See It In Action?
              </h3>
              <p className="text-white/80 mb-6 max-w-lg mx-auto">
                Try the demo and see how instant quoting and AI design works for landscaping businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={handleDemoClick}
                  className="group"
                  data-testid="button-blog-cta-demo"
                >
                  <Play size={18} className="mr-2" />
                  Try the Demo
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white/30 text-white hover:bg-white/10"
                  data-testid="button-blog-cta-book"
                >
                  <a href="https://calendly.com/hello-trade-engine/30min" target="_blank" rel="noopener noreferrer">
                    Book a Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
