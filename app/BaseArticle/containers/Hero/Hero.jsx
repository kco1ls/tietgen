import Image from 'next/image';
import './Hero.css';

const base64Skeleton = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

const Hero = ({currentURL}) => {
  return (
    <div className="app__hero-doc">
      <Image blurDataURL={base64Skeleton} placeholder='blur' priority={true} quality={100} loading='eager' alt="thumbnail image" width={1024} height={348} className="app__hero-doc_bg" src={`/pages/${currentURL}/thumbnail.jpg`} />
    </div>
  );
}

export default Hero;
