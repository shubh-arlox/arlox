// components/CaseStudyCard.jsx
import Image from 'next/image';
import Link from 'next/link';
import AdaptiveBadge from './AdaptiveBadge';

export default function CaseStudyCard({ data }) {
  const {
    brand_name,
    brand_logo,
    slug,
    Founder_name,
    Founder_image,
    OLD_MRR,
    timeline,
    New_MRR,
    Cover_Image_link,
    Cover_text_1,
    SEO_meta_data,
    Category_tags,
    tag,
    client_location // <--- Make sure your data passes this field (e.g., "USA" or "India")
  } = data
  const nationality = {
    'India':["🇮🇳","India"],
    'United States': ["🇺🇸","USA"],
    'United Kingdom': ["🇬🇧","UK"],
    'Canada': ["🇨🇦","Canada"],
    'Australia': ["🇦🇺","Australia"],
    'Germany': ["🇩🇪","Germany"]
  }

  return (
    <div 
      className="group relative flex flex-col justify-between rounded-3xl bg-[#e0e5ec] p-6 transition-all duration-300 hover:-translate-y-2"
      style={{
        boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)"
      }}
    >

      {/* Thumbnail Container */}
      <div 
        className="relative mb-5 h-48 w-full overflow-hidden rounded-2xl"
        style={{
             boxShadow: "inset 6px 6px 10px 0 rgba(163,177,198, 0.7), inset -6px -6px 10px 0 rgba(255,255,255, 0.8)"
        }}
      >
        <AdaptiveBadge 
          imageSrc={Cover_Image_link} 
          label={nationality[client_location][1]} 
          flag={nationality[client_location][0]}
        />
        {/* ----------------------------------------- */}

        {Cover_Image_link? (
          <Image 
            src={Cover_Image_link} 
            alt={""}
            fill
            className="object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">No Image</div>
        )}
      </div>

      {/* Header Info */}
      <div className="mb-4 flex items-center space-x-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e0e5ec]"
             style={{ boxShadow: "3px 3px 6px #b8b9be, -3px -3px 6px #ffffff" }}>
           {brand_logo? (
             <img src={brand_logo} alt="Brand" className="h-6 w-6 object-contain rounded-full" />
            ) : (
              <div className="h-6 w-6 object-contain rounded-full text-gray-400">No Image</div>
            )}
        </div>
        <div className="flex flex-col">
           <h3 className="line-clamp-1 text-lg font-bold text-gray-800 leading-tight">{brand_name}</h3>
           <span className="text-xs font-medium text-gray-500">{Founder_name}</span>
        </div>
      </div>

      {/* Results Grid - (Updated to Inset Style per advice) */}
      <div className="mb-6 grid grid-cols-3 gap-2">
        <StatBox label="Before" value={OLD_MRR} />
        <StatBox label="After" value={New_MRR} highlight />
        <StatBox label="Timeline" value={timeline} />
      </div>

      {/* Footer & Link Button */}
      <div className="flex items-center justify-between border-t border-gray-300/50 pt-4">
        <div className="flex items-center space-x-2">
           {Founder_image && (
             <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-[#e0e5ec] shadow-sm">
                <Image src={Founder_image} alt={Founder_name||"Founder"} fill className="object-cover" />
             </div>
           )}
           <span className="text-xs text-gray-500">Read success story</span>
        </div>

        {/* Link Button */}
        <Link 
          href={`/results/case-studies/${slug}`}
          className="rounded-full bg-[#e0e5ec] p-2 text-gray-600 transition-all active:scale-95 hover:text-blue-600"
          style={{
            boxShadow:  "5px 5px 10px #a3b1c6, -5px -5px 10px #ffffff"
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

function StatBox({ label, value, highlight = false }) {
  return (
    <div 
      className="flex flex-col items-center justify-center rounded-xl py-2 px-1 text-center"
      // Changed to INSET shadow for "Display" feel
      style={{ boxShadow: "inset 4px 4px 8px #bec3c9, inset -4px -4px 8px #ffffff" }}
    >
      <span className="text-[10px] font-bold uppercase tracking-wide text-gray-400">{label}</span>
      <span className={`text-xs font-bold ${highlight ? 'text-green-600' : 'text-gray-700'}`}>{value || '-'}</span>
    </div>
  );
}