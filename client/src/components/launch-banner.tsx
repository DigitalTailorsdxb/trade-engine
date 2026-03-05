import { Rocket } from "lucide-react";

export function LaunchBanner() {
  return (
    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-center py-3 px-4 font-semibold text-sm sm:text-base fixed top-0 left-0 right-0 z-[60]" data-testid="banner-launch-offer">
      <div className="flex items-center justify-center gap-2">
        <Rocket size={18} className="flex-shrink-0" />
        <span>First 10 customers: 50% off setup fee</span>
      </div>
    </div>
  );
}
