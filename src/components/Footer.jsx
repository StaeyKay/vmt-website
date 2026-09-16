import { Link, useLocation } from 'react-router';

import { Logo } from '../assets';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Services', path: '/services' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Privacy Policy', path: '/privacy' },
];

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="bg-linear-to-r from-[#1AE0F0] to-[#1A33E8] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="mb-5 inline-flex rounded-lg bg-white p-3">
              <img src={Logo} alt="AM DevPro" className="h-14 w-14 object-contain" />
            </div>
            <p className="mb-5 max-w-xs text-sm leading-relaxed text-white/70">
            Health, Education, Energy and Environmental Services
            for Developing Countries.
            </p>
            <a
              href="tel:+233302123456"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#0a1628] transition-colors hover:text-[#fbbf24]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.25 1.01l-2.22 2.1z" />
              </svg>
              +233 30 212 3456
            </a>
          </div>

          <div>
            <h3 className="mb-5 text-base font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={`text-sm transition-colors ${
                      location.pathname === path
                        ? 'font-medium text-[#0a1628]'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-base font-semibold">Contact Us</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#0a1628]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
                <span>
                  AM Development Projects Limited, Plot 29,
                  <br />
                  Manet Cottage Batsonaa 
                  <br />
                  P. O . B OX CT 1433, Cantonments, Accra, Ghana
                </span>
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#0a1628]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.25 1.01l-2.22 2.1z" />
                </svg>
                <span>+233 30 212 3456</span>
              </li>
              <li className="flex gap-3">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#0a1628]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a href="mailto:amdevelopmentprojectsghltd@gmail.com" className="transition-colors hover:text-white">
                  amdevelopmentprojectsghltd@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-white/50 sm:text-sm">
            Copyright &copy; 2024. All Rights Reserved. VM Technologies Investments Limited.
          </p>
        </div>
      </div>
    </footer>
  );
}
