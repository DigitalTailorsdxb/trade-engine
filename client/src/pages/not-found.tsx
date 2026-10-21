import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Helmet><title>Page Not Found | Trade Engine</title><meta name="robots" content="noindex, nofollow" /></Helmet>
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            The page may have moved. Visit our trade website plans or get in touch.
          </p>
          <Link href="/" className="mt-6 inline-flex rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white">Back to Trade Engine</Link>
        </CardContent>
      </Card>
    </div>
  );
}
