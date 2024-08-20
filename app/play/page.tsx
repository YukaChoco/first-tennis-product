'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [flag, setFlag] = useState(false);
  console.log(flag);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === " ") {
        console.log("spaceされました");
        setFlag(true);
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
     　src={flag===true ? "打った後のひよこ.svg" :"打つ前のひよこ.svg"}
     　alt="打つ前のひよこ画像" 
     　width={200}
       height={150}
     /></div>
     <div className={styles.target2}></div>
     </div>
    </main>
      );
}
