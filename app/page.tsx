import { connection } from "next/server";
import { fetchImage } from "./fetch-image"

export default async function Home() {
  await connection(); // ビルド時にfetchImageの結果が固定されないようにする
  const image = await fetchImage(); // APIから画像を取得
  console.log("Home: 画像情報を取得しました", image);
  return <div>猫画像予定地</div>;
}