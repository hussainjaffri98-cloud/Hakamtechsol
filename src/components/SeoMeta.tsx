import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteUrl = "https://hakamtechsol.com";

const pageMetadata: Record<string, { title: string; description: string; keywords: string }> = {
  "/": {
    title: "HakamTechSol | Web, Mobile App & Custom Software Development",
    description: "HakamTechSol builds responsive websites, mobile apps, SaaS MVPs and enterprise software for startups, e-commerce brands and growing businesses.",
    keywords: "web design agency for startups, responsive web design for ecommerce, mobile app development company for startups, SaaS MVP development service, enterprise software development company",
  },
  "/services": {
    title: "Web Development, Mobile Apps & AI Automation Services | HakamTechSol",
    description: "Explore web design, custom software, mobile app development, AI automation and digital marketing services built for startups and established businesses.",
    keywords: "landing page design for lead generation, corporate website design agency, mobile app development for ecommerce business, android app development for business automation, digital marketing agency for ecommerce brands",
  },
  "/portfolio": {
    title: "Software, Web & Mobile App Development Portfolio | HakamTechSol",
    description: "See HakamTechSol case studies across custom software, responsive e-commerce websites, mobile applications and business platforms.",
    keywords: "responsive web design for ecommerce, custom web design for real estate agents, mobile app development company for startups, enterprise software development company",
  },
  "/insights": {
    title: "Web Development, SaaS & Digital Marketing Insights | HakamTechSol",
    description: "Practical insights on web design, SaaS products, mobile apps, AI automation and digital marketing for modern businesses.",
    keywords: "web design trends that affect seo, SaaS landing page design best practices, how to measure digital marketing ROI, website accessibility checklist",
  },
  "/about": {
    title: "About HakamTechSol | Digital Product Development Team",
    description: "Learn about the HakamTechSol team delivering web development, mobile apps, custom software and digital transformation services.",
    keywords: "web development agency, mobile app development company, custom software development, digital transformation",
  },
  "/contact": {
    title: "Contact HakamTechSol | Start Your Web, App or Software Project",
    description: "Contact HakamTechSol to discuss responsive web design, mobile app development, SaaS MVPs, custom software or digital marketing.",
    keywords: "web design agency for startups, mobile app development company for startups, SaaS MVP development service, enterprise software development company",
  },
  "/quote": {
    title: "Request a Web, App or Custom Software Quote | HakamTechSol",
    description: "Request a tailored quote for web development, mobile apps, SaaS MVPs, enterprise software, AI automation or digital marketing.",
    keywords: "website design and development package pricing, how much does it cost to build a mobile app, SaaS MVP development service, enterprise software development company",
  },
};

const setMetaContent = (selector: string, content: string) => {
  const element = document.querySelector<HTMLMetaElement>(selector);
  if (element) element.content = content;
};

const SeoMeta = () => {
  const { pathname } = useLocation();
  const metadata = pathname.startsWith("/portfolio/") || pathname.startsWith("/case-study/")
    ? pageMetadata["/portfolio"]
    : pageMetadata[pathname] ?? pageMetadata["/"];
  const canonicalUrl = `${siteUrl}${pathname === "/" ? "/" : pathname}`;

  useEffect(() => {
    document.title = metadata.title;
    setMetaContent('meta[name="description"]', metadata.description);
    setMetaContent('meta[name="keywords"]', metadata.keywords);
    setMetaContent('meta[property="og:title"]', metadata.title);
    setMetaContent('meta[property="og:description"]', metadata.description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', metadata.title);
    setMetaContent('meta[name="twitter:description"]', metadata.description);

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = canonicalUrl;
  }, [canonicalUrl, metadata]);

  return null;
};

export default SeoMeta;
