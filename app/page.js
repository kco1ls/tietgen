import Hero from './containers/Hero/Hero';
import Loader from './containers/Loader/Loader';
import Section1 from './containers/Section1/Section1';
import Section2 from './containers/Section2/Section2';
import Footer from './containers/Footer/Footer';

const section1Items = [
  {
    title: "Vil du være beboer?",
    href: "/ansog-og-bliv-beboer/",
    desc: "Her er alt, du behøver at vide",
  },
  {
    title: "Skal du snart flytte ind?",
    href: "/ansog-og-bliv-beboer/indflytning/",
    desc: "Kend den praktiske info.",
  },
  {
    title: "Besøg Tietgenkollegiet",
    href: "/kontakt-og-find-vej/besog-kollegiet/",
    desc: "Book en tur, eller kig hurtigt",
  },
]

const section2Items = [
  '"Fremtiden for studieboliger"',
  'Tietgenkollegiet i Ørestad repræsenterer fremtidens boligform for studerende. En boligform, der understøtter og udvikler et attraktivt bo- og studiemiljø med en hidtil uset prioritering af det fælles i kombination med det individuelle.',
]

export default function Home() {

  return (
    <main className="home-page">
      
      <Loader />
      <Hero />
      <Section1 items={section1Items} />
      <Section2 items={section2Items} />

      <div className="empty_state" />
    
    </main>
  )
}
