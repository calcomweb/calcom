const CommunityMessage = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <span className="text-3xl">🤝</span>
          </div>

          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Birlikte Daha Güçlüyüz
          </h2>

          <blockquote className="mb-8 text-lg text-muted-foreground leading-relaxed sm:text-xl">
            "Cağaloğlu Anadolu Lisesi'nin köklü geçmişi ve değerleri, bugünün öğrencileri ile 
            yarının mezunlarını birleştiriyor. Bu topluluk, yalnızca bir okul değil, 
            nesiller boyu süren bir aile bağının dijital yansımasıdır. 
            <span className="text-primary font-medium"> Geçmişten geleceğe, birlikte.</span>"
          </blockquote>

          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="h-px w-12 bg-border" />
            <span>CAL Community</span>
            <div className="h-px w-12 bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityMessage;
