import { Heart, Brain, Users, Sparkles } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Safety First',
    description: 'Every experience is held in a container of care',
  },
  {
    icon: Brain,
    title: 'Science-Backed',
    description: 'Ancient wisdom meets modern neuroscience',
  },
  {
    icon: Sparkles,
    title: 'Integration Matters',
    description: 'Real transformation happens after the session',
  },
  {
    icon: Users,
    title: 'Community',
    description: "We're all on this journey together",
  },
];

const team = [
  {
    name: 'Gene Kelly',
    role: 'Lead Facilitator',
    bio: 'Gene is a rebirthing breathwork facilitator with extensive background in health, fitness and wellness. As a Certified Holistic Health Coach, death doula, and firewalk facilitator, Gene brings a unique blend of modern science and ancient wisdom to his work. His approach uses neuroscience to help others heal, awaken, and unlock their potential. Gene\'s journey into breathwork came after experiencing his own profound transformation, and he has since dedicated himself to creating safe, accessible pathways for others to access these powerful states.',
  },
  {
    name: 'Joshua Tree',
    role: 'Sound Journey Specialist',
    bio: 'Joshua is an extraordinary multi-instrumentalist who weaves instruments of breath, skin and wood into transcendent soundscapes. Having performed at major festival stages nationally and abroad, Joshua brings a rare combination of musical mastery and therapeutic awareness to every session. Currently completing his Masters in Mental Health (Art Therapy), Joshua\'s sound journeys are carefully crafted to support and enhance the breathwork experience.',
  },
  {
    name: 'Clara Marri',
    role: 'Bodywork Specialist',
    bio: 'Clara is a holistic practitioner who masterfully blends bodywork, breathwork, energy work and somatic practices. Her work bridges science and ancient, earth-rooted traditions, offering participants deep physical release and integration. Clara\'s gentle yet powerful approach helps participants move through stuck energy and access deeper states of relaxation and healing.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-earth-100">
        <div className="container-wide mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="label-sm">About Us</span>
            <h1 className="heading-xl text-earth-900 mt-4">Our Mission</h1>
            <p className="body-lg mt-6">
              We bring reverence to altered states of consciousness as a tool for
              profound personal healing and transformation. Through neuroscience-backed
              breathwork and sacred ceremony, we create safe, supportive spaces for
              inner exploration and evolution.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-warm-50">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="label-sm">Our Journey</span>
              <h2 className="heading-lg text-earth-900 mt-4">Our Story</h2>
              <p className="body-lg mt-6">
                Altered States Experience was born from Gene Kelly's personal journey
                with breathwork and expanded consciousness. After experiencing his own
                profound transformations, Gene dedicated himself to creating
                accessible, safe pathways for others to access these powerful states —
                without substances.
              </p>
              <p className="body-md mt-6">
                What began as small gatherings has grown into a movement serving
                hundreds of Australians each year across Sydney, Newcastle, Central
                Coast, Gold Coast, and Melbourne. Our retreat program offers the
                deepest level of transformation in a private sanctuary setting.
              </p>
            </div>

            <div className="relative">
              <img
                src="/611185010_17992576616911758_6359808428520505471_n.jpg"
                alt="Breathwork ceremony"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-earth-900/10" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-earth-100">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="label-sm">Our Method</span>
            <h2 className="heading-lg text-earth-900 mt-4">Our Approach</h2>
            <p className="body-lg mt-6">Neuroscience meets ceremony</p>
            <p className="body-md mt-6">
              We combine the latest research on the nervous system with time-tested
              practices from ancient traditions. Every session is carefully designed
              to be both transformational and safe. Our facilitators are trained in
              trauma-informed practices and create containers where deep healing can
              occur naturally.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-warm-50">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="label-sm">What We Stand For</span>
            <h2 className="heading-lg text-earth-900 mt-4">Our Values</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 mx-auto bg-earth-200 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="text-earth-600" size={28} />
                </div>
                <h3 className="heading-sm text-earth-900">{value.title}</h3>
                <p className="body-md mt-2">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-earth-100">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="label-sm">Meet The Team</span>
            <h2 className="heading-lg text-earth-900 mt-4">The Team</h2>
          </div>

          <div className="space-y-16">
            {team.map((member, index) => (
              <div
                key={member.name}
                className={`grid lg:grid-cols-3 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:col-span-1">
                  <div className="w-64 h-64 mx-auto bg-earth-200 rounded-full flex items-center justify-center">
                    <span className="font-display text-5xl text-earth-400">
                      {member.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:order-first' : ''}`}>
                  <h3 className="heading-md text-earth-900">{member.name}</h3>
                  <p className="text-earth-500 font-medium mt-1">{member.role}</p>
                  <p className="body-md mt-6">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
