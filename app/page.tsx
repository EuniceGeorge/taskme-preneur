import React from 'react';

const sampleAIPosts = [
  {
    id: 1,
    title: "Deploying Autonomous AI Agents for Micro-SaaS Operations",
    excerpt: "How solo entrepreneurs are using orchestration frameworks to automate customer support, outreach, and code generation on a $0 budget.",
    date: "June 12, 2026",
    readTime: "6 min read",
    image: "https://unsplash.com"
  },
  {
    id: 2,
    title: "The Prompt Engineering Playbook for Solo Founders",
    excerpt: "Master advanced contextual prompting techniques to turn LLMs into dedicated product managers, copywriters, and legal advisors.",
    date: "June 3, 2026",
    readTime: "4 min read",
    image: "https://unsplash.com"
  }
];

export default function TaskmePreneurHome() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-950 to-slate-950">
      
      {/* GLOWING HEADER */}
      <header className="border-b border-slate-900 backdrop-blur sticky top-0 bg-slate-950/70 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-black tracking-wider bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            Taskme.preneur
          </a>
          <nav className="flex items-center gap-6 text-sm font-semibold tracking-wide text-slate-400">
            <a href="#" className="hover:text-cyan-400 transition-colors">Intelligence</a>
            <a href="#" className="hover:text-violet-400 transition-colors">Builds</a>
            <a href="#" className="hover:text-slate-100 transition-colors">About</a>
          </nav>
        </div>
      </header>

      {/* AI HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-950/30 text-xs font-medium text-violet-300 mb-6 backdrop-blur">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          AI & Automation Node Active
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-100 max-w-4xl mx-auto leading-[1.15]">
          Architecting the Future of{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
            AI-Driven Solopreneurship
          </span>
        </h1>
        <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Where artificial intelligence meets rapid business execution. Deep-dives into workflows, autonomous agents, and highly scalable tech frameworks.
        </p>
      </section>

      {/* NEON CARDS GRID */}
      <main className="max-w-5xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between border-b border-slate-900 pb-4 mb-10">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <span className="w-1.5 h-3 bg-violet-500 rounded-sm"></span> Recent Telemetry
          </h2>
          <span className="text-[10px] font-mono border border-cyan-500/30 px-2 py-0.5 rounded text-cyan-400 bg-cyan-950/20">
            Live CMS Pipeline
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {sampleAIPosts.map((post) => (
            <article 
              key={post.id} 
              className="group flex flex-col bg-slate-900/30 border border-slate-900 rounded-xl overflow-hidden hover:border-violet-500/40 hover:bg-slate-900/50 transition-all duration-300 relative shadow-2xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-900">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100" 
                />
              </div>
              
              <div className="p-6 flex flex-col flex-1 relative z-10">
                <div className="flex items-center gap-3 text-xs font-mono text-slate-500 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="text-cyan-400/80">{post.readTime}</span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors line-clamp-2 leading-snug">
                  <a href="#">{post.title}</a>
                </h3>
                
                <p className="mt-3 text-sm text-slate-400 line-clamp-3 flex-1 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-wider text-cyan-400 group-hover:text-cyan-300 gap-1.5 transition-all">
                  Analyze Protocol 
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900/60 py-12 bg-slate-950/80 backdrop-blur">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-slate-600">
          <p>© 2026 Taskme.preneur</p>
          <div className="flex gap-6 text-slate-500">
            <a href="#" className="hover:text-cyan-400 transition-colors">X / Twitter</a>
            <a href="#" className="hover:text-violet-400 transition-colors">GitHub Matrix</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
