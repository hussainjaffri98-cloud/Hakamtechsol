import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";

type LegalProps = {
  type: "privacy" | "terms";
};

const privacySections = [
  ["Information we collect", "We collect the details you submit through our contact and quote forms, such as your name, email address, phone number, company details, and project requirements."],
  ["How we use your information", "We use your information to respond to your inquiries, prepare project estimates, provide requested services, and improve our communications."],
  ["Information sharing", "We do not sell your personal information. We only share it with trusted service providers when necessary to deliver our services or when required by law."],
  ["Data security", "We use reasonable safeguards to protect the information you share with us. However, no online transmission or storage method can be guaranteed completely secure."],
  ["Your choices", "You may contact us to request access to, correction of, or deletion of your personal information, subject to applicable legal requirements."],
];

const termsSections = [
  ["Using this website", "You may use this website for lawful purposes only. You must not attempt to interfere with the website, its security, or other users' access to it."],
  ["Project estimates", "Quotes, timelines, and project scopes are preliminary unless confirmed in a written agreement. Final terms are defined in the applicable proposal or service agreement."],
  ["Intellectual property", "The website's content, branding, and materials are owned by HakamTechSol or its licensors and may not be copied or reused without permission."],
  ["Third-party links", "This website may include links to third-party services. We are not responsible for their content, availability, or privacy practices."],
  ["Changes to these terms", "We may update these terms from time to time. Continued use of this website after an update means you accept the revised terms."],
];

const Legal = ({ type }: LegalProps) => {
  const isPrivacy = type === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms of Service";
  const intro = isPrivacy
    ? "This policy explains how HakamTechSol collects and uses information when you visit our website or contact our team."
    : "These terms explain the rules for using the HakamTechSol website and requesting our services.";
  const sections = isPrivacy ? privacySections : termsSections;

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-50 text-slate-800">
        <Navbar />
        <main className="px-4 pb-20 pt-28 sm:px-6 md:pt-36 lg:px-8 lg:pb-28">
          <div className="container mx-auto max-w-4xl">
            <header className="rounded-[32px] bg-gradient-to-br from-[#0f6cbd] via-sky-600 to-blue-800 px-7 py-12 text-white shadow-xl sm:px-12 sm:py-16">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-200">HakamTechSol</p>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-sky-50 sm:text-base">{intro}</p>
            </header>

            <article className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
              <p className="text-sm leading-relaxed text-slate-600">
                Last updated: August 18, 2026. If you have questions about this {isPrivacy ? "policy" : "agreement"}, please contact us at alhakamsofts@gmail.com.
              </p>
              <div className="mt-8 space-y-8">
                {sections.map(([heading, content]) => (
                  <section key={heading}>
                    <h2 className="text-lg font-extrabold text-slate-900">{heading}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{content}</p>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Legal;
