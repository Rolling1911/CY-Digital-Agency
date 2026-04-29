export function TrustBar() {
  const items = [
    { number: "100+", text: "Projects Delivered" },
    { number: "5+", text: "Χρόνια Εμπειρία" },
    { number: "100%", text: "Αφοσίωση" },
    { number: "24h", text: "Γρήγορη Επικοινωνία" },
  ];

  return (
    <div className="bg-[#0D0D0D] py-10 md:py-12 border-y border-[#D4AF37]/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-8 md:gap-0">
          {items.map((item, index) => (
            <div key={index} className="flex items-center w-[40%] md:w-auto justify-center md:justify-start">
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl md:text-5xl font-display font-bold text-[#D4AF37] mb-2">{item.number}</span>
                <span className="text-xs uppercase tracking-widest text-[#BFBFBF] font-medium">{item.text}</span>
              </div>
              {index < items.length - 1 && (
                <div className="hidden md:block w-px h-16 bg-[#D4AF37]/20 mx-12"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}