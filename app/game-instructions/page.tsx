import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.dis}>
       <h1 className={styles.h1}>
          テニスゲーム
       </h1>
       <h2 className={styles.h2}>
        遊び方
       </h2>
       <h3 className={styles.h3}>
        ボールが飛んできたら、Spaceキーを押してね<br/>
        ラケットを振ってボールを打つことができるよ
       </h3>
     <Image className={styles.tannisball}
      src="tennisball.svg"
      alt="tennisballの画像"
      width={200}
      height={150}
     />
      </div>
    </main>
  );
}
