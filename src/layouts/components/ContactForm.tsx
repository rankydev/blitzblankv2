'use client'
 
import { useRouter } from 'next/navigation'
import { useEffect }  from 'react'

const ContactForm = () => {
  // const router = useRouter()

  // useEffect(() => {
  //     const kontaktElement = document.getElementById('kontakt');
  //     const url = window.location.href;

  //     if (url.includes('#kontakt') && kontaktElement) {
  //       kontaktElement.scrollIntoView({ behavior: 'smooth' });
  //     } else {
  //       router.push('/#kontakt');
  //     }
  // })
  return (
    <div id="kontakt" className="container-fluid bg-primary relative z-30 pt-24 lg:pt-[150px] pb-28 md:pb-40">
      <div className="row relative">
        <div className="mx-auto col-12 lg:col-10 xl:col-6">
          <div
            data-aos="fade-up-sm"
            className="shadow-default rounded-2xl bg-white px-8 py-10 sm:px-8 sm:py-14"
          >
            <form method="post" className="row gy-4 text-dark">
              <div className="sm:col-6">
                <label htmlFor="fname" className="form-label">
                  Vorname
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Geben Sie bitte Ihren Vornamen ein"
                  id="fname"
                  name="fname"
                  required
                />
              </div>
              <div className="sm:col-6">
                <label htmlFor="lname" className="form-label">
                  Nachname
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Geben Sie bitte Ihren Nachnamen ein"
                  id="lname"
                  name="lname"
                  required
                />
              </div>
              <div className="sm:col-6">
                <label htmlFor="email" className="form-label">
                  Email-Addresse
                </label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="Geben Sie bitte Ihre E-Mail Adresse ein"
                  id="email"
                  required
                  name="email"
                />
              </div>
              <div className="sm:col-6">
                <label htmlFor="phone" className="form-label">
                  Telefon
                </label>
                <input
                  type="phone"
                  className="form-input"
                  placeholder="Geben Sie bitte Ihre Telefonnummer ein"
                  id="phone"
                  name="phone"
                />
              </div>
              <div className="col-12">
                <label htmlFor="purpose" className="form-label">
                  Betreff
                </label>
                <select
                  id="purpose"
                  required
                  className="w-full rounded-lg border-border px-5 py-4 text-sm"
                >
                  <option value="0">Allgemein</option>
                  <option value="1">Angebot</option>
                </select>
              </div>
              <div className="col-12">
                <label htmlFor="message" className="form-label">
                  Nachricht
                </label>
                <textarea
                  name="message"
                  className="form-textarea"
                  placeholder="Geben Sie bitte eine Nachricht ein"
                  id="message"
                  cols={30}
                  required
                  rows={4}
                ></textarea>
              </div>
              <div className="col-12 text-right">
                <button type="submit" className="btn btn-primary">
                  Senden
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div
          data-aos="fade-right-sm"
          className="pointer-events-none absolute bottom-[-8%] left-[5%] -z-10 hidden w-fit lg:block"
        >
        </div>
        <div
          data-aos="fade-left-sm"
          className="pointer-events-none absolute right-[4%] top-[35%] -z-10 hidden w-fit lg:block"
        >
        </div>
        {/* <!-- End Bg Shape --> */}
      </div>
    </div>
  );
};

export default ContactForm;
