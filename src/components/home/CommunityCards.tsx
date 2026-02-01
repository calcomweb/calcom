import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, Users, GraduationCap, Briefcase, Heart, Gamepad2, Languages, Link2, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const communityItems = [
  /*
  {
    icon: Newspaper,
    title: "Haberler & Duyurular",
    description: "Okul ve topluluk haberleri, etkinlik duyuruları ve önemli gelişmeler.",
    href: "/news"
  },
  */
  {
    icon: Users,
    title: "Kulüpler",
    description: "Öğrenci kulüplerini keşfet, üyelik başvurusu yap ve etkinliklere katıl.",
    href: "/clubs",
    iconClass: "bg-alm-blue/15 text-alm-blue group-hover:bg-alm-blue"
  },
  {
    icon: Newspaper,
    title: "Duyurular",
    description: "Okul ve topluluk duyurularını takip et.",
    href: "/news",
    iconClass: "bg-alm-green/15 text-alm-green group-hover:bg-alm-green"
  },
  {
    icon: GraduationCap,
    title: "Öğrenciler",
    description: "Anonim öğrenci profilleri, mezuniyet yılı ve dönem bilgileri.",
    href: "/students",
    iconClass: "bg-alm-orange/15 text-alm-orange group-hover:bg-alm-orange"
  },
  {
    icon: Briefcase,
    title: "Mezunlar",
    description: "Mezun profilleri, iletişim ve destek olabilecekleri alanlar.",
    href: "/alumni",
    iconClass: "bg-alm-yellow/15 text-alm-yellow group-hover:bg-alm-yellow"
  },
  {
    icon: Heart,
    title: "Mezunlar Dayanışma",
    description: "Mezunlar arası dayanışma ve destek alanı.",
    href: "/mezun-dayanisma",
    iconClass: "bg-office4/15 text-office4 group-hover:bg-office4"
  },
  /*
  {
    icon: Heart,
    title: "CALMED Destek",
    description: "Mezunlardan öğrencilere mentorluk, kariyer desteği ve burs imkanları.",
    href: "#"
  },
  {
    icon: Gamepad2,
    title: "Oyunlar",
    description: "Topluluk oyunları, turnuvalar ve eğlenceli aktiviteler.",
    href: "#"
  },
  {
    icon: Languages,
    title: "Almanca",
    description: "Almanca öğrenme kaynakları, pratik grupları ve dil değişim programları.",
    href: "#"
  },
  {
    icon: Link2,
    title: "Yararlı Linkler",
    description: "Okul kaynakları, akademik materyaller ve faydalı web siteleri.",
    href: "#"
  },
  {
    icon: MessageSquare,
    title: "Forum",
    description: "Öğrenci ve mezunların buluştuğu tartışma platformu.",
    href: "#"
  }
  */
];

const CommunityCards = () => {
  return (
    <section id="community-areas" className="py-20 bg-black">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Topluluk Alanları
          </h2>
          <p className="text-muted-foreground text-sm text-right whitespace-nowrap truncate">
            CAL ailesinin tüm üyelerini bir araya getiren alanları keşfet.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {communityItems.map((item) => (
            <Link key={item.title} to={item.href} className="w-full">
              <Card
                className="group h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-white/20 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className={`mb-2 flex h-12 w-12 items-center justify-center rounded-lg transition-colors group-hover:text-black ${item.iconClass}`}>
                    <item.icon size={24} />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityCards;
