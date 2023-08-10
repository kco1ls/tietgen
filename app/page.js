import Hero from './containers/Hero/Hero';
import Loader from './containers/Loader/Loader';
import Section1 from './containers/Section1/Section1';
import Section2 from './containers/Section2/Section2';
import Footer from './containers/Footer/Footer';
import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size';
import Marquee from './BaseArticle/containers/Marquee/Marquee';

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

const marqueeURLs = [
  "/building/1",
  "/building/2",
  "/building/3",
]

// const marqueeURLs2 = [
//   "/homely/1",
//   "/homely/2",
//   "/homely/3",
//   "/homely/4",
// ]

function getMarqueeList(publicDir, marqueeURLs) {
  let marqueeList = [];

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

  return marqueeList;
}

export default function Home() {

  let publicDir = process.cwd() + '/public';

  let marqueeList = getMarqueeList(publicDir, marqueeURLs);

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
