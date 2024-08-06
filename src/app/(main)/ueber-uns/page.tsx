import Image from "next/image";

function About() {
  return (
    <>
      <section className="section banner relative overflow-hidden before:z-10 after:z-10 lg:mb-0">
        <div className="container relative z-30">
          <div className="row items-center">
            <div>
              <h1
                data-aos="fade-up-sm"
                className="mb-6 text-[35px] lg:text-[48px]"
                >Über uns</h1>
              <p
                data-aos="fade-up-sm"
                data-aos-delay="150"
                className="mb-12 text-lg lg:col-6"
                >Die blitzblank Gebäudereinigung GmbH besteht seit über 35 Jahren und steht für Seriosität, Verlässlichkeit und Qualität. Unser Ziel ist es, durch unsere Dienstleistungen eine nachhaltige Kundenzufriedenheit zu garantieren.</p>
              <div>
                <Image
                  width={1920}
                  height={1024}
                  className="w-full h-full"
                  style={{filter: 'brightness(0.9)'}}
                  data-aos="fade-up-sm"
                  src="/images/about/Geschaeftsführung.jpg"
                  alt="Blitzblank Geschäftsführung"
                  />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white lg:px-24 py-16">
        <div className="container pb-12 lg:py-24 lg:p-8">
        <h3 className="text-center mb-4 lg:mb-16">Hier finden Sie uns</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5390.975347896828!2d9.734355953554395!3d47.49989313412293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b12854428ffd1%3A0x5410533825bbd9e1!2sblitzblank!5e0!3m2!1sde!2sch!4v1722866928880!5m2!1sde!2sch"
            width="100%"
            height="100%"
            className="lg:w-3/4 h-full min-h-[400px] lg:h-[500px] mx-auto"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

export default About;