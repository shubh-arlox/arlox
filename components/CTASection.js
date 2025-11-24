export default function CTASection() {
  return (
    <section className="w-full py-10 flex flex-col items-center">
      <h2 className="font-bold text-2xl text-center">
        Stop <span className="bg-gradient-to-r from-[#385179] to-[#7799c8] bg-clip-text text-transparent">Renting</span>.
        <br />
        <span className="bg-gradient-to-r from-[#385179] to-[#7799c8] bg-clip-text text-transparent">Start Owning</span>.
      </h2>
      <button className="button-neumorphic px-6 py-3 text-lg font-semibold mt-5 shadow-neumorphic transition hover:scale-105 hover:text-[#385179]">
        Start Scaling Today
      </button>
      <span className="mt-3 text-xs text-gray-600">View Case Studies</span>
    </section>
  );
}
