'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ApprovalWorkflow() {
  const [isApproved, setIsApproved] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);
  const sectionRef = useRef(null);
  const approvalCardsRef = useRef([]);

  const toggleApproval = () => {
    setIsApproved((prev) => !prev);
    setPulseCount((c) => c + 1);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.approval-step-card',
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="workflow"
      className="py-24 sm:py-32 relative overflow-hidden z-10"
      aria-label="Workflow & Approvals"
    >
      {/* Background Soft Glow */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #a7f3d0 0%, #c4b5fd 40%, transparent 80%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* NayaPay Heading & Subtitle */}
        <div className="max-w-[780px] mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill mb-4">
            <span className="w-2 h-2 rounded-full bg-[#a7f3d0] shadow-[0_0_8px_#a7f3d0] animate-pulse" />
            <span className="text-[12px] font-semibold tracking-wider text-text-secondary uppercase">
              Transparent Milestone Protocol
            </span>
          </div>
          <h2 className="text-[38px] sm:text-[52px] lg:text-[64px] font-black text-white leading-[1] tracking-[-0.035em]">
            You can&apos;t oversee every pixel, <br />
            <span className="text-aurora">but your creative lead can.</span>
          </h2>
          <p className="text-[16px] sm:text-[18px] text-text-secondary mt-4 leading-relaxed max-w-[640px]">
            Direct partner collaboration with zero friction. Inspect live interactive builds, review design milestones, and sign off with a single click.
          </p>
        </div>

        {/* NayaPay Approval Interactive Showcase Container */}
        <div className="rounded-3xl p-6 sm:p-12 lg:p-14 glass-panel-glow border-white/15 relative overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Side: Interactive Milestone Card with Live Button */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-2xl p-6 sm:p-8 bg-[#090b10] border border-white/10 shadow-2xl relative overflow-hidden">
                {/* Status Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#a7f3d0] animate-pulse" />
                    <span className="text-[12px] font-mono text-white/70 uppercase">
                      Sprint Sign-off Protocol
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#c4b5fd]">
                    Toronto Studio Hub
                  </span>
                </div>

                {/* Milestone Detail */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/15 flex items-center justify-center text-white shrink-0 overflow-hidden">
                    <span className="font-black text-[18px] text-aurora">FT</span>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-black text-white">
                      Flagship Digital Platform
                    </h3>
                    <p className="text-[13px] text-text-secondary mt-1">
                      Final Production Review &amp; 60 FPS Motion Sign-off
                    </p>
                  </div>
                </div>

                {/* NayaPay Signature Interactive "Approve" -> "Approved" Button */}
                <div className="pt-2">
                  <button
                    onClick={toggleApproval}
                    type="button"
                    className={`w-full py-4 px-6 rounded-2xl font-mono text-[14px] font-bold uppercase tracking-wider transition-all duration-500 flex items-center justify-center gap-3 cursor-pointer shadow-xl ${
                      isApproved
                        ? 'bg-[#a7f3d0] text-black shadow-[0_0_30px_rgba(167,243,208,0.4)] scale-[1.02]'
                        : 'bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/20 hover:border-white/40'
                    }`}
                    aria-label="Toggle Milestone Approval"
                  >
                    {isApproved ? (
                      <>
                        <svg className="w-5 h-5 text-black animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span>Milestone Approved &amp; Queued</span>
                      </>
                    ) : (
                      <>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#a7f3d0] animate-ping" />
                        <span>Click to Approve Milestone</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] font-mono text-center text-text-muted mt-3">
                    {isApproved ? 'Click again to reset toggle' : 'Try clicking above to simulate the live client approval workflow'}
                  </p>
                </div>

                {/* Director Verification Stamp */}
                <div className={`mt-6 pt-4 border-t border-white/10 flex items-center justify-between transition-all duration-500 ${
                  isApproved ? 'opacity-100 translate-y-0' : 'opacity-40'
                }`}>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#a7f3d0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[12px] font-mono text-white/80">
                      Verified by Principal Director
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#a7f3d0]">
                    {isApproved ? 'STATUS: VERIFIED' : 'STATUS: PENDING'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Staggered Hierarchical Approval Cards (Matching NayaPay Approval1, 2, 3) */}
            <div className="lg:col-span-6 space-y-3.5">
              
              {/* Step 1 */}
              <div className="approval-step-card p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#c4b5fd]/15 border border-[#c4b5fd]/30 flex items-center justify-center text-[#c4b5fd] font-mono text-[12px] font-bold">
                    01
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-white">Creative Direction &amp; Moodboard</h4>
                    <p className="text-[12px] text-text-muted">Editorial typographic pairings and palette systems</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-[#a7f3d0]/10 border border-[#a7f3d0]/20 text-[#a7f3d0] font-bold uppercase shrink-0">
                  Approved
                </span>
              </div>

              {/* Step 2 */}
              <div className="approval-step-card p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#fbcfe8]/15 border border-[#fbcfe8]/30 flex items-center justify-center text-[#fbcfe8] font-mono text-[12px] font-bold">
                    02
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-white">UI/UX Architecture &amp; Wireframes</h4>
                    <p className="text-[12px] text-text-muted">High-fidelity responsive layouts &amp; interactive prototype</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-[#a7f3d0]/10 border border-[#a7f3d0]/20 text-[#a7f3d0] font-bold uppercase shrink-0">
                  Approved
                </span>
              </div>

              {/* Step 3 */}
              <div className="approval-step-card p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#fed7aa]/15 border border-[#fed7aa]/30 flex items-center justify-center text-[#fed7aa] font-mono text-[12px] font-bold">
                    03
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-white">60 FPS GSAP Motion &amp; Interaction</h4>
                    <p className="text-[12px] text-text-muted">Lenis smooth scroll physics and choreographies</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-[#a7f3d0]/10 border border-[#a7f3d0]/20 text-[#a7f3d0] font-bold uppercase shrink-0">
                  Approved
                </span>
              </div>

              {/* Step 4 */}
              <div className="approval-step-card p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#a7f3d0]/15 border border-[#a7f3d0]/30 flex items-center justify-center text-[#a7f3d0] font-mono text-[12px] font-bold">
                    04
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-white">Production Launch &amp; DNS Cutover</h4>
                    <p className="text-[12px] text-text-muted">Global CDN edge caching and SSL certification</p>
                  </div>
                </div>
                <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase shrink-0 transition-colors ${
                  isApproved
                    ? 'bg-[#a7f3d0]/20 border border-[#a7f3d0]/40 text-[#a7f3d0]'
                    : 'bg-white/[0.05] border border-white/10 text-white/50'
                }`}>
                  {isApproved ? 'Ready' : 'In Queue'}
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
