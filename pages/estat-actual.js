import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <main>
        <h2>¿Que es la CEL de Mediona?</h2>
        <p>La comunitat energètica local de Mediona, també anomenada CEL de Mediona és una agrupació de diferents agents, en nostre case l'ajuntament, comerços i ciutadans, per a producir, distribuir i consumir energia de manera compartida.</p>
      

      Posarem plaques solars a la teulada del poliesportiu. Aquesta és la primera fase. N'han de venir més. Volem ser ambiciosos.

      (Unes) 55 llars de Mediona (tenim per ara un límit legal —no tècnic!— de 2Km de radi des de les plaques), a més de serveis municipals (poliesportiu i d’altres), i també comerços i empreses del poble que s'hi sumin; l'Ajuntament de Mediona també participa amb la cessió de l'espai.

      Segons els hàbits diaris i estacionals de cada llar, pot representar l'estalvi d'un terç de la factura (per ara).

      NO cal canviar la comercialitzadora amb qui tens contractada la llum.

        <h3>Documents relacionats</h3>
        <p>Descarrega el tríptic de la CEL <a href="/triptic.pdf" target="_blank">aquí mateix</a>.</p>
        <img src="/logo.png" alt="logo" className="image-center"></img>
      </main>

      <Footer />
    </div>
  )
}
