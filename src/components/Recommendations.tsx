import { Quote } from 'lucide-react';

export function Recommendations() {
  const testimonials = [
    {
      quote: "Amlan's workshops on Figma APIs are hands-down the best I've attended. He doesn't just show you the code—he teaches you how to think like a developer advocate.",
      author: "Priya Sharma",
      role: "Senior Engineer",
      company: "Bangalore"
    },
    {
      quote: "ClarityUX transformed our design handoff process. Amlan built a tool that actually solves real problems, and his support throughout onboarding was exceptional.",
      author: "David Chen",
      role: "Design Lead",
      company: "Enterprise SaaS"
    },
    {
      quote: "As someone new to Figma's Plugin API, Amlan's documentation and example code made the learning curve so much smoother. He genuinely cares about developer success.",
      author: "Anjali Reddy",
      role: "Frontend Developer",
      company: "Fintech Startup"
    }
  ];

  return (
    <section className="py-32 px-6 bg-card relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-accent opacity-5" />
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-yellow opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full mb-6">
            Recommendations
          </div>
          <h2 className="text-foreground" style={{ fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: '1.1', fontWeight: 'var(--font-weight-bold)' }}>
            Trusted by
            <br />
            <span className="text-accent">developers</span> across APAC
          </h2>
        </div>

        {/* BENTO GRID for testimonials */}
        <div className="grid grid-cols-12 gap-6 auto-rows-[180px] mb-20">
          {/* First testimonial - large */}
          <div
            className="col-span-12 md:col-span-7 md:row-span-2 bg-primary text-primary-foreground p-8 flex flex-col justify-between"
            style={{ borderRadius: 'var(--radius-card)' }}
          >
            <Quote className="w-12 h-12 opacity-50 mb-4" />
            <p className="text-primary-foreground" style={{ fontSize: 'var(--text-lg)', lineHeight: '1.5' }}>
              "{testimonials[0].quote}"
            </p>
            <div className="mt-6 pt-4 border-t-2 border-primary-foreground/20">
              <div style={{ fontWeight: 'var(--font-weight-bold)' }}>{testimonials[0].author}</div>
              <div className="text-primary-foreground/80">{testimonials[0].role}</div>
            </div>
          </div>

          {/* Stats block */}
          <div
            className="col-span-12 md:col-span-5 md:row-span-1 bg-yellow text-primary p-6 flex items-center justify-center text-center"
            style={{ borderRadius: 'var(--radius-card)' }}
          >
            <div>
              <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-weight-bold)' }}>95%+</div>
              <div className="text-primary/80 mt-2">Workshop Satisfaction</div>
            </div>
          </div>

          {/* Stats block 2 */}
          <div
            className="col-span-12 md:col-span-5 md:row-span-1 bg-primary text-primary-foreground p-6 flex items-center justify-center text-center"
            style={{ borderRadius: 'var(--radius-card)' }}
          >
            <div>
              <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-weight-bold)' }}>4.8/5</div>
              <div className="text-primary-foreground/80 mt-2">Plugin Rating</div>
            </div>
          </div>

          {/* Second testimonial */}
          <div
            className="col-span-12 md:col-span-6 md:row-span-2 bg-background border-2 border-border p-6"
            style={{ borderRadius: 'var(--radius-card)' }}
          >
            <Quote className="w-8 h-8 text-accent mb-4" />
            <p className="text-foreground/90 mb-6">
              "{testimonials[1].quote}"
            </p>
            <div className="pt-4 border-t-2 border-border">
              <div className="text-foreground" style={{ fontWeight: 'var(--font-weight-bold)' }}>{testimonials[1].author}</div>
              <div className="text-foreground/80">{testimonials[1].role}</div>
            </div>
          </div>

          {/* Third testimonial */}
          <div
            className="col-span-12 md:col-span-6 md:row-span-2 bg-background border-2 border-border p-6"
            style={{ borderRadius: 'var(--radius-card)' }}
          >
            <Quote className="w-8 h-8 text-accent mb-4" />
            <p className="text-foreground/90 mb-6">
              "{testimonials[2].quote}"
            </p>
            <div className="pt-4 border-t-2 border-border">
              <div className="text-foreground" style={{ fontWeight: 'var(--font-weight-bold)' }}>{testimonials[2].author}</div>
              <div className="text-foreground/80">{testimonials[2].role}</div>
            </div>
          </div>
        </div>

        {/* Companies bar */}
        <div
          className="bg-primary text-primary-foreground p-12 text-center"
          style={{ borderRadius: 'var(--radius-card)' }}
        >
          <div className="text-primary-foreground/60 mb-6">Worked with teams at</div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['Travelopia', 'Aspire', 'SignEasy', 'Practo', 'Outskill'].map((company) => (
              <div key={company} className="text-primary-foreground" style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-bold)' }}>
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}