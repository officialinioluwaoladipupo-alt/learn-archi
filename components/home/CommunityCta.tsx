export default function CommunityCta() {
  return (
    <section className="bg-archi-pink py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="w-full md:w-auto">
          <a
            href="#"
            className="btn-terracotta inline-block w-full md:w-auto text-center"
          >
            JOIN HERE
          </a>
        </div>

        <div className="w-full md:w-auto text-right">
          <h2 className="text-d1 font-display font-extrabold text-archi-black uppercase text-right">
            <span className="block">JOIN THE</span>
            <span className="block">COMMUNITY</span>
            <span className="block">TODAY</span>
          </h2>
        </div>
      </div>
    </section>
  );
}