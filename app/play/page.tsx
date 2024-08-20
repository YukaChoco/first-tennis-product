import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
     <div className={styles.container}>
     <div className={styles.target}><Image className={styles.hiyoko}
     　src="打つ前のひよこ.svg" 
     　alt="打つ前のひよこ画像" 
     　width={200}
       height={150}
     /></div>
     <div className={styles.target2}></div>
     </div>
    </main>
      );
}
