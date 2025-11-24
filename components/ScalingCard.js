export default function ScalingCard() {
  return (
    <section className="w-full flex flex-col items-center mb-8">
      <h2 className="font-bold text-lg md:text-xl mt-4">
        <span className="text-[#385179]">Scaling</span> Is Simple, <span className="underline">Scientific</span>,
        and Predictable.
      </h2>
      <div className="glass shadow-neumorphic rounded-xl bg-white bg-opacity-60 max-w-md w-full mt-3 p-4">
        {/* Replace with actual widget or video/image as per Figma */}
        <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
          <div className="button-neumorphic w-12 h-12 rounded-full flex items-center justify-center">
            <svg width="24" height="24" fill="none">
              <polygon points="6,4 20,12 6,20" fill="#385179"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
