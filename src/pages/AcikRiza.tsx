import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const AcikRiza = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-3xl space-y-6">
          <h1 className="text-3xl font-bold tracking-tight">AÇIK RIZA METNİ</h1>
          <section className="space-y-3">
            <p className="text-muted-foreground">
              Kullanıcı, bu web sayfasına üye olurken CAL Community platformu kapsamında kişisel
              verilerinin işlenmesine, saklanmasına ve KVKK Aydınlatma Metni doğrultusunda
              kullanılmasına açık rıza verdiğini kabul eder.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AcikRiza;
