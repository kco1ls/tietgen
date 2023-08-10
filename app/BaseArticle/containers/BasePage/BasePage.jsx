import React from 'react';
import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size';
import ExtraLinks from '../ExtraLinks/ExtraLinks';
import Content from '../Content/Content';
import Marquee from '../Marquee/Marquee';

import './BasePage.css';

const BasePage = ({locale, data}) => {
  let currentURLorigin = "/en/";
  let dataLinks = [
    {
      "label": "Home",
      "url": "/"
    },
  ]
  let dataWell = null
  let dataText = "<h1>Page not found</h1>"
  let folderURL = "/";

  if (data) {
    if (data.text) {
      dataText = data.text;
    }

    if (data.url) {
      folderURL = data.url; 
      if (locale === "en") {
        currentURLorigin = "/" + locale + "/" + data.url + "/";
      } else {
        currentURLorigin = "/" + data.url + "/";
      }
    }

    if (data.links) {
      dataLinks = data.links;
    }
    
    if (data.well) {
      dataWell = data.well;
    }
  }

  let currentURL
  if (currentURLorigin.includes("/en/")) {
      let tempURL = currentURLorigin.replace("/en/", "/"); 
      currentURL = path.join(process.cwd(), 'public/pages', tempURL);
  } else {
      currentURL = path.join(process.cwd(), 'public/pages', currentURLorigin);
  }
  const imageFiles = fs.readdirSync(currentURL).filter(file => file.endsWith('.webp') && !isNaN(file.split('.')[0]));

  const resizedWidths = [];

  imageFiles.forEach((file) => {
    const imagePath = path.join(currentURL, file);
    if (fs.existsSync(imagePath)) {
      const dimensions = sizeOf(imagePath);
      const aspectRatio = dimensions.width / dimensions.height;
      const resizedWidth = aspectRatio * 768;

      // Determine the index based on the file name, and place the resized width at that index
      const fileNumber = parseInt(file.split('.')[0], 10);
      resizedWidths[fileNumber - 1] = resizedWidth;
      // console.log("File number: " + fileNumber + " Resized width: " + resizedWidth);
    }
  });

  let marquee = null;

  if (resizedWidths.length > 0) {
    marquee = <Marquee range={resizedWidths.length} folder={currentURL} imageSize={resizedWidths} />;
  }

  return (
    <div className="app__basepage">
      {marquee}
      <div className="text-holder">
        <ExtraLinks currentURL={currentURLorigin} well={dataWell} links={dataLinks} />
        <Content currentURL={folderURL} data={dataText} />
      </div>
    </div>
  );
}

export default BasePage;
