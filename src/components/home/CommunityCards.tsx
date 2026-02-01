import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, Users, Heart, Gamepad2, Languages, Link2, MessageSquare } from "lucide-react";
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
    href: "/clubs"
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
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Topluluk Alanları
          </h2>
          <p className="text-muted-foreground text-lg">
            CAL ailesinin tüm üyelerini bir araya getiren alanları keşfet.
          </p>
        </div>

        <div className="flex justify-center">
          {communityItems.map((item) => (
            <Link key={item.title} to={item.href} className="w-[350px]">
              <Card
                className="group h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
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
