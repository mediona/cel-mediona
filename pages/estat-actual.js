import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1>Estat actual</h1>
        <p>Després de la formació del grup motor l'estiu de l'any passat, s'han mantingut reunions periòdiques amb la cooperativa <a href="https://comunitatenergetica.coop/" target="_blank">ePlural</a> i <a href="https://epi.coop/ca/inici/" target="_blank">EPI</a> per fer un estudi tècnic de la viabilitat i planificar com constituir la comunitat energètica. Aquesta comunitat prendrà forma de Cooperativa de Consumidors perquè és la forma jurídica que reflecteix millor el model de governança i gestió desitjat.</p>
        
        <p>Ara mateix acabem d'acabar de redactar els estatuts i posarem a definir el reglament de règim intern on totes vosaltres podem col·laborar.<a href="/feste-soci">Fes-te soci' !</a></p>
      </main>

      <Footer />
    </div>
  )
}
