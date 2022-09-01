import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello nextJS !</h1>
        <p>Je suis la page d'accueil</p>
        <Link href="/blog/article">
            <a>Blog</a>
        </Link>
    </div>
  )
}
