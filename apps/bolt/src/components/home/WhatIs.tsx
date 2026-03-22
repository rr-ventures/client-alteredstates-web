export default function WhatIs() {
  return (
    <section className="section-padding bg-warm-50">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="label-sm">What Is Altered States</span>
            <h2 className="heading-lg text-earth-900 mt-4">
              A Safe, Supportive Space for Inner Exploration
            </h2>
            <p className="body-lg mt-6">
              Altered States Experience uses neuroscience-backed breathwork techniques to guide you into expanded states of consciousness. Our facilitated journeys combine ancient breathing practices with live music to help you release emotional blocks, access deeper clarity, and reconnect with your authentic self — all without substances.
            </p>
          </div>
          <div className="relative">
            <img
              src="/612140471_17992465088911758_4226749362652590923_n.jpg"
              alt="Breathwork ceremony in progress"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-earth-900/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
