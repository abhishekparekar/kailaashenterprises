import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY } from '../../data/company';
import { getSiteVisitUrl } from '../../utils/whatsapp';
import Icon from '../common/Icon';
import Container from '../common/Container';
import Logo from '../common/Logo';

export default function Footer() {
  return (
    <footer className="bg-[#170A2C] text-white pt-8 pb-28 md:pt-12 md:pb-10 border-t border-[#32105F] relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#32105F]/40 rounded-full blur-3xl pointer-events-none -z-0"></div>
      
      <Container size="large" className="relative z-10 space-y-8">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10">
          
          {/* Column 1: Brand & Business Overview (Span 5 on Desktop) */}
          <div className="lg:col-span-5 space-y-3.5">
            <Logo theme="dark" size="lg" />

            {/* Business Commitment Overview - Clear, Legible Font */}
            <p className="text-[13px] sm:text-[14px] md:text-[14.5px] text-[#D6CAE4] leading-relaxed max-w-md font-normal">
              Kailaash Enterprises is committed to delivering quality products and reliable solutions with a strong focus on customer satisfaction. We believe in building long-term relationships through trust, quality, and professional service. With our dedication and expertise, we continue to serve our customers with excellence and consistency.
            </p>

            {/* Quick Contact Badges (Clean, Responsive on Mobile & Desktop) */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-[#D7A72E] hover:text-[#170A2C] text-xs sm:text-sm font-bold text-white border border-white/15 transition-all duration-200 shadow-xs group"
                aria-label={`Call ${COMPANY.phoneDisplay}`}
              >
                <Icon name="Phone" className="w-4 h-4 text-[#D7A72E] group-hover:text-[#170A2C] transition-colors shrink-0" />
                <span>{COMPANY.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white hover:text-[#170A2C] text-xs sm:text-sm font-bold text-white border border-white/15 transition-all duration-200 shadow-xs group max-w-full truncate"
                aria-label={`Send Email to ${COMPANY.email}`}
              >
                <Icon name="Mail" className="w-4 h-4 text-[#D7A72E] group-hover:text-[#170A2C] transition-colors shrink-0" />
                <span className="truncate">{COMPANY.email}</span>
              </a>
            </div>
          </div>

          {/* Column 2 & 3: Side-by-Side 2-Columns on Mobile / iOS / iPad (Span 4 on Desktop) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-5 sm:gap-6 pt-3 lg:pt-0 border-t lg:border-t-0 border-white/10">
            
            {/* Left: Services List */}
            <div className="space-y-2.5">
              <h4 className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-[#D7A72E] flex items-center gap-1.5 pb-1.5 border-b border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#D7A72E]"></span>
                <span>Services</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13.5px] text-[#D6CAE4] font-medium">
                <li>
                  <Link to="/services/modular-kitchen" className="hover:text-white hover:underline transition-colors">Modular Kitchens</Link>
                </li>
                <li>
                  <Link to="/services/wardrobes-cupboards" className="hover:text-white hover:underline transition-colors">Wardrobes & Units</Link>
                </li>
                <li>
                  <Link to="/services/custom-woodwork" className="hover:text-white hover:underline transition-colors">Custom Woodwork</Link>
                </li>
                <li>
                  <Link to="/services/painting-services" className="hover:text-white hover:underline transition-colors">Painting & Finishes</Link>
                </li>
                <li>
                  <Link to="/services/corporate-staffing-support" className="hover:text-white hover:underline transition-colors">Corporate Staffing</Link>
                </li>
                <li>
                  <Link to="/services" className="text-[#D7A72E] font-bold inline-block hover:underline pt-1">
                    All 11+ Services →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right: Company Links */}
            <div className="space-y-2.5">
              <h4 className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-[#D7A72E] flex items-center gap-1.5 pb-1.5 border-b border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#D7A72E]"></span>
                <span>Company</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13.5px] text-[#D6CAE4] font-medium">
                <li>
                  <Link to="/" className="hover:text-white hover:underline transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white hover:underline transition-colors">About Us</Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-white hover:underline transition-colors">Work Gallery</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white hover:underline transition-colors">Contact Us</Link>
                </li>
                <li>
                  <a 
                    href={getSiteVisitUrl()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#D7A72E] font-bold inline-block hover:underline pt-1"
                  >
                    Free Site Visit →
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Column 4: Pune Location Card (Span 3 on Desktop) */}
          <div className="lg:col-span-3 space-y-2.5 pt-3 lg:pt-0 border-t lg:border-t-0 border-white/10">
            <h4 className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-[#D7A72E] flex items-center gap-1.5 pb-1.5 border-b border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#D7A72E]"></span>
              <span>Pune Headquarters</span>
            </h4>
            <div className="text-xs sm:text-[13.5px] text-[#D6CAE4] space-y-1.5 leading-relaxed">
              <p className="text-white font-bold">{COMPANY.founder} <span className="text-xs text-[#C4B5D4] font-normal">(Director)</span></p>
              <p className="text-[#D6CAE4]">{COMPANY.location.fullAddress}</p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-white/90 font-medium">Mon-Sat 9AM-8PM</span>
                <span>•</span>
                <a
                  href={COMPANY.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D7A72E] hover:underline font-bold inline-flex items-center gap-1"
                >
                  <span>Google Maps</span>
                  <Icon name="ExternalLink" className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Attribution Bar */}
        <div className="pt-5 border-t border-white/10 flex flex-col xl:flex-row items-center justify-between gap-4 text-xs sm:text-[13px] text-[#C4B5D4]">
          <div className="flex flex-wrap items-center justify-center xl:justify-start gap-x-2 gap-y-1 text-center xl:text-left">
            <span>© 2026 {COMPANY.name}</span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="inline-flex items-center gap-1.5 text-white/90">
              Designed &amp; Developed by
              <a
                href="https://www.icoded.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#D7A72E] hover:text-white transition-colors underline decoration-[#D7A72E]/40 hover:decoration-white underline-offset-4 inline-flex items-center gap-1 group"
                title="iCoded Automation Pvt. Ltd. - www.icoded.in"
              >
                <span>iCoded Automation Pvt. Ltd.</span>
                <Icon name="ExternalLink" className="w-3 h-3 text-[#D7A72E] group-hover:text-white transition-colors opacity-85" />
              </a>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            <span className="text-white/60 text-xs hidden lg:inline">Connect & Follow:</span>
            
            {/* Facebook Link */}
            <a 
              href={COMPANY.facebookUrl || "https://www.facebook.com/share/19RgZYQApG/"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-[#1877F2]/20 text-white/90 hover:text-white border border-white/10 hover:border-[#1877F2]/40 transition-all text-xs group"
              aria-label="Facebook Page"
            >
              <Icon name="Facebook" className="w-3.5 h-3.5 text-[#1877F2] group-hover:scale-110 transition-transform" />
              <span>Facebook</span>
            </a>
            
            {/* Instagram Link */}
            <a 
              href={COMPANY.instagramUrl || "https://www.instagram.com/india_k07?igsi=N2NwMHJya25ydWdi"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-[#E1306C]/20 text-white/90 hover:text-white border border-white/10 hover:border-[#E1306C]/40 transition-all text-xs group"
              aria-label="Instagram Profile"
            >
              <Icon name="Instagram" className="w-3.5 h-3.5 text-[#FF6584] group-hover:scale-110 transition-transform" />
              <span>Instagram</span>
            </a>

            {/* YouTube Link (None / Placeholder) */}
            <a 
              href={COMPANY.youtubeUrl && COMPANY.youtubeUrl !== '#' ? COMPANY.youtubeUrl : undefined}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs group ${
                COMPANY.youtubeUrl && COMPANY.youtubeUrl !== '#' 
                  ? 'bg-white/5 hover:bg-[#FF0000]/20 text-white/90 hover:text-white border-white/10 hover:border-[#FF0000]/40 transition-all cursor-pointer' 
                  : 'bg-white/5 text-white/60 border-white/10 cursor-default'
              }`}
              aria-label="YouTube Channel"
            >
              <Icon name="Youtube" className="w-3.5 h-3.5 text-[#FF0000]" />
              <span>YouTube {(!COMPANY.youtubeUrl || COMPANY.youtubeUrl === '#') && '(none)'}</span>
            </a>

            {/* Email Link */}
            <a 
              href={`mailto:${COMPANY.email}`}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-[#D7A72E]/20 text-white/90 hover:text-[#D7A72E] border border-white/10 hover:border-[#D7A72E]/40 transition-all text-xs group"
              aria-label={`Send email to ${COMPANY.email}`}
            >
              <Icon name="Mail" className="w-3.5 h-3.5 text-[#D7A72E] group-hover:scale-110 transition-transform" />
              <span className="truncate max-w-[190px]">{COMPANY.email}</span>
            </a>
          </div>
        </div>

      </Container>
    </footer>
  );
}
