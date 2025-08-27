"use client";

import { useState } from "react";
import { fetchImage } from "./fetch-image";
import styles from "./page.module.css";

// コンポーネントの引数を定義する
type CatImageProps = {
    url: string;
};

// 画像を表示するコンポーネント
export function CatImage({ url }: CatImageProps) {
    const [imageUrl, setImageUrl] = useState(url);
    async function refreshImage() {
        setImageUrl(""); // 初期化しないと、再取得完了までに古い画像が表示され続け、ボタンをクリックしても見た目の変化がない。
        const image = await fetchImage();
        setImageUrl(image.url);
    }
    return (
        <div className={styles.page}>
            <button onClick={refreshImage} className="styles.button"> 
                他のにゃんこも見る
            </button>
            <div className={styles.frame}>
                {imageUrl && <img src={imageUrl} />}    {/*条件付きレンダリング*/}
            </div>
        </div>
    );
}