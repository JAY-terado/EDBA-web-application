import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f1f3f6] flex flex-col justify-between font-sans">
      
      {/* Header Bar */}
      <header className="w-full bg-[#f1f3f6] border-b border-zinc-200/50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <ArrowLeft className="h-4 w-4 text-zinc-500 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold text-zinc-650 group-hover:text-zinc-950 transition-colors">Back to Home</span>
          </Link>
          <img src="/logo.png" alt="EDBA Logo" className="h-7 w-auto" />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow w-full">
        <div className="bg-white p-8 sm:p-12 md:p-16 rounded-3xl shadow-xl shadow-zinc-200/40 border border-white/60">
          
          <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-zinc-950 leading-tight mb-8 tracking-wide uppercase">
            PRIVACY POLICY FOR EDBA SOFTWARE LLP
          </h1>

          <div className="space-y-6 text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
            <p>
              At EDBA Software LLP, accessible from <a href="https://app.edba.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">app.edba.io</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy contains types of information that is collected and recorded by EDBA Software LLP and how we use it.
            </p>
            <p>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
            </p>
            <p>
              This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in EDBA.
            </p>

            <h2 className="font-display font-bold text-lg sm:text-xl text-zinc-950 pt-6 mb-2">Consent</h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its terms.
            </p>

            <h2 className="font-display font-bold text-lg sm:text-xl text-zinc-950 pt-6 mb-2">Information we collect</h2>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <p>
              If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            </p>
            <p>
              When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
            </p>

            <h2 className="font-display font-bold text-lg sm:text-xl text-zinc-950 pt-6 mb-2">How we use your information</h2>
            <p>
              We use the information we collect in various ways, including to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h2 className="font-display font-bold text-lg sm:text-xl text-zinc-950 pt-6 mb-2">Log Files</h2>
            <p>
              EDBA follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
            </p>

            <h2 className="font-display font-bold text-lg sm:text-xl text-zinc-950 pt-6 mb-2">Cookies and Web Beacons</h2>
            <p>
              Like any other website, EDBA uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>

            <h2 className="font-display font-bold text-lg sm:text-xl text-zinc-950 pt-6 mb-2">Advertising Partners Privacy Policies</h2>
            <p>
              You may consult this list to find the Privacy Policy for each of the advertising partners of EDBA.
            </p>
            <p>
              Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on EDBA, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
            </p>
            <p>
              Note that EDBA has no access to or control over these cookies that are used by third-party advertisers.
            </p>

            <h2 className="font-display font-bold text-lg sm:text-xl text-zinc-950 pt-6 mb-2">Third Party Privacy Policies</h2>
            <p>
              EDBA's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>
            <p>
              You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
            </p>
          </div>

        </div>
      </main>

      {/* Footer Banner Bar */}
      <footer className="w-full bg-[#1e73be] py-4 text-center text-white text-xs font-semibold tracking-wide border-t border-blue-700/10">
        © Copyright 2026 EDBA Software LLP
      </footer>

    </div>
  );
}
