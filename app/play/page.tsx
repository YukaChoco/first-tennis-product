'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === " ") {
        console.log("spaceされました");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
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
