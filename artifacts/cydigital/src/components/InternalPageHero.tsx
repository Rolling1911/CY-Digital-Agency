import { motion } from "framer-motion";

interface InternalPageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export function InternalPageHero({
  eyebrow,
  title,
  subtitle,
}: InternalPageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#171717]/10 bg-[#F7F5EF]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(23,23,23,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(23,23,23,0.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />
      <div className="relative mx-auto max-w-[1440px] px-5 pb-14 pt-32 text-center md:px-8 md:pb-16 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#FF6633]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#3155F5]">
              {eyebrow}
            </span>
            <span className="h-[2px] w-8 bg-[#FF6633]" />
          </div>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[1.04] tracking-[-0.075em]">
            {title}
            <span className="text-[#3155F5]">.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.85] text-[#171717]/65 md:text-lg">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
