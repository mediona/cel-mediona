import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <img src="/logo.png" alt="logo" className="image-center"></img>
      <footer className={styles.footer}>
        <a href="https://comunidadesenergeticas.org/" target="_blank">Altres comunitats</a>
      </footer>
    </>
  )
}
