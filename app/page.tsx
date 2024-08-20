'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        console.log("Enterされました");
      }
      if (event.key === "p") {
        console.log("pがおされました");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <main className={styles.main}>
    <div className={styles.decolationh1} role="presentation">
      テニスゲーム
    </div>
     <h1 className={styles.h1} onClick={()=>console.log('clickされました')}>
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
     <a href="/game-instructions">link</a>
    </main>
  );
}
