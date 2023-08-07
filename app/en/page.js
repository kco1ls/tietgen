import Hero from '../containers/Hero/Hero';
import Loader from '../containers/Loader/Loader';
import Section1 from '../containers/Section1/Section1';
import Section2 from '../containers/Section2/Section2';
import Footer from '../containers/Footer/Footer';

const section1Items = [
  {
    title: "Want to become a resident?",
    href: "/en/apply-and-become-a-resident",
    desc: "Here's what you need to know",
  },
  {
    title: "Moving in?",
    href: "/en/apply-and-become-a-resident/moving-in",
    desc: "Know the practical info",
  },
  {
    title: "Visit Tietgenkollegiet",
    href: "/en/cortact/visit-the-residence-hall",
    desc: "Book a tour, or have a quick peek",
  },
]

const section2Items = [
  '"The future of student residency"',
  'Tietgenkollegiet (The Tietgen Residence Hall) in the Ørestad represents a future of student residences. A type of residence that supports and develops an attractive housing and student area with a so far unheard of focus on prioritising of the community in combination with the individual.',
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
