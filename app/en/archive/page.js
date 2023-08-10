import React from 'react';
import { enPaths } from '../../data/data'
import Link from 'next/link';

import './archive.css';

function parseDate(dateStr) {
  const months = {
    'January': 0,
    'February': 1,
    'March': 2,
    'April': 3,
    'May': 4,
    'June': 5,
    'July': 6,
    'August': 7,
    'September': 8,
    'October': 9,
    'November': 10,
    'December': 11
  };

  const [day, month, year] = dateStr.split(/\.?\s+/);
  return new Date(year, months[month.toLowerCase()], day);
}

const Arkiv = () => {
  let articles = [];

  for (let i = 0; i < enPaths.length; i++) {
    let path = enPaths[i];

    let isNews = false;
    let links = path.links;
    for (let j = 0; j < links.length; j++) {
      let link = links[j];

      if (link.label.includes('Archive')) {
        isNews = true;
        let text = path.text;

        let date = text.split('<time>')[1].split('</time>')[0];
        let title = text.split('<h1')[1].split('>')[1].split('</h1')[0];

        articles.push({
          date: date,
          title: title,
          path: '/en/' + path.url,
        });

        break
      }
    }
  }

  articles = articles.reduce((uniqueArticles, currentArticle) => {
    if (uniqueArticles.findIndex(article => article.title === currentArticle.title) === -1) {
      uniqueArticles.push(currentArticle);
    }
    return uniqueArticles;
  }, []);

  articles.sort((a, b) => parseDate(b.date) - parseDate(a.date));
  
  return (
    <div className="app__arkiv">

      <h1 className="app__arkiv-title">Nyheder</h1>

      {articles.map(article => (
        <Link href={article.path} key={article.path} className="app__arkiv-item">
          <h1>{article.title}</h1>
          <div className="app__arkiv-item__content">
            <h2>{article.date}</h2>
          </div>
        </Link>
      ))}
    

    </div>
  )
};

export default Arkiv;
