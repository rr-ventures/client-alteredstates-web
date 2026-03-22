const steps = [
  {
    number: '01',
    title: 'Arrive & Ground',
    description:
      'We create a safe container. No experience necessary. Just an open mind.',
  },
  {
    number: '02',
    title: 'Breathe & Release',
    description:
      'Guided breathing activates your nervous system, allowing stored emotions and tension to move.',
  },
  {
    number: '03',
    title: 'Integrate & Transform',
    description:
      'Post-journey sharing and ongoing support help you apply insights to your daily life.',
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-warm-50">
      <div className="container-wide mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-sm">The Process</span>
          <h2 className="heading-lg text-earth-900 mt-4">What to Expect</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <span className="inline-block font-display text-6xl text-earth-200 font-medium">
                {step.number}
              </span>
              <h3 className="heading-sm text-earth-900 mt-4">{step.title}</h3>
              <p className="body-md mt-4">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
