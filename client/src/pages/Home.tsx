/*
 * DESIGN: Neo-Brutalist Red & Tan - Home Page
 * - Hierarchical category block navigation (binary tree style)
 * - Top-level categories: Arts, Literature, Fitness, Tech + Econ Dev, Mutual Aid & Support
 * - Expandable subcategories within each block
 */

import { useState } from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { CategoryBlock } from "@/components/CategoryBlock";
import { SubCategory } from "@/components/SubCategory";
import { Footer } from "@/components/Footer";
import { LinkCard } from "@/components/LinkCard";
import { ProfileHeader } from "@/components/ProfileHeader";
import { SocialLinks } from "@/components/SocialLinks";
import { 
  Palette,
  BookOpen, 
  Heart,
  Cpu,
  HandHeart,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Camera,
  Feather,
  BookMarked,
  Brain,
  Scale,
  Building2,
  Globe,
  Shield,
  MapPin,
  Users,
  Megaphone,
  AlertTriangle,
  Sparkles,
} from "lucide-react";

// ============================================
// PROFILE CONFIG
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

// ============================================
// ARTS - Photography
// ============================================

const photographyLinks = [
  {
    title: "Photography Portfolio",
    description: "My visual storytelling work",
    url: "https://unsplash.com",
    icon: <Camera className="w-5 h-5" />,
  },
  {
    title: "Instagram Gallery",
    description: "Daily shots and behind the scenes",
    url: "https://instagram.com",
    icon: <Camera className="w-5 h-5" />,
  },
];

// ============================================
// LITERATURE - Reading Lists
// ============================================

const poetryPhilosophyLinks = [
  {
    title: "Citizen by Claudia Rankine",
    description: "An American Lyric on race and belonging",
    url: "https://www.graywolfpress.org/books/citizen",
    icon: <Feather className="w-5 h-5" />,
  },
  {
    title: "The Fire Next Time - James Baldwin",
    description: "Essential essays on race in America",
    url: "https://www.penguinrandomhouse.com/books/7753/the-fire-next-time-by-james-baldwin/",
    icon: <BookMarked className="w-5 h-5" />,
  },
  {
    title: "Teaching to Transgress - bell hooks",
    description: "Education as the practice of freedom",
    url: "https://www.routledge.com/Teaching-to-Transgress-Education-as-the-Practice-of-Freedom/hooks/p/book/9780415908085",
    icon: <Brain className="w-5 h-5" />,
  },
];

const blackRadicalLinks = [
  {
    title: "Black Marxism - Cedric Robinson",
    description: "The making of the Black radical tradition",
    url: "https://uncpress.org/book/9780807848296/black-marxism/",
    icon: <BookMarked className="w-5 h-5" />,
  },
  {
    title: "Freedom Is a Constant Struggle - Angela Davis",
    description: "Ferguson, Palestine, and beyond",
    url: "https://www.haymarketbooks.org/books/780-freedom-is-a-constant-struggle",
    icon: <BookMarked className="w-5 h-5" />,
  },
  {
    title: "The Wretched of the Earth - Frantz Fanon",
    description: "Classic text on decolonization",
    url: "https://groveatlantic.com/book/the-wretched-of-the-earth/",
    icon: <BookMarked className="w-5 h-5" />,
  },
  {
    title: "Schomburg Black Liberation List",
    description: "NYPL's essential reading list",
    url: "https://www.nypl.org/books-more/recommendations/schomburg/adults",
    icon: <BookOpen className="w-5 h-5" />,
  },
];

const feministIntersectionalLinks = [
  {
    title: "Sister Outsider - Audre Lorde",
    description: "Essays and speeches on identity",
    url: "https://www.penguinrandomhouse.com/books/198292/sister-outsider-by-audre-lorde/",
    icon: <BookMarked className="w-5 h-5" />,
  },
  {
    title: "This Bridge Called My Back",
    description: "Writings by radical women of color",
    url: "https://www.sunypress.edu/p-6811-this-bridge-called-my-back-fo.aspx",
    icon: <BookMarked className="w-5 h-5" />,
  },
  {
    title: "Hood Feminism - Mikki Kendall",
    description: "Notes from the women a movement forgot",
    url: "https://www.penguinrandomhouse.com/books/586040/hood-feminism-by-mikki-kendall/",
    icon: <BookMarked className="w-5 h-5" />,
  },
  {
    title: "Feminism for the 99%",
    description: "A manifesto for working-class feminism",
    url: "https://www.versobooks.com/products/780-feminism-for-the-99",
    icon: <BookMarked className="w-5 h-5" />,
  },
  {
    title: "Are Prisons Obsolete? - Angela Davis",
    description: "Abolitionist feminist classic",
    url: "https://www.sevenstories.com/books/2907-are-prisons-obsolete",
    icon: <BookMarked className="w-5 h-5" />,
  },
];

// ============================================
// FITNESS & HEALTH
// ============================================

const fitnessLinks = [
  {
    title: "Fitness Journey Blog",
    description: "Workouts, nutrition, and wellness tips",
    url: "https://medium.com",
    icon: <Heart className="w-5 h-5" />,
  },
  {
    title: "Health Resources",
    description: "Curated guides for holistic wellness",
    url: "https://notion.so",
    icon: <Heart className="w-5 h-5" />,
  },
];

// ============================================
// TECH + ECON DEV
// ============================================

const urbanPlanningLinks = [
  {
    title: "Death and Life of Great American Cities",
    description: "Jane Jacobs' urban planning classic",
    url: "https://www.penguinrandomhouse.com/books/86058/the-death-and-life-of-great-american-cities-by-jane-jacobs/",
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    title: "The Color of Law - Richard Rothstein",
    description: "How government segregated America",
    url: "https://wwnorton.com/books/The-Color-of-Law/",
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    title: "The Just City - Susan Fainstein",
    description: "Urban planning through justice lens",
    url: "https://www.cornellpress.cornell.edu/book/9780801476907/the-just-city/",
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    title: "Planetizen Top 20 Planning Books",
    description: "Essential urban planning reading",
    url: "https://www.planetizen.com/books/20",
    icon: <BookOpen className="w-5 h-5" />,
  },
];

const techCritiqueLinks = [
  {
    title: "Race After Technology - Ruha Benjamin",
    description: "Abolitionist tools for the new Jim Code",
    url: "https://www.ruhabenjamin.com/race-after-technology",
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    title: "Algorithms of Oppression - Safiya Noble",
    description: "How search engines reinforce racism",
    url: "https://nyupress.org/9781479837243/algorithms-of-oppression/",
    icon: <Cpu className="w-5 h-5" />,
  },
];

// ============================================
// MUTUAL AID & SUPPORT
// ============================================

const mutualAidLinks = [
  {
    title: "Movement for Black Lives",
    description: "Mutual aid resources and community support",
    url: "https://m4bl.org/mutual-aid/",
    icon: <HandHeart className="w-5 h-5" />,
  },
  {
    title: "The Okra Project",
    description: "Supporting Black Trans communities",
    url: "https://www.theokraproject.com/",
    icon: <HandHeart className="w-5 h-5" />,
  },
  {
    title: "Black Resilience Fund",
    description: "Emergency resources for Black communities",
    url: "https://www.blackresiliencefund.com/",
    icon: <HandHeart className="w-5 h-5" />,
  },
  {
    title: "Mutual Aid Hub",
    description: "Find mutual aid networks near you",
    url: "https://www.mutualaidhub.org/",
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: "Black Funding Network",
    description: "Support Black-led grassroots organizations",
    url: "https://www.blackfundingnetwork.org/",
    icon: <HandHeart className="w-5 h-5" />,
  },
];

const iceResistanceLinks = [
  {
    title: "Know Your Rights with ICE",
    description: "NIJC guide for immigration encounters",
    url: "https://immigrantjustice.org/for-immigrants/know-your-rights/ice-encounter/",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "ILRC Red Cards",
    description: "Assert your rights - printable cards",
    url: "https://www.ilrc.org/red-cards",
    icon: <AlertTriangle className="w-5 h-5" />,
  },
  {
    title: "Immigrant Defense Project",
    description: "Resources for immigrants and advocates",
    url: "https://www.immigrantdefenseproject.org/resources/",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "Rapid Response Hotlines",
    description: "Report ICE activity nationwide",
    url: "https://www.justice4all.org/rapid-response-toolkit/",
    icon: <Megaphone className="w-5 h-5" />,
  },
  {
    title: "NAACP Immigration Rights",
    description: "Know your rights resources",
    url: "https://naacp.org/resources/know-your-rights-immigration",
    icon: <Scale className="w-5 h-5" />,
  },
];

const minnesotaLinks = [
  {
    title: "MIRAC Minnesota",
    description: "Minnesota Immigrant Rights Action Committee",
    url: "https://www.miracmn.com/",
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    title: "Immigrant Law Center of MN",
    description: "Free immigration legal services",
    url: "https://www.ilcm.org/",
    icon: <Scale className="w-5 h-5" />,
  },
  {
    title: "Unidos MN",
    description: "Grassroots power for working families",
    url: "https://unidos-mn.org/",
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: "Women's Foundation MN",
    description: "Immigrant Rapid Response Fund",
    url: "https://www.wfmn.org/funds/immigrant-rapid-response/",
    icon: <HandHeart className="w-5 h-5" />,
  },
  {
    title: "Minneapolis Sanctuary Movement",
    description: "Housing justice and abolition",
    url: "https://actionnetwork.org/groups/minneapolis-sanctuary-movement",
    icon: <Building2 className="w-5 h-5" />,
  },
];

const globalSolidarityLinks = [
  {
    title: "Sudan Humanitarian Fund (UN)",
    description: "Direct aid to Sudan crisis",
    url: "https://crisisrelief.un.org/ramadan-2026-sudan",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: "IRC Sudan Emergency",
    description: "International Rescue Committee",
    url: "https://help.rescue.org/donate/sudan",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: "UNRWA - Palestine Refugees",
    description: "UN agency for Palestine refugees",
    url: "https://www.unrwa.org/",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: "Anera Gaza Aid",
    description: "Food, water, medicine for Gaza",
    url: "https://www.anera.org/where-we-work/palestine/gaza/",
    icon: <HandHeart className="w-5 h-5" />,
  },
  {
    title: "Gaza Mutual Aid Collective",
    description: "Direct community support",
    url: "https://www.instagram.com/gazamutualaid/",
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: "Eyewitness Palestine",
    description: "Mutual aid fund for Palestinians",
    url: "https://www.eyewitnesspalestine.org/mutual-aid/",
    icon: <HandHeart className="w-5 h-5" />,
  },
];

// ============================================
// MAIN COMPONENT
// ============================================

export default function Home() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  let linkIndex = 0;

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />

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

        {/* Category blocks */}
        <div className="space-y-2">
          
          {/* ARTS */}
          <CategoryBlock
            title="Arts"
            icon={<Palette className="w-6 h-6" />}
            description="Photography and visual work"
            isExpanded={expandedCategory === "arts"}
            onClick={() => toggleCategory("arts")}
            index={0}
          >
            <SubCategory 
              title="Photography" 
              icon={<Camera className="w-4 h-4" />}
              defaultOpen={true}
            >
              {photographyLinks.map((link) => (
                <LinkCard
                  key={link.title}
                  title={link.title}
                  description={link.description}
                  url={link.url}
                  icon={link.icon}
                  index={linkIndex++}
                />
              ))}
            </SubCategory>
          </CategoryBlock>

          {/* LITERATURE */}
          <CategoryBlock
            title="Literature"
            icon={<BookOpen className="w-6 h-6" />}
            description="Reading lists and book recommendations"
            isExpanded={expandedCategory === "literature"}
            onClick={() => toggleCategory("literature")}
            index={1}
          >
            <SubCategory 
              title="Poetry & Philosophy" 
              icon={<Feather className="w-4 h-4" />}
            >
              {poetryPhilosophyLinks.map((link) => (
                <LinkCard
                  key={link.title}
                  title={link.title}
                  description={link.description}
                  url={link.url}
                  icon={link.icon}
                  index={linkIndex++}
                />
              ))}
            </SubCategory>

            <SubCategory 
              title="Black Radical Thought" 
              icon={<BookMarked className="w-4 h-4" />}
            >
              {blackRadicalLinks.map((link) => (
                <LinkCard
                  key={link.title}
                  title={link.title}
                  description={link.description}
                  url={link.url}
                  icon={link.icon}
                  index={linkIndex++}
                />
              ))}
            </SubCategory>

            <SubCategory 
              title="Feminist & Intersectional" 
              icon={<Sparkles className="w-4 h-4" />}
            >
              {feministIntersectionalLinks.map((link) => (
                <LinkCard
                  key={link.title}
                  title={link.title}
                  description={link.description}
                  url={link.url}
                  icon={link.icon}
                  index={linkIndex++}
                />
              ))}
            </SubCategory>
          </CategoryBlock>

          {/* FITNESS */}
          <CategoryBlock
            title="Fitness"
            icon={<Heart className="w-6 h-6" />}
            description="Health and wellness resources"
            isExpanded={expandedCategory === "fitness"}
            onClick={() => toggleCategory("fitness")}
            index={2}
          >
            <SubCategory 
              title="Health & Wellness" 
              icon={<Heart className="w-4 h-4" />}
              defaultOpen={true}
            >
              {fitnessLinks.map((link) => (
                <LinkCard
                  key={link.title}
                  title={link.title}
                  description={link.description}
                  url={link.url}
                  icon={link.icon}
                  index={linkIndex++}
                />
              ))}
            </SubCategory>
          </CategoryBlock>

          {/* TECH + ECON DEV */}
          <CategoryBlock
            title="Tech + Econ Dev"
            icon={<Cpu className="w-6 h-6" />}
            description="Urban planning, technology, and economics"
            isExpanded={expandedCategory === "tech"}
            onClick={() => toggleCategory("tech")}
            index={3}
          >
            <SubCategory 
              title="Urban Planning" 
              icon={<Building2 className="w-4 h-4" />}
            >
              {urbanPlanningLinks.map((link) => (
                <LinkCard
                  key={link.title}
                  title={link.title}
                  description={link.description}
                  url={link.url}
                  icon={link.icon}
                  index={linkIndex++}
                />
              ))}
            </SubCategory>

            <SubCategory 
              title="Technology Critique" 
              icon={<Cpu className="w-4 h-4" />}
            >
              {techCritiqueLinks.map((link) => (
                <LinkCard
                  key={link.title}
                  title={link.title}
                  description={link.description}
                  url={link.url}
                  icon={link.icon}
                  index={linkIndex++}
                />
              ))}
            </SubCategory>
          </CategoryBlock>

          {/* MUTUAL AID & SUPPORT */}
          <CategoryBlock
            title="Mutual Aid & Support"
            icon={<HandHeart className="w-6 h-6" />}
            description="Community resources and solidarity"
            isExpanded={expandedCategory === "mutualaid"}
            onClick={() => toggleCategory("mutualaid")}
            index={4}
          >
            <SubCategory 
              title="✊ Black Mutual Aid" 
              icon={<HandHeart className="w-4 h-4" />}
            >
              {mutualAidLinks.map((link) => (
                <LinkCard
                  key={link.title}
                  title={link.title}
                  description={link.description}
                  url={link.url}
                  icon={link.icon}
                  index={linkIndex++}
                />
              ))}
            </SubCategory>

            <SubCategory 
              title="Know Your Rights / ICE" 
              icon={<Shield className="w-4 h-4" />}
            >
              {iceResistanceLinks.map((link) => (
                <LinkCard
                  key={link.title}
                  title={link.title}
                  description={link.description}
                  url={link.url}
                  icon={link.icon}
                  index={linkIndex++}
                />
              ))}
            </SubCategory>

            <SubCategory 
              title="Support Minnesota" 
              icon={<MapPin className="w-4 h-4" />}
            >
              {minnesotaLinks.map((link) => (
                <LinkCard
                  key={link.title}
                  title={link.title}
                  description={link.description}
                  url={link.url}
                  icon={link.icon}
                  index={linkIndex++}
                />
              ))}
            </SubCategory>

            <SubCategory 
              title="Sudan & Gaza Solidarity" 
              icon={<Globe className="w-4 h-4" />}
            >
              {globalSolidarityLinks.map((link) => (
                <LinkCard
                  key={link.title}
                  title={link.title}
                  description={link.description}
                  url={link.url}
                  icon={link.icon}
                  index={linkIndex++}
                />
              ))}
            </SubCategory>
          </CategoryBlock>

        </div>

        <Footer />
      </main>
    </div>
  );
}
