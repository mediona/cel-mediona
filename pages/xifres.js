import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
    <main className='container mx-auto flex-1'>
      <h1>Xifres</h1>
      <p>El projecte s’iniciarà amb la instal·lació de plaques fotovoltaiques al poliesportiu Antoni Ramallets que es donarà d’alta com una instal·lació d’autoconsum compartit i serà la primera font de generació d’energia renovable de la Comunitat Energètica Local. Segons l'estudi tècnic realitzat per <a href="https://comunitatenergetica.coop/" target="_blank">ePlural</a> i <a href="https://epi.coop/ca/inici/" target="_blank">EPI</a> compartim alguna xifrada sobre la primera fase:</p>
      <ul>
        <li>Potència instal·lada: 100 kW (sostre poliesportiu)</li>
        <li>Producció anual: 155.000 kW</li>
        <li>Inversió estimada: 120.000 € (gairebé segur que tindrem una subvenció del 90% del total)</li>
        <li>Comunitat: 55 habitatges, 5 comerços i el mateix ajuntament</li>
        <li>Quota d'ingrés: 50 €/socia (es recupera en abandonar la CEL)</li>
        <li>Estalvi net per a un habitatge mitjà: 240 €/any</li>
      </ul>
      <hr></hr>
      <h2>Estalvi detallat</h2>
      <p>Explicarem una mica més com són els càlculs:</p>
      <p>Prenent com a referència els 25 anys de vida útil de les plaques solars podem veure com l'estalvi en factura tenint en compte la inflació es desenvolupa</p>
      <img src="/tabla-estalvi.png" alt="xifres estalvi" className='image-center' />
      <p>A la següent taula desglossem els números. De l'estalvi total per habitatge, sumem els excendents (energia venuda a la xarxa elèctrica*). Després restem les amortitzacions del crèdit (el 10% restant per pagar la instal·lació, només els tres primers anys) i a més la quota operativa (per pagar el programari de gestió, manteniment plaques, etc)</p>
      <img src="/tabla-estalvi-detall.png" alt="xifres estalvi" className='image-center' />
      <a href="/feste-soci">Fes-te soci'!</a>
    </main>

    <Footer />
    </div>
    )
  }