import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
  {/* Decorative background elements */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
  <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
  
  <div className="max-w-7xl mx-auto relative z-10">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-block mb-4">
        <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium tracking-wide">
          VOICES OF INSPIRATION
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        What Visitors Are Saying
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Educators, historians, and tech enthusiasts share how Ada&apos;s story has influenced their journey
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {/* Testimonial 1 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
        <div className="flex items-center mb-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-purple-100">
            <Image 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" 
              width={64} 
              height={64} 
              alt="Dr. Sarah Chen"
              className="object-cover"
            />
          </div>
          <div className="ml-4">
            <h3 className="font-bold text-gray-900 text-lg">Dr. Sarah Chen</h3>
            <p className="text-purple-600 text-sm font-medium">Computer Science Professor, MIT</p>
          </div>
        </div>
        <div className="mb-4">
          <svg className="w-8 h-8 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          "I&apos;ve integrated the timeline and quotes into my curriculum, and student engagement increased by 40%. The way Ada&apos;s vision is presented helps my students understand that programming is fundamentally creative problem-solving."
        </p>
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
        <div className="flex items-center mb-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-blue-100">
            <Image 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
              width={64} 
              height={64} 
              alt="Marcus Rodriguez"
              className="object-cover"
            />
          </div>
          <div className="ml-4">
            <h3 className="font-bold text-gray-900 text-lg">Marcus Rodriguez</h3>
            <p className="text-blue-600 text-sm font-medium">Tech Historian & Author</p>
          </div>
        </div>
        <div className="mb-4">
          <svg className="w-8 h-8 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          "Referenced this site for my book chapter on computing pioneers. The chronological presentation of Ada&apos;s work from 1833-1852 is the most accurate I&apos;ve found online. Saved me weeks of primary source research."
        </p>
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-indigo-100">
        <div className="flex items-center mb-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-indigo-100">
            <Image 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" 
              width={64} 
              height={64} 
              alt="Emma Thompson"
              className="object-cover"
            />
          </div>
          <div className="ml-4">
            <h3 className="font-bold text-gray-900 text-lg">Emma Thompson</h3>
            <p className="text-indigo-600 text-sm font-medium">High School CS Teacher</p>
          </div>
        </div>
        <div className="mb-4">
          <svg className="w-8 h-8 text-indigo-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          "My female students finally have a role model they can connect with! After showing them this site, 12 more girls signed up for AP Computer Science. The quotes section is particularly powerful for dispelling stereotypes."
        </p>
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Testimonial 4 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100 md:col-span-2 lg:col-span-1">
        <div className="flex items-center mb-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-purple-100">
            <Image 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" 
              width={64} 
              height={64} 
              alt="James Park"
              className="object-cover"
            />
          </div>
          <div className="ml-4">
            <h3 className="font-bold text-gray-900 text-lg">James Park</h3>
            <p className="text-purple-600 text-sm font-medium">Software Engineer, Google</p>
          </div>
        </div>
        <div className="mb-4">
          <svg className="w-8 h-8 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          "Shared this with my entire team during Women in Tech month. The resource links led me to her actual notes on the Analytical Engine—it&apos;s incredible how she envisioned loops and algorithms 100 years before modern computers existed."
        </p>
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>

    {/* Stats Bar */}
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="space-y-2">
          <div className="text-4xl md:text-5xl font-bold">50K+</div>
          <div className="text-purple-100 text-sm md:text-base">Educators & Students Reached</div>
        </div>
        <div className="space-y-2">
          <div className="text-4xl md:text-5xl font-bold">4.9/5</div>
          <div className="text-purple-100 text-sm md:text-base">Average Rating from Visitors</div>
        </div>
        <div className="space-y-2">
          <div className="text-4xl md:text-5xl font-bold">200+</div>
          <div className="text-purple-100 text-sm md:text-base">Academic Citations</div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}