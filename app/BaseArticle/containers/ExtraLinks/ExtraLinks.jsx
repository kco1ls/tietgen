import Link from 'next/link';
import './ExtraLinks.css';

const ExtraLinks = ({currentURL, well, links}) => {

  // console.log(well);

  return (
    <div className="app__extralinks">
      <div className="app__extralinks-container">

        {links.map((item, index) => (
          <Link key={index} href={item.url} className={currentURL === item.url ? 'active' : ''}>
            {item.label}
          </Link>
        ))}

      </div>

      <div className="app__extralinks-mobile">
        <h2>Important Links</h2>

        <div className="app__extralinks-mobile-container">
          {links.map((item, index) => (
            <Link key={index} href={item.url} className={currentURL === item.url ? 'active' : ''}>
              {item.label}
            </Link>
          ))}
        </div>  

        <button className="app__extralinks-mobile-btn">EXPAND</button>
      </div>

      {well && well.map((html, index) => (
        <div
          key={index}
          className="well-container"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ))}

            
    </div>
  );
}

export default ExtraLinks;
