import Hero from '../containers/Hero/Hero';
import Loader from '../containers/Loader/Loader';
import Section1 from '../containers/Section1/Section1';
import Section2 from '../containers/Section2/Section2';
import Footer from '../containers/Footer/Footer';
import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size';
import Marquee from '../BaseArticle/containers/Marquee/Marquee';

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
    href: "/en/contact/visit-the-residence-hall",
    desc: "Book a tour, or have a peek",
  },
]

const section2Items = [
  '"The future of student residency"',
  'Tietgenkollegiet (The Tietgen Residence Hall) in the Ørestad represents a future of student residences. A type of residence that supports and develops an attractive housing and student area with a so far unheard of focus on prioritising of the community in combination with the individual.',
]

const marqueeURLs = [
  "/building/1",
  "/building/2",
  "/building/3",
  // "/homely/1/",
  // "/homely/2/",
  // "/homely/3/",
  // "/homely/4/",
]

export default function Home() {
  let marqueeList = [];

  let publicDir = process.cwd() + '/public';

  for (let i = 0; i < marqueeURLs.length; i++) {
    let currentURL = path.join(publicDir, marqueeURLs[i]);

    const imageFiles = fs.readdirSync(currentURL).filter(file => file.endsWith('.webp') && !isNaN(file.split('.')[0]));

    const resizedWidths = [];

    imageFiles.forEach((file) => {
      const imagePath = path.join(currentURL, file);
      if (fs.existsSync(imagePath)) {
        const dimensions = sizeOf(imagePath);
        const aspectRatio = dimensions.width / dimensions.height;
        const resizedWidth = aspectRatio * 768;

        const fileNumber = parseInt(file.split('.')[0], 10);
        resizedWidths[fileNumber - 1] = resizedWidth;
      }
    });

    let marquee = null;

    if (resizedWidths.length > 0) {
      marquee = <Marquee range={resizedWidths.length} folder={currentURL} imageSize={resizedWidths} />;
      marqueeList.push(marquee);
    }
  }

  return (
    <main className="home-page">
      
      <Loader />
      <Hero />
      <Section1 items={section1Items} />
      <Section2 items={section2Items} />

      <div className="marquee">
        {marqueeList}
      </div>  

      <div className="empty_state" />
    
    </main>
  )
}
