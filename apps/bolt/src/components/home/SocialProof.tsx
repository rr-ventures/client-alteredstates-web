import { Users, Star, ThumbsUp, MapPin } from 'lucide-react';

const stats = [
  { icon: Users, label: '500+ transformations' },
  { icon: ThumbsUp, label: '100% recommend on Facebook' },
  { icon: Star, label: '284 five-star reviews' },
  { icon: MapPin, label: 'Serving Sydney, Newcastle, Central Coast & beyond' },
];

export default function SocialProof() {
  return (
    <section className="bg-earth-100 border-y border-earth-200">
      <div className="container-wide mx-auto px-6 md:px-12 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <stat.icon className="text-earth-600 flex-shrink-0" size={20} />
              <span className="text-sm md:text-base text-earth-700 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
