import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

const THEME = { brand: "#1f7a5b", brandDark: "#165c45", brandLight: "#e8f5ef", accent: "#f59e0b" };
const ASSETS = { hero: "/assets/hero.jpg", constance: "/assets/constance.jpg", marc: "/assets/marc.jpg" };

class ErrorBoundary extends React.Component {
  constructor(props){ super(props); this.state = { hasError:false, error:null }; }
  static getDerivedStateFromError(error){ return { hasError:true, error }; }
  componentDidCatch(error, info){ console.error('Preview error:', error, info); }
  render(){
    if(this.state.hasError){
      return (
        <div className="p-4 m-4 border rounded-xl bg-red-50 text-red-800">
          <h2 className="font-bold mb-1">Le preview a rencontré une erreur.</h2>
          <p className="text-sm">{String(this.state.error)}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

function ApplyTheme(){
  useEffect(()=>{
    const r = document.documentElement;
    r.style.setProperty("--brand", THEME.brand);
    r.style.setProperty("--brand-dark", THEME.brandDark);
    r.style.setProperty("--brand-light", THEME.brandLight);
    r.style.setProperty("--accent", THEME.accent);
    r.style.setProperty("--hero", `url(${ASSETS.hero})`);
    r.style.setProperty("--constance", `url(${ASSETS.constance})`);
    r.style.setProperty("--marc", `url(${ASSETS.marc})`);
  },[]);
  return null;
}

function Container({children}){ return <div className="px-6 md:px-12 lg:px-20">{children}</div>; }

function Header(){
  const base = "px-3 py-2 rounded hover:bg-green-100";
  const active = "text-green-700 font-semibold";
  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <Container>
        <div className="p-4 flex justify-center items-center relative">
          <NavLink
  to="/"
  className="font-extrabold text-2xl absolute left-4 md:left-8"
>
  CANINEO
</NavLink>
          <nav
  className="text-lg"
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
    marginLeft: "140px" // espace pour le logo à gauche
  }}
>
  <NavLink to="/" end className="px-3 py-2 rounded hover:bg-green-100">Accueil</NavLink>
  <NavLink to="/apropos" className="px-3 py-2 rounded hover:bg-green-100">À propos</NavLink>
  <NavLink to="/services" className="px-3 py-2 rounded hover:bg-green-100">Services</NavLink>
  <NavLink to="/parcours" className="px-3 py-2 rounded hover:bg-green-100">Parcours</NavLink>
  <NavLink to="/contact" className="px-3 py-2 rounded hover:bg-green-100">Contact</NavLink>
</nav>

        </div>
      </Container>
    </header>
  );
}

function Footer(){
  return (
    <footer className="bg-white border-t border-gray-300 py-8 mt-16 text-center text-gray-600">
      <div className="space-x-4 text-sm">
        <NavLink to="/mentions" className="underline">Mentions légales</NavLink>
        <span>•</span>
        <NavLink to="/contact" className="underline">Nous joindre</NavLink>
      </div>
      <p className="mt-2">© 2025 Canineo — Tous droits réservés.</p>
    </footer>
  );
}

function Accueil(){
  return (
    <main>
      <section className="py-16" style={{background:"var(--brand-light)"}}>
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-xs uppercase tracking-wide" style={{background:"var(--brand-light)", color:"var(--brand-dark)", padding:"4px 8px", borderRadius:"6px"}}>Éducateurs canins — Montréal & Rive-Sud</span>
              <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4">Renforcez le lien avec votre chien, une patte à la fois</h1>
              <p className="text-gray-700 mb-6">Programmes personnalisés pour chiots, chiens réactifs et chiens d’assistance. Méthodes éthiques, objectifs mesurables, résultats durables.</p>
              <div className="flex flex-wrap gap-3">
                <NavLink to="/services" className="px-6 py-3 rounded-xl font-semibold" style={{background:"var(--brand)", color:"white"}}>Voir les services</NavLink>
                <NavLink to="/contact" className="px-6 py-3 rounded-xl font-semibold" style={{border:"2px solid var(--brand)", color:"var(--brand-dark)"}}>Réserver une évaluation</NavLink>
              </div>
              <div className="flex gap-6 mt-6 text-sm text-gray-600">
                <span className="flex items-center gap-2"><div className="h-5 w-5 rounded-full bg-gray-300"/> Méthodes positives</span>
                <span className="flex items-center gap-2"><div className="h-5 w-5 rounded-full bg-gray-300"/> RDV à domicile</span>
              </div>
            </div>
            <div className="h-72 md:h-96 rounded-3xl grid place-items-center text-gray-600 w-full" style={{backgroundImage:"var(--hero)", backgroundSize:"cover", backgroundPosition:"center", backgroundColor:"#e5e7eb"}}>
              {/* /public/assets/hero.jpg */}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <h2 className="text-2xl font-bold mb-6">Explorez nos sections</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <NavLink to="/services" className="block bg-white border hover:shadow-lg transition rounded-2xl p-6 text-left">
              <h3 className="text-xl font-semibold mb-1">Services</h3>
              <p className="text-gray-600 mb-4">Chiots, réactivité, assistance et chiens de spécialité — découvrez nos forfaits et méthodes.</p>
              <span className="inline-flex items-center font-medium" style={{color:"var(--brand)"}}>En savoir plus →</span>
            </NavLink>
            <NavLink to="/parcours" className="block bg-white border hover:shadow-lg transition rounded-2xl p-6 text-left">
              <h3 className="text-xl font-semibold mb-1">Parcours</h3>
              <p className="text-gray-600 mb-4">De l’évaluation aux commandes avancées : notre approche en 5 étapes.</p>
              <span className="inline-flex items-center font-medium" style={{color:"var(--brand)"}}>En savoir plus →</span>
            </NavLink>
            <NavLink to="/apropos" className="block bg-white border hover:shadow-lg transition rounded-2xl p-6 text-left">
              <h3 className="text-xl font-semibold mb-1">À propos</h3>
              <p className="text-gray-600 mb-4">Rencontrez Constance Vale & Marc Kemp, co-fondateurs Canineo.</p>
              <span className="inline-flex items-center font-medium" style={{color:"var(--brand)"}}>En savoir plus →</span>
            </NavLink>
          </div>
        </Container>
      </section>

    {/* Programmes populaires */}
<section className="py-14 bg-white">
  <Container>
    <div className="flex items-end justify-between mb-6">
      <h2 className="text-2xl font-bold">Programmes populaires</h2>
      <NavLink to="/services" className="font-medium" style={{color:"var(--brand)"}}>Tous les services →</NavLink>
    </div>

    {/* Définis ici les 3 cartes avec le nom de fichier icône */}
    {(() => {
      const popular = [
        { t: "Éducation du chiot (8–16 semaines)", p: "À partir de 120$ / séance", icon: "icone-chiot.png", alt: "Icône chiot" },
        { t: "Réactivité & marche en laisse",       p: "Programme 4 séances",       icon: "icone-reactivite-marche.png", alt: "Icône réactivité/marche" },
        { t: "Chiens de spécialité et assistance",  p: "Bétail, renifleur, assistance, etc.", icon: "icone-specialite-assistance.png", alt: "Icône spécialité/assistance" },
      ];

      // Petit composant pour fallback si l'image est absente
      const Icon = ({src, alt}) => (
        <div className="h-16 w-16 rounded-full mb-3 grid place-items-center" style={{background:"var(--brand-light)"}}>
          <img
            src={`/assets/icons/${src}`}
            alt={alt}
            style={{height: "4rem", width: "4rem", objectFit: "contain"}}
            onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.parentElement.innerHTML = '<div style="height:2rem;width:2rem;background:#d1d5db;border-radius:.5rem"></div>'; }}
          />
        </div>
      );

      return (
        <div className="grid md:grid-cols-3 gap-6">
          {popular.map((s,i)=>(
            <div key={i} className="border rounded-2xl p-6" style={{background:"var(--brand-light)", borderColor:"#d1d5db"}}>
              <Icon src={s.icon} alt={s.alt} />
              <h3 className="font-semibold">{s.t}</h3>
              <p className="text-gray-600 text-sm mt-1">{s.p}</p>
              <NavLink to="/services" className="inline-block mt-4 font-medium" style={{color:"var(--brand)"}}>Détails →</NavLink>
            </div>
          ))}
        </div>
      );
    })()}
  </Container>
</section>

      <section className="py-14" style={{background:"var(--brand-light)"}}>
        <Container>
          <h2 className="text-2xl font-bold mb-6">Pourquoi choisir Canineo</h2>
<div className="grid md:grid-cols-4 gap-6">
  {[
    { title: "Approche scientifique", icon: "icone-approche-scientifique.png", text: "Nos méthodes reposent sur la science du comportement animal et le renforcement positif." },
    { title: "Suivi structuré", icon: "icone-suivi-structure.png", text: "Chaque client reçoit un plan d’entraînement clair, des exercices hebdomadaires et un suivi documenté." },
    { title: "Objectifs clairs", icon: "icone-objectifs-clairs.png", text: "Nous établissons ensemble des objectifs mesurables et atteignables adaptés à chaque chien." },
    { title: "Résultats durables", icon: "icone-resultats-durables.png", text: "L’apprentissage est ancré dans la cohérence familiale et des routines stables pour des résultats à long terme." },
  ].map((f, i) => (
    <div key={i} className="bg-white border rounded-2xl p-6">
      <div className="h-12 w-12 rounded mb-3 grid place-items-center" style={{background:"var(--brand-light)"}}>
        <img
          src={`/assets/icons/${f.icon}`}          // ← adapte ce chemin si besoin
          alt={f.title}
          style={{ height: "4rem", width: "4rem", objectFit: "contain" }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement.innerHTML =
              '<div style="height:2rem;width:2rem;background:#d1d5db;border-radius:.5rem"></div>';
          }}
        />
      </div>
      <h3 className="font-semibold mb-1">{f.title}</h3>
      <p className="text-sm text-gray-600">{f.text}</p>
    </div>
  ))}
</div>

        </Container>
      </section>

      <section className="py-14 bg-white">
        <Container>
          <div className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between" style={{background:"var(--brand)", color:"white"}}>
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">Prêt à commencer ?</h3>
              <p className="opacity-90">Réservez une évaluation et recevez un plan clair dès la première rencontre.</p>
            </div>
            <NavLink to="/contact" className="px-6 py-3 rounded-xl font-semibold" style={{background:"white", color:"var(--brand)"}}>Réserver maintenant</NavLink>
          </div>
        </Container>
      </section>
    </main>
  );
}

function Apropos() {
  return (
    <main className="py-12">
      <Container>
        <h1 className="text-3xl font-bold mb-10 text-center">À propos des co-fondateurs</h1>

        {/* 1 colonne en mobile, 2 colonnes dès md */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* Constance */}
          <article className="grid grid-rows-[auto_auto_auto_1fr] justify-items-center text-center bg-white p-6 rounded-2xl shadow-sm border gap-3">
            {/* 1) Photo */}
            <div className="w-48 h-48 rounded-2xl overflow-hidden">
              <img
                src={ASSETS.constance}
                alt="Constance Vale"
                className="w-full h-full object-cover"
              />
            </div>
            {/* 2) Nom */}
            <h2 className="text-2xl font-semibold">Constance Vale</h2>
            {/* 3) Titre */}
            <p className="text-gray-700 font-medium">Co-fondatrice & Éducatrice canine</p>
            {/* 4) Description */}
            <p className="text-gray-700 text-sm leading-relaxed max-w-prose">
              Constance possède plus de huit ans d’expérience auprès de chiens de toutes races et tempéraments.
              Passionnée par la compréhension du comportement animal, elle se spécialise dans l’éducation des chiots,
              la gestion de la réactivité et l’accompagnement des chiens d’assistance. Son approche repose sur la science
              du comportement, le respect et la cohérence familiale.
            </p>
          </article>

          {/* Marc */}
          <article className="grid grid-rows-[auto_auto_auto_1fr] justify-items-center text-center bg-white p-6 rounded-2xl shadow-sm border gap-3">
            {/* 1) Photo */}
            <div className="w-48 h-48 rounded-2xl overflow-hidden">
              <img
                src={ASSETS.marc}
                alt="Marc Kemp"
                className="w-full h-full object-cover"
              />
            </div>
            {/* 2) Nom */}
            <h2 className="text-2xl font-semibold">Marc Kemp</h2>
            {/* 3) Titre */}
            <p className="text-gray-700 font-medium">Co-fondateur & Dresseur spécialisé</p>
            {/* 4) Description */}
            <p className="text-gray-700 text-sm leading-relaxed max-w-prose">
              Marc est reconnu pour son expertise dans le dressage de chiens d’assistance et de chiens de bétail.
              Il se concentre sur la mise en place de routines adaptées au rôle du chien, que ce soit pour le travail
              ou l’aide au quotidien. Son approche repose sur la confiance mutuelle et la progression positive,
              assurant un apprentissage durable et respectueux pour le chien comme pour son maître.
            </p>
          </article>

        </div>
      </Container>
    </main>
  );
}


function Services(){
  const items = [
    { title: "Éducation du chiot", desc: "Propreté, socialisation, rappel, bases d’obéissance.", price: "À partir de 120$ / séance", icon: "icone-chiot.png" },
    { title: "Réactivité & marche en laisse", desc: "Désensibilisation, gestion des déclencheurs, routines calmes.", price: "Programme 4 séances", icon: "icone-reactivite-marche.png" },
    { title: "Assistance", desc: "Accompagnement en obéissance et comportements liés au rôle d’assistance.", price: "Plan personnalisé — Voir l’encadré en bas de page pour l’accessibilité au programme.", icon: "icone-assistance.png" },
    { title: "Chiens de spécialité", desc: "Chien de bétail, chien renifleur, chien de chasse, etc.", price: "Sur évaluation", icon: "icone-specialites.png" },
  ];

  const Icon = ({file, alt}) => (
    <div className="h-16 w-16 rounded mb-3 grid place-items-center" style={{background:"var(--brand-light)"}}>
      <img
        src={`/assets/icons/${file}`}    // dossier: public/assets/icons/<fichier>
        alt={alt}
        loading="lazy"
        style={{ height: "4rem", width: "4rem", objectFit: "contain" }}
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.parentElement.innerHTML =
            '<div style="height:4rem;width:4rem;background:#d1d5db;border-radius:.5rem"></div>';
        }}
      />
    </div>
  );

  return (
    <main className="py-12">
      <Container>
        <h1 className="text-3xl font-bold mb-10 text-center">Nos services</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s,i)=>(
            <div key={i} className="bg-white border rounded-2xl p-6">
              <Icon file={s.icon} alt={s.title} />
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
              {s.price && <p className="mt-3 text-gray-900 font-medium">{s.price}</p>}
              <NavLink to="/contact" className="inline-block mt-3 font-semibold" style={{color:"var(--brand)"}}>Réserver →</NavLink>
            </div>
          ))}
        </div>

        <div className="border rounded-2xl p-6 mt-10" style={{background:"var(--brand-light)", borderColor:"#d1d5db"}}>
          <h2 className="font-semibold mb-1">Forfaits sur mesure</h2>
          <p className="text-gray-700 text-sm">Après l’évaluation, nous proposons un parcours adapté à votre binôme, avec objectifs clairs et indicateurs de progression.</p>
        </div>

        <div className="bg-white border rounded-2xl p-6 mt-6">
          <h2 className="font-semibold mb-1">Programme Assistance — Informations importantes</h2>
          <ul className="text-sm text-gray-700 list-disc list-inside">
            <li>Attestation médicale obligatoire</li>
            <li>Chiens de 5 ans et moins seulement</li>
            <li>L’acceptation au programme est soumise à de nombreuses conditions</li>
            <li>Tous les chiens ne sont pas admis</li>
            <li>L’entraînement peut prendre jusqu’à 6 mois selon le chien, avec des rencontres hebdomadaires.</li>
            <li>La réussite au programme ne peut être garantie, notamment si votre chien ne peut réussir le Test d’Accès Public.</li>
          </ul>
        </div>
      </Container>
    </main>
  );
}

function Parcours(){
  const steps = [
    {t:"Évaluation", d:"Analyse du comportement, contexte familial, objectifs et priorités."},
    {t:"Plan", d:"Programme personnalisé avec exercices hebdomadaires et matériel pédagogique."},
    {t:"Séances", d:"Mises en situation, marche, rappels, gestion des déclencheurs."},
    {t:"Suivi", d:"Ajustements, journal d’entraînement, consolidation des acquis."},
    {t:"Commandes avancées & spécialités", d:"Approfondissement : obéissance avancée, spécialités (bétail, renifleur, etc.)."},
  ];
  return (
    <main className="py-12">
      <Container>
        <h1 className="text-3xl font-bold mb-10 text-center">Notre parcours</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s,i)=>(
            <div key={i} className="bg-white border rounded-2xl p-6">
              <div className="font-extrabold text-2xl" style={{color:"var(--brand)"}}>{i+1}</div>
              <h3 className="font-semibold mt-1">{s.t}</h3>
              <p className="text-sm text-gray-600 mt-1">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="text-white rounded-2xl p-6 mt-10 flex items-center justify-between" style={{background:"var(--brand)"}}>
          <p className="font-medium">Vous voulez démarrer par une évaluation ?</p>
          <NavLink to="/contact" className="px-5 py-2 rounded-xl font-semibold" style={{background:"white", color:"var(--brand)"}}>Réserver</NavLink>
        </div>
      </Container>
    </main>
  );
}

function Contact(){
  return (
    <main className="py-12">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8">
          <form name="contact" method="POST" data-netlify="true" className="bg-white p-6 rounded-2xl border grid gap-3">
            <input type="hidden" name="form-name" value="contact" />
            <p className="text-sm text-gray-700 mb-2">Merci d’indiquer clairement les besoins de votre chien et le service que vous cherchez. Vous pouvez aussi nous envoyer photos et vidéos à notre adresse courriel. Nous vous contacterons par la suite.</p>
            <input name="nom" placeholder="Nom complet" className="border p-2 rounded" />
            <input name="telephone" placeholder="Numéro de téléphone" className="border p-2 rounded" />
            <input name="email" placeholder="Email" className="border p-2 rounded" />
            <textarea name="message" placeholder="Message" className="border p-2 rounded h-28" />
            <button className="px-4 py-2 rounded" style={{background:"var(--brand)", color:"white"}}>Envoyer</button>
          </form>
          <div className="bg-white p-6 rounded-2xl border">
            <h2 className="font-semibold mb-2">Informations</h2>
            <ul className="text-gray-700 space-y-1">
              <li><strong>Email :</strong> info@canineo.ca</li>
              <li><strong>Zones :</strong> Montréal & Rive-Sud</li>
            </ul>
            <div className="h-56 rounded-xl mt-4 overflow-hidden">
  <img
    src="/assets/carte-zones.jpg"
    alt="Zone d’intervention — Montréal & Rive-Sud"
    className="w-full h-full object-cover"
    loading="lazy"
    onError={(e) => { e.currentTarget.style.display = "none"; }}
  />
</div>

          </div>
        </div>
      </Container>
    </main>
  );
}

export default function App(){
  return (
    <ErrorBoundary>
      <Router>
        <ApplyTheme />
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/services" element={<Services />} />
          <Route path="/parcours" element={<Parcours />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
}
