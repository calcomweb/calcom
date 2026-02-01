import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-3xl space-y-6">
          <h1 className="text-3xl font-bold tracking-tight">İletişim</h1>
          <p className="text-muted-foreground">
            İletişim detayları yakında burada paylaşılacaktır.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
