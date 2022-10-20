import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Comunitat Energetica de Mediona (CEL)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Comunitat Energetica de Mediona (CEL)" />
        <h3>Preguntes i Respostes</h3>
        <p className="description">
          <b>1. Què és una comunitat energètica local (CEL)?</b>
            Les CEL’s són organitzacions formades per agrupacions de diferents agents d’un mateix territori que
          s’uneixen per transformar la manera en
          què es produeix i s’accedeix a l’energia, generant beneficis
          mediambientals, econòmics i socials als seus membres i a les zones locals on opera. Tenen capacitat
          per a distribuir l’energia generada a qualsevol punt de connexió que es trobi dins un radi de 5
          00 metres
          de les instal·lacions. Aquestes entitats estan basades en la participació oberta i voluntària i les controlen
          les persones sòcies o membres que la conformen.
            </p>
      </main>

      <Footer />
    </div>
  )
}
