import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className={styles.main}>
      <h1>Home page</h1>
      
      <div className={styles.grid}>
      <div className={styles.card}>
        <h2>titleCard</h2>
        text
        <p>Card</p>
      </div>
      </div>
    </main>
    </>
  );
}
