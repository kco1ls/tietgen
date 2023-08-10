import Hero from './containers/Hero/Hero';
import BasePage from './containers/BasePage/BasePage';

export default function BaseArticle({locale, data}) {
  let currentURL = "/panorama.webp";
  
  if (data) {
    if (data.url) {
        currentURL = data.url; 
    }
  }

  return (
    <div>
      <Hero currentURL={currentURL} />      
      <BasePage locale={locale} data={data} />
    </div>
  )
}
