import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
    <main className='container mx-auto flex-1'>
      <h1>Xifres</h1>
      <p>Són estimacions, projeccions, aproximacions.</p>
      <ul>
        <li>Potència: 100 kW — Producció anual: 155.000 kWh</li>
        <li>Inversió estimada: 120.000 € (com a pioneres, en bona part potser amb fons públics per a agafar empenta). En qualsevol cas, no caldrà fer un desemborsament de capital inicial per a fer la instal·lació de les plaques fotovoltaiques.</li>
        <li>(Unes) 55 llars (que la CEL haurà de decidir quan s’hagi constituït)</li>
        <li>Quota d'ingrés a la CEL: 50 euros/sòcia. Es paga una sola vegada i es retorna en abandonar la CEL
quota operativa anual estimada: 102 €</li>
        <li>Estalvi net estimat per a un habitatge mitjà de Mediona: 240 euros/any</li>
      </ul>
      <img src="/tabla-estalvi.png" alt="xifres estalvi" />
    </main>

    <Footer />
    </div>
    )
  }