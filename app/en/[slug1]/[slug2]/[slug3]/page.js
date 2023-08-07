import { enPaths } from '../../../../data/data'
import BaseArticle from '../../../../BaseArticle/page'

export default function Page({ params }) {
  let slug = params.slug1 + "/" + params.slug2 + "/" + params.slug3

  console.log(slug)

  const matchingObject = enPaths.find((item) => item.url === slug);

  if (matchingObject) {
    return (
      <>
        <BaseArticle locale={"en"} data={matchingObject} />
      </>
    )
  } else {
    return <div>Not Found</div>
  }
}
