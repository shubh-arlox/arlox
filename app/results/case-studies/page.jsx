import { db } from '@/lib/googleSheets';
import CaseStudyCard from '@/components/CaseStudyCard';

export default async function CaseStudiesPage() {
  const caseStudies = await db.getAll('case-studies');

  return (
    <main className="min-h-screen bg-[#e0e5ec] px-6 py-20 md:px-12 relative">

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.s_no} data={study} />
          ))}
        </div>
      </div>
    </main>
  );
}