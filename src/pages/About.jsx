import React from 'react';
import { COMPANY } from '../data/company';
import { getWhatsAppUrl } from '../utils/whatsapp';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Icon from '../components/common/Icon';
import Process from '../components/home/Process';
import WhyChooseUs from '../components/home/WhyChooseUs';
import FinalCTA from '../components/home/FinalCTA';

export default function About() {
  return (
    <div className="bg-[#FAF8F3]">
      {/* About Page Hero */}
      <section className="bg-[#170A2C] text-white py-6 sm:py-8 md:py-10 relative overflow-hidden border-b border-[#32105F]">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#32105F]/40 rounded-full blur-3xl pointer-events-none -z-0"></div>
        <Container size="large" className="relative z-10 text-center max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#D7A72E] text-[11px] sm:text-xs font-extrabold uppercase tracking-wider mb-2 border border-[#D7A72E]/30">
            <Icon name="Building" className="w-3.5 h-3.5" />
            <span>Established 2017 • About Us</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
            About Kailash Enterprises
          </h1>
        </Container>
      </section>

      {/* Brand Story Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-white">
        <Container size="large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Story Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#32105F]/5 text-[#32105F] text-xs font-extrabold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D7A72E]"></span>
                Our Story & Journey
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#16131B] tracking-tight leading-tight">
                Built on Trust & Values Since 2017. <br />
              </h2>

              {/* Owner Story Blockquotes / Paragraphs */}
              <div className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm md:text-base text-[#16131B] leading-relaxed">
                <p className="font-medium text-[#16131B]">
                  <strong>Kailash Enterprises began in 2017</strong> and our single-minded promise is to ensure that we develop and strengthen relationships with clients and partners by delivering state-of-the-art services through our unique expertise.
                </p>
                <p>
                  We have grown on a strong foundation of trust and values to rise as one of the leading <strong>Corporate Support Staffing</strong> and turnkey interior execution services across India. We cater to clients within a diverse range of sectors and offer our unique expertise to build and provide personalized and superior quality solutions.
                </p>
                <p>
                  Kailash Enterprises takes pride in providing our clients with solutions that are executed with <strong>precision and care</strong> — whether it is specialized corporate support staffing, master carpentry and custom interior fabrication, or comprehensive maintenance.
                </p>
              </div>

              {/* 4 Stat Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-[#FAF8F3] border border-[#E8E2EE] text-center">
                  <div className="text-xl sm:text-2xl font-black text-[#32105F]">2017</div>
                  <div className="text-[10px] sm:text-xs font-bold text-[#16131B] mt-0.5">Year Founded</div>
                </div>
                <div className="p-3 rounded-2xl bg-[#FAF8F3] border border-[#E8E2EE] text-center">
                  <div className="text-xl sm:text-2xl font-black text-[#32105F]">Pan-India</div>
                  <div className="text-[10px] sm:text-xs font-bold text-[#16131B] mt-0.5">Service Reach</div>
                </div>
                <div className="p-3 rounded-2xl bg-[#FAF8F3] border border-[#E8E2EE] text-center">
                  <div className="text-xl sm:text-2xl font-black text-[#32105F]">Diverse</div>
                  <div className="text-[10px] sm:text-xs font-bold text-[#16131B] mt-0.5">Sector Clients</div>
                </div>
                <div className="p-3 rounded-2xl bg-[#FAF8F3] border border-[#E8E2EE] text-center">
                  <div className="text-xl sm:text-2xl font-black text-[#D7A72E]">100%</div>
                  <div className="text-[10px] sm:text-xs font-bold text-[#16131B] mt-0.5">Care & Precision</div>
                </div>
              </div>

              {/* Guiding Principle Card */}
              <div className="p-4 sm:p-5 rounded-3xl bg-[#FAF8F3] border border-[#E8E2EE]">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#D7A72E] mb-1">
                  Our Guiding Philosophy
                </div>
                <div className="text-base sm:text-lg font-bold text-[#16131B] italic">
                  "{COMPANY.philosophy}"
                </div>
                <p className="text-xs text-[#16131B] mt-1.5 font-medium">
                  Every drawer track tested, every surface sanded smooth, and every project delivered with complete customer approval and dedicated warranty support.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Button 
                  href={getWhatsAppUrl("Hello Kailash Enterprises, I would like to consult about your services.")} 
                  variant="whatsapp" 
                  size="md" 
                  icon="MessageSquare"
                >
                  WhatsApp Consultation
                </Button>
                <Button 
                  href={`tel:${COMPANY.phoneRaw}`} 
                  variant="secondary" 
                  size="md" 
                  icon="PhoneCall"
                >
                  Call {COMPANY.phoneDisplay}
                </Button>
              </div>
            </div>

            {/* Story Visual: All Services Combo Collage */}
            <div className="lg:col-span-5 mt-4 lg:mt-0">
              <div className="bg-[#FAF8F3] p-3 sm:p-4 rounded-3xl border border-[#E8E2EE] shadow-lg max-w-sm sm:max-w-md mx-auto space-y-3">
                
                {/* 2x2 Services Combo Collage Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  
                  {/* Tile 1: Modular Kitchens */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-xs">
                    <img
                      src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=500&q=80"
                      alt="Modular Kitchens"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <span className="absolute bottom-1.5 left-2 text-[10px] sm:text-xs font-extrabold text-white">
                      Modular Kitchens
                    </span>
                  </div>

                  {/* Tile 2: Custom Woodwork */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-xs">
                    <img
                      src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=500&q=80"
                      alt="Custom Woodwork"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <span className="absolute bottom-1.5 left-2 text-[10px] sm:text-xs font-extrabold text-white">
                      Custom Woodwork
                    </span>
                  </div>

                  {/* Tile 3: Painting & Wall Finishes */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-xs">
                    <img
                      src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=500&q=80"
                      alt="Painting Services"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <span className="absolute bottom-1.5 left-2 text-[10px] sm:text-xs font-extrabold text-white">
                      Painting & Finishes
                    </span>
                  </div>

                  {/* Tile 4: Corporate Staffing */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-xs">
                    <img
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80"
                      alt="Corporate Support Staffing"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <span className="absolute bottom-1.5 left-2 text-[10px] sm:text-xs font-extrabold text-white">
                      Corporate Staffing
                    </span>
                  </div>

                </div>

                {/* Bottom Trust & Founder Card */}
                <div className="p-3 rounded-2xl bg-[#170A2C] text-white flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[9px] font-bold text-[#D7A72E] uppercase tracking-wider">
                      Established 2017 • Pune HQ
                    </div>
                    <div className="text-xs sm:text-sm font-extrabold">
                      {COMPANY.founder} <span className="text-[10px] text-white/80 font-normal">(Managing Director)</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-[#D7A72E]/20 text-[#D7A72E] flex items-center justify-center shrink-0">
                    <Icon name="ShieldCheck" className="w-4 h-4" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Strategic Pillars / Core Strengths 4-Block */}
      <section className="py-10 sm:py-16 md:py-20 bg-[#FAF8F3] border-t border-[#E8E2EE]">
        <Container size="large">
          <SectionHeading
            badge="Our Pillars"
            title="The Standards That Define Our Growth"
            subtitle="How we consistently deliver state-of-the-art services to clients across India."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#E8E2EE] shadow-xs hover:border-[#32105F]/30 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-[#32105F]/10 text-[#32105F] flex items-center justify-center mb-4">
                <Icon name="Target" className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-[#16131B] mb-1.5">Single-Minded Promise</h3>
              <p className="text-xs sm:text-sm text-[#16131B] leading-relaxed">
                Developing and strengthening lasting relationships with clients and partners through high-standard execution.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#E8E2EE] shadow-xs hover:border-[#32105F]/30 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-[#32105F]/10 text-[#32105F] flex items-center justify-center mb-4">
                <Icon name="Layers" className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-[#16131B] mb-1.5">Diverse Sectors</h3>
              <p className="text-xs sm:text-sm text-[#16131B] leading-relaxed">
                Corporate support staffing and turnkey interior solutions serving corporate, retail, IT, and residential clients.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#E8E2EE] shadow-xs hover:border-[#32105F]/30 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-[#32105F]/10 text-[#32105F] flex items-center justify-center mb-4">
                <Icon name="Sparkles" className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-[#16131B] mb-1.5">Personalized Solutions</h3>
              <p className="text-xs sm:text-sm text-[#16131B] leading-relaxed">
                Custom-tailored solutions crafted specifically to align with each client's unique layout, scope, and budget.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#E8E2EE] shadow-xs hover:border-[#32105F]/30 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-[#32105F]/10 text-[#32105F] flex items-center justify-center mb-4">
                <Icon name="ShieldCheck" className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-[#16131B] mb-1.5">Precision & Care</h3>
              <p className="text-xs sm:text-sm text-[#16131B] leading-relaxed">
                Every project executed with meticulous craftsmanship, genuine materials, and rigorous quality inspection.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Execution Process Section */}
      <Process />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}

