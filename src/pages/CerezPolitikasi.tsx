import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const CerezPolitikasi = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-3xl space-y-6">
          <h1 className="text-3xl font-bold tracking-tight">ÇEREZ POLİTİKASI</h1>
          <section className="space-y-3">
            <p className="text-muted-foreground">
              Platformda kullanıcı deneyimini geliştirmek, oturum yönetimini sağlamak, güvenliği
              artırmak ve analiz yapmak amacıyla çerezler kullanılmaktadır. Çerezler sayesinde site
              performansı izlenebilir ve kullanıcıların platformu daha verimli kullanması sağlanır.
              Kullanıcılar tarayıcı ayarları üzerinden çerezleri devre dışı bırakabilir; ancak bu
              durumda platformun bazı özellikleri tam olarak çalışmayabilir.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CerezPolitikasi;
