import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='container mx-auto flex-1'>
        <h1>Perquè fer-se soci?</h1>
        <p>Creiem que hi ha diferents raons per les que vulguis ser part de la nostra comunitat.</p>  
        <ul>
          <li><i>Estalvi</i>: Redueix al voltant d'un 30% de la factura elèctrica segons els càlculs de l'estudi tècnic. Comptem amb una subvenció per a la instal·lació de les plaques solars per la qual cosa no hi haurà desemborsament inicial. Per saber més sobre les xifres visita <a href="/xifres">la secció de xifres</a></li>
          <li><i>Comunitat</i>: Capacitat de decidir sobre el present i el futur de la comunitat podent millorar entre totes l'ús d'energia. Podem diversificar les fonts d'energia o desenvolupar un pla de mobilitat sobre la base de cotxes elèctrics, totes les propostes són benvingudes. Per cert, en aquestes comunitats cada soci, tant se val sigui una habitatge o l'ajuntament té un sol vot.</li>
          <li><i>Ambiental</i>: Produïm l'energia al costat de casa nostra d'una , o diverses en un futur, fonts renovables. Tampoc no hi ha cap cost en el transport d'aquesta energia. Imagina't un futur sense grans plantes de transformació elèctrica!</li>
          <li><i>Solidaritat</i>: Podem acollir famílies en situació de pobresa energètica, ajudant-los a reduir la factura de la llum amb els excedents d'energia que produeix la nostra instal·lació i no haver de mal vendre aquest sobrant a les companyies elèctriques.</li>
          <li><i>Fortalesa</i>: A la comunitat podem aprofitar l'energia ja que tenim més diversitat d'ús. Comerços o ajuntament poden tenir un consum més matinal mentre que les famílies més vespertí. El nostre objectiu és no abocar res a la xarxa i poder aprofitar com més energia millor. De forma col·lectiva sempre podem afrontar mals moments mitjor o planificar projecte de més escala que de manera individual.</li>
        </ul>
      </main>

      <Footer />
    </div>
  )
}
