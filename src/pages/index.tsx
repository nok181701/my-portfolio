import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { Header } from "@/components/Header/heder";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <Header title={"My-Portfolio"} />
        <Footer />
      </main>
    </>
  );
}
