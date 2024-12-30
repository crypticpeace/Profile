import React from 'react';
import { Instagram, Github, Linkedin, Mail, MessageSquare, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-900 text-gray-100 rounded-lg border border-slate-700">
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="w-full bg-slate-800 hover:bg-slate-700 py-4 text-sm text-center transition-colors rounded-t-lg border-b border-slate-700"
      >
        <div className="flex items-center justify-center gap-2">
          <ArrowUp size={16} />
          Back to top
        </div>
      </button>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Get to Know Me */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-300">Get to Know Me</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/about" className="hover:text-blue-300 transition-colors">About Me</a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-blue-300 transition-colors">Portfolio</a>
              </li>
            </ul>
          </div>

          {/* Connect With Me */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-300">Connect With Me</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/aman47jain/"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-300 transition-colors"
                >
                  <Instagram size={20} />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919490233611"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-300 transition-colors"
                >
                  <MessageSquare size={20} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/aman47j"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-300 transition-colors"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/aman47j"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-300 transition-colors"
                >
                  <Github size={20} />
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Me */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-300">Contact me</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="mailto:jainamanmsd47@gmail.com"
                  className="flex items-center gap-2 hover:text-blue-300 transition-colors"
                >
                  <Mail size={20} />
                  jainamanmsd47@gmail.com
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-300 transition-colors">
                  +91 9490233611
                </a>
              </li>
            </ul>
          </div>

          {/* Let's Work Together */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-300">Let's Work Together</h3>
            <p className="text-gray-300 mb-4">
              Interested in collaboration? Let's build something amazing together!
            </p>
            <a
              href='https://wa.me/919490233611'
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Yeh kyu padh rahe ho. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <a href="/privacy" className="text-sm text-gray-400 hover:text-blue-300 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-blue-300 transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;