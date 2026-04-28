import { MapPin, Clock, PiggyBank, Award } from "lucide-react";

export function TrustBar() {
  const items = [
    { icon: MapPin, text: "Για επιχειρήσεις στην Κύπρο" },
    { icon: Clock, text: "Γρήγορη εξυπηρέτηση" },
    { icon: PiggyBank, text: "Προσιτές λύσεις" },
    { icon: Award, text: "Επαγγελματικό αποτέλεσμα" },
  ];

  return (
    <div className="bg-[#F5F5F5] py-6 md:py-8 border-y border-border/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center space-y-2">
              <item.icon className="w-6 h-6 text-background" strokeWidth={1.5} />
              <span className="text-sm font-medium text-background/80">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
