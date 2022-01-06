import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Hello</h1>
    </div>
  )
}
