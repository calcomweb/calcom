import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Login = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-4xl space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">Giriş</h1>
            <p className="text-muted-foreground">Mezun, öğrenci veya kulüp admin girişi yap.</p>
          </div>

          <div className="mx-auto max-w-2xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="alumni">
                <AccordionTrigger>Mezun Girişi</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <Input placeholder="Kullanıcı adı" />
                    <Input type="password" placeholder="Şifre" />
                    <Button className="w-full">Giriş Yap</Button>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="student">
                <AccordionTrigger>Öğrenci Girişi</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <Input placeholder="Kullanıcı adı" />
                    <Input type="password" placeholder="Şifre" />
                    <Button className="w-full">Giriş Yap</Button>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="club-admin">
                <AccordionTrigger>Kulüp Admin Girişi</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <Input placeholder="Kullanıcı adı" />
                    <Input type="password" placeholder="Şifre" />
                    <Button className="w-full">Giriş Yap</Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
