/*
 * DESIGN: Neo-Brutalist Red & Tan - Home Page
 * - Warm tan/cream background with subtle patterns
 * - Bold red (#E63946) accents
 * - Heavy black borders and hard shadows
 * - Space Mono (display) + Inter (body) typography
 * - Raw, unpolished aesthetic with intentional roughness
 */

import { AnimatedBackground } from "@/components/AnimatedBackground";
import { CategorySection } from "@/components/CategorySection";
import { Footer } from "@/components/Footer";
import { LinkCard } from "@/components/LinkCard";
import { ProfileHeader } from "@/components/ProfileHeader";
import { SocialLinks } from "@/components/SocialLinks";
import { 
  Code2, 
  Folder, 
  BookOpen, 
  Sparkles,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Rocket,
  Wrench,
  FileText,
  Newspaper,
} from "lucide-react";

// ============================================
// CUSTOMIZE YOUR PROFILE HERE
// ============================================

const profile = {
  name: "Your Name",
  bio: "Developer • Designer • Creator. Building cool things and sharing what I learn along the way.",
  avatarUrl: "/images/avatar-placeholder.png",
  location: "San Francisco, CA",
};

const socialLinks = [
  { name: "GitHub", url: "https://github.com", icon: <Github className="w-5 h-5" /> },
  { name: "Twitter", url: "https://twitter.com", icon: <Twitter className="w-5 h-5" /> },
  { name: "LinkedIn", url: "https://linkedin.com", icon: <Linkedin className="w-5 h-5" /> },
  { name: "Email", url: "mailto:hello@example.com", icon: <Mail className="w-5 h-5" /> },
];

const projectLinks = [
  {
    title: "Project Alpha",
    description: "A revolutionary app that changes everything",
    url: "https://github.com",
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    title: "Design System",
    description: "My personal component library",
    url: "https://github.com",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    title: "Open Source Tool",
    description: "Helping developers build faster",
    url: "https://github.com",
    icon: <Wrench className="w-5 h-5" />,
  },
];

const resourceLinks = [
  {
    title: "My Blog",
    description: "Thoughts on tech, design, and life",
    url: "https://medium.com",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    title: "Newsletter",
    description: "Weekly insights delivered to your inbox",
    url: "https://substack.com",
    icon: <Newspaper className="w-5 h-5" />,
  },
];

const otherLinks = [
  {
    title: "Portfolio",
    description: "Check out my work and case studies",
    url: "https://dribbble.com",
    icon: <Folder className="w-5 h-5" />,
  },
  {
    title: "Resume / CV",
    description: "My professional background",
    url: "https://linkedin.com",
    icon: <FileText className="w-5 h-5" />,
  },
];

// ============================================

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Animated background */}
      <AnimatedBackground />

      {/* Main content */}
      <main className="relative z-10 max-w-lg mx-auto px-4 py-12 sm:py-16">
        {/* Profile section */}
        <ProfileHeader
          name={profile.name}
          bio={profile.bio}
          avatarUrl={profile.avatarUrl}
          location={profile.location}
        />

        {/* Social links */}
        <SocialLinks links={socialLinks} />

        {/* Link sections */}
        <div className="space-y-2">
          {/* Projects */}
          <CategorySection 
            title="Projects" 
            icon={<Code2 className="w-5 h-5" />}
            index={0}
          >
            {projectLinks.map((link, index) => (
              <LinkCard
                key={link.title}
                title={link.title}
                description={link.description}
                url={link.url}
                icon={link.icon}
                index={index}
              />
            ))}
          </CategorySection>

          {/* Resources */}
          <CategorySection 
            title="Resources" 
            icon={<BookOpen className="w-5 h-5" />}
            index={1}
          >
            {resourceLinks.map((link, index) => (
              <LinkCard
                key={link.title}
                title={link.title}
                description={link.description}
                url={link.url}
                icon={link.icon}
                index={index + projectLinks.length}
              />
            ))}
          </CategorySection>

          {/* Other Links */}
          <CategorySection 
            title="More" 
            icon={<Sparkles className="w-5 h-5" />}
            index={2}
          >
            {otherLinks.map((link, index) => (
              <LinkCard
                key={link.title}
                title={link.title}
                description={link.description}
                url={link.url}
                icon={link.icon}
                index={index + projectLinks.length + resourceLinks.length}
              />
            ))}
          </CategorySection>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
