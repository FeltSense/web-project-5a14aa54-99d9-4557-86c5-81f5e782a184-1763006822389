export default function Services() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 py-24 px-4 overflow-hidden">
  {/* Decorative Elements */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
  </div>
  
  {/* Binary pattern overlay */}
  <div className="absolute inset-0 opacity-5" style={{
    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 3px)',
    color: '#fff'
  }}></div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Header */}
    <div className="text-center mb-20">
      <div className="inline-block mb-4">
        <span className="text-purple-300 text-sm font-mono tracking-widest uppercase bg-purple-900/30 px-4 py-2 rounded-full border border-purple-500/30">
          Explore Her Legacy
        </span>
      </div>
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
        Discover Ada&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Genius</span>
      </h2>
      <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
        Journey through the remarkable contributions of the world&apos;s first computer programmer
      </p>
    </div>

    {/* Services Grid - Asymmetric Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
      
      {/* Interactive Timeline - Large Featured */}
      <div className="lg:col-span-7 group relative bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500"></div>
        
        <div className="relative p-8 md:p-10">
          <div className="flex items-start justify-between mb-6">
            <div className="bg-purple-500/20 p-4 rounded-xl border border-purple-400/30 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-purple-300 text-sm font-mono">1815 - 1852</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">
            Interactive Timeline
          </h3>
          <p className="text-purple-200 text-lg mb-6 leading-relaxed">
            Navigate through 37 years of groundbreaking achievements. Explore pivotal moments from her birth in 1815 to her revolutionary Analytical Engine notes, complete with historical context and visual representations.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-3 py-1 bg-purple-800/40 text-purple-200 rounded-full text-sm border border-purple-500/30">Year-by-Year</span>
            <span className="px-3 py-1 bg-purple-800/40 text-purple-200 rounded-full text-sm border border-purple-500/30">Visual Markers</span>
            <span className="px-3 py-1 bg-purple-800/40 text-purple-200 rounded-full text-sm border border-purple-500/30">Historical Photos</span>
          </div>

          {/* Mini timeline preview */}
          <div className="flex items-center gap-2 mb-8">
            <div className="flex-1 h-1 bg-purple-800/40 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
            <span className="text-purple-300 text-xs font-mono">40+ Events</span>
          </div>

          <button className="group/btn inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
            Explore Timeline
            <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Decorative accent */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-500/20 to-transparent rounded-tl-full"></div>
      </div>

      {/* Inspirational Quotes - Vertical Card */}
      <div className="lg:col-span-5 group relative bg-gradient-to-br from-pink-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-pink-500/20 hover:border-pink-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/0 to-purple-600/0 group-hover:from-pink-600/10 group-hover:to-purple-600/10 transition-all duration-500"></div>
        
        <div className="relative p-8 md:p-10 h-full flex flex-col">
          <div className="bg-pink-500/20 p-4 rounded-xl border border-pink-400/30 inline-block mb-6 group-hover:scale-110 transition-transform duration-500 self-start">
            <svg className="w-8 h-8 text-pink-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-pink-200 transition-colors">
            Words of Wisdom
          </h3>
          <p className="text-pink-200 text-lg mb-6 leading-relaxed flex-grow">
            Immerse yourself in over 10 carefully curated quotes that reveal Ada&apos;s visionary thinking, poetic insight, and revolutionary approach to mathematics and imagination.
          </p>
          
          {/* Quote preview */}
          <div className="bg-pink-950/30 border-l-4 border-pink-400 p-4 rounded-r-xl mb-6">
            <p className="text-pink-100 italic text-sm leading-relaxed">
              "The Analytical Engine weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves."
            </p>
          </div>

          <div className="flex items-center gap-3 text-pink-300 text-sm mb-6">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              10+ Quotes
            </span>
            <span className="text-pink-500">•</span>
            <span>Fully Sourced</span>
          </div>

          <button className="group/btn inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 self-start">
            Read Quotes
            <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    {/* Bottom Row - Two Cards */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      {/* Analytical Engine Notes */}
      <div className="group relative bg-gradient-to-br from-indigo-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-blue-600/0 group-hover:from-indigo-600/10 group-hover:to-blue-600/10 transition-all duration-500"></div>
        
        <div className="relative p-8 md:p-10">
          <div className="flex items-start justify-between mb-6">
            <div className="bg-indigo-500/20 p-4 rounded-xl border border-indigo-400/30 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-8 h-8 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="px-3 py-1 bg-indigo-800/40 text-indigo-200 rounded-full text-xs font-mono border border-indigo-500/30">Note G</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-indigo-200 transition-colors">
            The Analytical Engine
          </h3>
          <p className="text-indigo-200 text-lg mb-6 leading-relaxed">
            Dive deep into Ada&apos;s revolutionary notes on Babbage&apos;s Analytical Engine. Explore her algorithm for computing Bernoulli numbers—the world&apos;s first computer program.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-indigo-950/40 p-4 rounded-lg border border-indigo-500/20">
              <div className="text-2xl font-bold text-indigo-300 mb-1">Note A-G</div>
              <div className="text-indigo-400 text-sm">7 Sections</div>
            </div>
            <div className="bg-indigo-950/40 p-4 rounded-lg border border-indigo-500/20">
              <div className="text-2xl font-bold text-indigo-300 mb-1">1843</div>
              <div className="text-indigo-400 text-sm">Published</div>
            </div>
          </div>

          <button className="group/btn inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105">
            View Notes
            <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Code snippet decoration */}
        <div className="absolute bottom-4 right-4 opacity-10 font-mono text-xs text-indigo-200">
          <div>{'<algorithm>'}</div>
          <div className="pl-4">{'compute(B₀...Bₙ)'}</div>
          <div>{'</algorithm>'}</div>
        </div>
      </div>

      {/* Academic Resources */}
      <div className="group relative bg-gradient-to-br from-violet-900/40 to-fuchsia-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-violet-500/20 hover:border-violet-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-fuchsia-600/0 group-hover:from-violet-600/10 group-hover:to-fuchsia-600/10 transition-all duration-500"></div>
        
        <div className="relative p-8 md:p-10">
          <div className="bg-violet-500/20 p-4 rounded-xl border border-violet-400/30 inline-block mb-6 group-hover:scale-110 transition-transform duration-500">
            <svg className="w-8 h-8 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-violet-200 transition-colors">
            Research Library
          </h3>
          <p className="text-violet-200 text-lg mb-6 leading-relaxed">
            Access an extensive collection of 20+ peer-reviewed papers, historical documents, biographies, and modern analyses of Ada&apos;s contributions to computing.
          </p>

          {/* Resource categories */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-violet-200">
              <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
              <span className="text-sm">Academic Papers & Journals</span>
            </div>
            <div className="flex items-center gap-3 text-violet-200">
              <div className="w-2 h-2 bg-fuchsia-400 rounded-full"></div>
              <span className="text-sm">Historical Manuscripts</span>
            </div>
            <div className="flex items-center gap-3 text-violet-200">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-sm">Digital Archives</span>
            </div>
            <div className="flex items-center gap-3 text-violet-200">
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              <span className="text-sm">Educational Resources</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-violet-600 border-2 border-violet-900 flex items-center justify-center text-white text-xs font-bold">20+</div>
              <div className="w-10 h-10 rounded-full bg-fuchsia-600 border-2 border-violet-900 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
            </div>
            <span className="text-violet-300 text-sm">Curated & Verified Sources</span>
          </div>

          <button className="group/btn inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105">
            Browse Library
            <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}