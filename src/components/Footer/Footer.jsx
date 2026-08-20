import Link from 'next/link';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
     <footer className="bg-base-200 border-t border-base-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Top Footer */}
    <div className="py-12 sm:py-14 lg:py-16">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 xl:gap-12">
        
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-5">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-sm">
              R
            </div>
            <span className="text-xl sm:text-2xl font-bold text-base-content">
              ReSell<span className="text-blue-500">Hub</span>
            </span>
          </Link>

          <p className="text-sm sm:text-base text-base-content/60 leading-relaxed max-w-sm">
            The premier marketplace for second-hand goods. Buy and sell
            sustainably, save money, and give quality products a second life.
          </p>

          {/* Contact */}
          <div className="mt-6 space-y-2.5 text-sm text-base-content/60">
            <p className="flex items-start gap-3">
              <span className="text-blue-500 mt-0.5">✉</span>
              <span className="break-all">support@resellhub.com</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-blue-500">☏</span>
              <span>+1 (555) 123-4567</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-blue-500">⚲</span>
              <span>San Francisco, CA 94102</span>
            </p>
          </div>

          {/* Social */}
          <div className="flex gap-2.5 mt-6">
            {[FiFacebook, FiTwitter, FiInstagram, FiLinkedin].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-base-300 flex items-center justify-center text-base-content/60 hover:bg-blue-600 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2">
          <h3 className="font-semibold text-base-content mb-4 text-sm sm:text-base">
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {[
              { href: "/", label: "Home" },
              { href: "/products", label: "Products" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-base-content/60 hover:text-blue-500 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Account */}
        <div className="lg:col-span-2">
          <h3 className="font-semibold text-base-content mb-4 text-sm sm:text-base">
            Account
          </h3>
          <ul className="space-y-2.5">
            {[
              { href: "/login", label: "Sign In" },
              { href: "/register", label: "Register" },
              { href: "/dashboard", label: "Dashboard" },
              { href: "/dashboard/buyer/my-orders", label: "My Orders" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-base-content/60 hover:text-blue-500 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="lg:col-span-3">
          <h3 className="font-semibold text-base-content mb-4 text-sm sm:text-base">
            Categories
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2.5">
            {[
              { href: "/products?category=electronics", label: "Electronics" },
              { href: "/products?category=furniture", label: "Furniture" },
              { href: "/products?category=vehicles", label: "Vehicles" },
              { href: "/products?category=fashion", label: "Fashion" },
              { href: "/products?category=mobile%20phones", label: "Mobile Phones" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-base-content/60 hover:text-blue-500 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom */}
    <div className="border-t border-base-300 py-5 sm:py-6">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-base-content/50 text-center sm:text-left">
          © {new Date().getFullYear()} ReSellHub. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {[
            { href: "/privacy", label: "Privacy Policy" },
            { href: "/terms", label: "Terms of Service" },
            { href: "/cookies", label: "Cookie Policy" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs sm:text-sm text-base-content/50 hover:text-blue-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
