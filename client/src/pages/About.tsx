import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function About() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />

      <main className="relative z-10 max-w-2xl mx-auto px-4 py-12 sm:py-16">
        {/* Back button */}
        <motion.button
          onClick={() => navigate("/")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ x: -2, y: 2 }}
          whileTap={{ x: -4, y: 4 }}
          className="group relative mb-8"
        >
          <div
            className="absolute inset-0"
            style={{
              background: "var(--brutal-black)",
              transform: "translate(4px, 4px)",
            }}
          />
          <div
            className="relative px-4 py-2 flex items-center gap-2 font-display font-bold text-sm uppercase"
            style={{
              background: "var(--brutal-cream)",
              border: "3px solid var(--brutal-black)",
              color: "var(--brutal-black)",
            }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </div>
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative inline-block mb-6">
            <h1
              className="font-display font-bold text-4xl sm:text-5xl uppercase tracking-tight"
              style={{ color: "var(--brutal-black)" }}
            >
              About Me
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-2 left-0 right-0 h-2 origin-left"
              style={{ background: "var(--brutal-red)" }}
            />
          </div>
        </motion.div>

        {/* Content blocks */}
        <div className="space-y-6">
          <ContentBlock delay={0.1}>
            <p>
              I'm Billy Ndizeye — a builder, connector, and community advocate based in Chicago.
              I work at the intersection of technology, economic development, and startup ecosystems,
              with a focus on making sure the people and neighborhoods often left out of the
              innovation economy have a seat at the table.
            </p>
          </ContentBlock>

          <ContentBlock delay={0.2}>
            <p>
              I studied Business Administration at Western Michigan University's Haworth College
              of Business, where I developed a foundation in strategy, entrepreneurship, and
              community-centered business thinking. After graduating, I moved to Chicago and dove
              headfirst into the city's startup scene.
            </p>
          </ContentBlock>

          <ContentBlock delay={0.3}>
            <p>
              I spent two years at World Business Chicago working in venture strategy and business
              development — helping connect founders to funding, mentorship, and the resources
              they needed to grow. From there I moved into innovation programming at 1871,
              Chicago's flagship tech hub, where I supported entrepreneurs at every stage.
            </p>
          </ContentBlock>

          <ContentBlock delay={0.4}>
            <p>
              That experience led me to build <strong>ChiStartupHub</strong> — a platform
              designed to map Chicago's startup ecosystem and make capital, accelerators, and
              investor networks more accessible. I publish research through the{" "}
              <strong>Capital Access</strong> newsletter on Substack, covering funding trends,
              venture strategy, and economic development in the city.
            </p>
          </ContentBlock>

          <ContentBlock delay={0.5}>
            <p>
              Outside of tech and startups, I'm a photographer, a personal trainer, a person of faith,
              and someone who cares deeply about community. I stay active, stay curious, and I create things at the
              intersection of design, data, community, and wellness — things I'm
              genuinely passionate about.
            </p>
          </ContentBlock>

          <ContentBlock delay={0.6}>
            <p>
              This page is a collection of the things I care about — my projects, the books that
              shaped my thinking, the communities I support, and the causes I believe in. Thanks
              for stopping by.
            </p>
          </ContentBlock>
        </div>
      </main>
    </div>
  );
}

function ContentBlock({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="relative"
    >
      <div
        className="absolute inset-0"
        style={{
          background: "var(--brutal-black)",
          transform: "translate(6px, 6px)",
        }}
      />
      <div
        className="relative p-6"
        style={{
          background: "var(--brutal-cream)",
          border: "3px solid var(--brutal-black)",
        }}
      >
        <div
          className="text-base sm:text-lg leading-relaxed"
          style={{ color: "var(--brutal-black)" }}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
}
