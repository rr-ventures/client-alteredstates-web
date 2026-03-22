const team = [
  {
    name: 'Gene Kelly',
    role: 'Lead Facilitator',
    bio: 'Rebirthing breathwork facilitator with a background in health, fitness and wellness. Certified Holistic Health Coach, death doula, and firewalk facilitator. Uses neuroscience to help others heal, awaken, and unlock their potential.',
    image: null,
  },
  {
    name: 'Joshua Tree',
    role: 'Sound Journey Specialist',
    bio: 'Extraordinary multi-instrumentalist weaving instruments of breath, skin and wood. Performed at major festival stages nationally and abroad. Currently completing Masters in Mental Health (Art Therapy).',
    image: null,
  },
  {
    name: 'Clara Marri',
    role: 'Bodywork Specialist',
    bio: 'Holistic practitioner blending bodywork, breathwork, energy work and somatic practices. Her work bridges science and ancient, earth-rooted traditions.',
    image: null,
  },
];

export default function Team() {
  return (
    <section className="section-padding bg-warm-50">
      <div className="container-wide mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-sm">Meet The Team</span>
          <h2 className="heading-lg text-earth-900 mt-4">Your Guides</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-48 h-48 mx-auto bg-earth-200 rounded-full flex items-center justify-center mb-6">
                <span className="font-display text-4xl text-earth-400">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </span>
              </div>
              <h3 className="heading-sm text-earth-900">{member.name}</h3>
              <p className="text-earth-500 font-medium mt-1">{member.role}</p>
              <p className="body-md mt-4 text-earth-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
