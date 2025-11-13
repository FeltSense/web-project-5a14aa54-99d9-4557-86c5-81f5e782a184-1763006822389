import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/5 rounded-full blur-3xl"></div>
  </div>

  {/* Binary code pattern overlay */}
  <div className="absolute inset-0 opacity-5">
    <div className="text-xs font-mono text-white leading-relaxed tracking-wider">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="whitespace-nowrap overflow-hidden">
          01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100
        </div>
      ))}
    </div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left content */}
      <div className="text-center lg:text-left space-y-8 z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <span className="text-purple-200 text-sm font-medium">1815 - 1852</span>
        </div>

        {/* Main headline */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Ada Lovelace
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 mt-2">
              The First Programmer
            </span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto lg:mx-0 rounded-full"></div>
        </div>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-purple-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
          Discover the visionary mathematician who imagined the future of computing a century before the first computer. 
          Explore her groundbreaking notes, timeless wisdom, and lasting legacy.
        </p>

        {/* Quote preview */}
        <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
          <div className="absolute -top-3 -left-3 text-6xl text-purple-400/30 font-serif">"</div>
          <p className="text-purple-100 italic text-base sm:text-lg relative z-10">
            The Analytical Engine weaves algebraic patterns, just as the Jacquard loom weaves flowers and leaves.
          </p>
          <div className="mt-3 flex items-center gap-2 text-purple-300/80 text-sm">
            <div className="h-px flex-1 bg-purple-400/20"></div>
            <span>Ada Lovelace, 1843</span>
            <div className="h-px flex-1 bg-purple-400/20"></div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore Timeline
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
          
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300">
            Read Her Notes
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
          <div className="text-center lg:text-left">
            <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
              1843
            </div>
            <div className="text-purple-200/70 text-sm mt-1">First Algorithm</div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
              10+
            </div>
            <div className="text-purple-200/70 text-sm mt-1">Quotes</div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
              37
            </div>
            <div className="text-purple-200/70 text-sm mt-1">Years of Vision</div>
          </div>
        </div>
      </div>

      {/* Right content - Portrait with decorative elements */}
      <div className="relative lg:order-last order-first">
        <div className="relative z-10 mx-auto max-w-md lg:max-w-none">
          {/* Decorative rings */}
          <div className="absolute -top-8 -right-8 w-72 h-72 border-2 border-purple-500/20 rounded-full animate-spin-slow"></div>
          <div className="absolute -bottom-8 -left-8 w-64 h-64 border-2 border-fuchsia-500/20 rounded-full animate-spin-reverse"></div>
          
          {/* Main image container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/50 border-4 border-white/10 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-fuchsia-600/20 mix-blend-overlay"></div>
            <Image 
              src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80"
              width={800}
              height={1000}
              alt="Artistic representation of Ada Lovelace, pioneering mathematician and first computer programmer"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Floating achievement cards */}
          <div className="absolute -left-4 top-1/4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl hidden sm:block animate-float">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">First Algorithm</div>
                <div className="text-purple-200/70 text-xs">Analytical Engine</div>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 bottom-1/4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl hidden sm:block animate-float-delayed">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Visionary Notes</div>
                <div className="text-purple-200/70 text-xs">Computing Future</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="flex flex-col items-center gap-2 text-purple-300/60">
      <span className="text-xs font-medium">Scroll to explore</span>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </div>

  <style jsx>{`
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes spin-reverse {
      from { transform: rotate(360deg); }
      to { transform: rotate(0deg); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    @keyframes float-delayed {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
    }
    .animate-spin-slow {
      animation: spin-slow 20s linear infinite;
    }
    .animate-spin-reverse {
      animation: spin-reverse 15s linear infinite;
    }
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
    .animate-float-delayed {
      animation: float-delayed 3s ease-in-out infinite 1s;
    }
    .delay-700 {
      animation-delay: 700ms;
    }
  `}</style>
</div>
  );
}