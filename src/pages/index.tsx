import Logo from "@public/icons/logo.svg";
import React from "react";

export default function Home() {
  return (
    <main className="parallax">
      <section
        className="flex items-center justify-center m-0 bg-cover parallax-bg"
        style={{
          backgroundImage:
            "url(images/esteban-castle-FULkoZ989E4-unsplash.jpg)",
          backgroundPositionX: "-100px"
        }}
      >
        <div className="mx-auto">
          <Logo className="w-48 h-48 mx-auto" fill="white" />
          <h1 className="pb-4 text-4xl text-center text-white">
            Hack Your Shack
          </h1>
        </div>
      </section>
      <div className="bg-white parallax-fg">
        <section className="px-8 pt-2 pb-8">
          <h2 className="mt-0 mb-4 text-xl text-center">
            The Home for make-do Makers
          </h2>{" "}
          <p>
            Hack Your Shack ist eine Web-Plattform und App für Low-Tech-Lösungen
            rund um das Thema Wohnen und Nachbarschaft. Hier erfährst Du, wie Du
            eine Komposttoilette, einen Grauwasserturm, ein Spielgerät oder
            einen Plastikflaschenschneider baust und kannst selbst Deine eigenen
            Lösungen mit anderen Menschen auf der ganzen Welt teilen
          </p>
          <p>
            Schon jetzt gibt es auf Plattformen wie Youtube oder Instructable
            zahlreiche DIY-Videos und -Blogs rund um das Thema – aber sie sind
            alle auf die Ressourcen und Wohnstandards des globalen Nordens
            zugeschnitten. Gleichzeitig sind viele Low-Tech-Lösungen, die im
            Rahmen der Entwicklungszusammenarbeit, in Forschungsprojekten oder
            aber in den Communities selbst entwickelt wurden, nicht
            niedrigschwellig und gebündelt zugänglich.
          </p>
          <p>
            Bislang adressiert keine Plattform die Herausforderungen von
            Menschen, die in einem Umfeld mit wenig Infrastruktur leben und nur
            geringe materielle Ressourcen (Geld, Baumaterial, Werkzeug) zur
            Verfügung haben. Dabei wohnen heute alleine in informellen
            Siedlungen 900 Mio. Menschen, Tendenz stark steigend. Hack Your
            Shack will das ändern und bestehendes Wissen als Empowerment für
            alle zugänglich machen und erweitern.
          </p>
        </section>
        <section className="p-8 text-white bg-accent-1">
          <h3>Who we are?</h3>
          Hack Your Shack (Berlin)
        </section>
      </div>
    </main>
  );
}
