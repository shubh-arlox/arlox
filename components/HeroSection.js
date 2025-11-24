import Image from "next/image";
export default function HeroSection() {
  return (
    <section className="w-full py-8 flex flex-col items-center">
      <h1 className="text-center font-bold text-2xl md:text-4xl mb-2">
        <span className="bg-gradient-to-r from-[#385179] to-[#7799c8] bg-clip-text text-transparent">
          Your AI-Powered Scaling Partners
        </span>
      </h1>
      <Image src="/Roman_Hero.png" width={360} height={240} alt="Hero" className="rounded-2xl glass my-5 mx-auto" />
      <button className="button-neumorphic px-6 py-2 mt-2 mb-2 text-lg font-semibold shadow-neumorphic transition hover:scale-105 hover:text-[#385179]">
        Start Scaling Today
      </button>
    </section>
  );
}
