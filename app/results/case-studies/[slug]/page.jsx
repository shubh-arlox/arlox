// app/case-studies/[slug]/page.jsx
import Image from 'next/image';
import Link from 'next/link';
import { getCaseStudyBySlug, getCaseStudies } from '@/lib/webflow';
import RichText from '@/components/RichText'; // <--- Import the new component

// ... generateStaticParams and generateMetadata functions remain the same ...

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const data = await getCaseStudyBySlug(slug);

  if (!data) {
    return <div className="min-h-screen flex items-center justify-center bg-[#e0e5ec]">Not Found</div>;
  }

  const { 
    name, 
    'short-description': description, // This is your HTML content
    'founder-pic': founderPic,
    'brand-logo': brandLogo,
    'client-name': clientName,
    'presentation':presentation,
    before, 
    after, 
    timeline,
    category 
  } = data.fieldData;

  return (
    <main className="min-h-screen bg-[#e0e5ec] py-20 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb */}
        <Link href="/results/case-studies" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Case Studies
        </Link>

        {/* Paper Container */}
        <div 
          className="bg-[#e0e5ec] rounded-[40px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20"
          style={{ boxShadow: "20px 20px 60px #bec3c9, -20px -20px 60px #ffffff" }}
        >
          
          {/* LEFT SIDE: Main Content */}
          <div className="flex-1 order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 leading-tight">
              {name}
            </h1>

            {/* UPDATED SECTION: Use RichText component */}
            <RichText content={presentation} />
            
          </div>

          {/* RIGHT SIDE: Sidebar (Remains exactly the same as previous code) */}
          <div className="w-full lg:w-[350px] shrink-0 order-1 lg:order-2">
             {/* ... Sidebar Code ... */}
              <div 
              className="sticky top-10 bg-[#e0e5ec] rounded-3xl p-6 flex flex-col items-center text-center"
              style={{
                boxShadow: "8px 8px 16px #bec3c9, -8px -8px 16px #ffffff" 
              }}
            >
              {/* Founder Image */}
              <div 
                className="relative w-40 h-40 rounded-full border-4 border-[#e0e5ec] overflow-hidden mb-4"
                style={{ boxShadow: "5px 5px 10px #b8b9be, -5px -5px 10px #ffffff" }}
              >
                {founderPic?.url ? (
                   <Image src={founderPic.url} alt={clientName || "Founder"} fill className="object-cover" />
                ) : (
                   <div className="flex h-full w-full items-center justify-center bg-gray-200 text-xs">No Photo</div>
                )}
              </div>

              <h3 className="text-2xl font-bold text-gray-800">{clientName}</h3>
              <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider font-bold">Founder</p>

              {/* Metrics List */}
              <div className="w-full space-y-4 text-left">
                
                {/* Before */}
                <div className="bg-[#e0e5ec] rounded-xl p-4" 
                     style={{ boxShadow: "inset 4px 4px 8px #bec3c9, inset -4px -4px 8px #ffffff" }}>
                  <p className="text-xs font-bold text-gray-400 uppercase">Before</p>
                  <p className="text-red-500 font-bold text-lg">{before || '-'}</p>
                </div>

                {/* After */}
                <div className="bg-[#e0e5ec] rounded-xl p-4" 
                     style={{ boxShadow: "inset 4px 4px 8px #bec3c9, inset -4px -4px 8px #ffffff" }}>
                  <p className="text-xs font-bold text-gray-400 uppercase">After</p>
                  <p className="text-green-600 font-bold text-xl">{after || '-'}</p>
                </div>

                {/* Timeline */}
                <div className="flex justify-between items-center px-2">
                   <span className="text-sm font-bold text-gray-500">Timeline:</span>
                   <span className="text-green-600 font-bold">{timeline || '-'}</span>
                </div>

                 {/* Category */}
                 <div className="flex justify-between items-center px-2">
                   <span className="text-sm font-bold text-gray-500">Category:</span>
                   <span className="text-blue-500 font-bold cursor-pointer hover:underline">
                     {category || 'Fashion'}
                   </span>
                </div>

              </div>

              {/* Logo Footer */}
              <div className="mt-8 pt-6 border-t border-gray-300 w-full flex justify-center">
                 {brandLogo?.url && (
                    <img src={brandLogo.url} alt="Brand" className="h-auto w-auto object-contain opacity-80 mix-blend-multiply" />
                 )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}