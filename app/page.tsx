import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
    <div className={styles.decolationh1} role="presentation">
      テニスゲーム
    </div>
     <h1 className={styles.h1}>
      テニスゲーム
    </h1>
     <p className={styles.p}>
      ～Enterでスタート～
    </p>
     <Image className= {styles.hiyoko}
     　src="タイトルひよこ.svg" 
     　alt="タイトルのひよこ画像" 
     　width={200}
       height={150}
     />
    </main>
  );
}
