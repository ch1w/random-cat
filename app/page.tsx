import { CatImage } from "./cat-image";
import { fetchImage } from "./fetch-image"

export default async function Home() {
  const image = await fetchImage(); // APIから画像を取得
  console.log("Home: 画像情報を取得しました", image);
  return <CatImage url={image.url}/>;
}