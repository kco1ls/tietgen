import { daPaths } from '../../data/data'
import BaseArticle from '../../BaseArticle/page'

export default function Page({ params }) {
  let slug = params.slug1 + "/" + params.slug2

  const matchingObject = daPaths.find((item) => item.url === slug);

  if (matchingObject) {
    return (
      <>
        <BaseArticle locale={"da"} data={matchingObject} />
      </>
    )
  } else {
    return <div>Not Found</div>
  }
}
