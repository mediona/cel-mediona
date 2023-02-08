import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='container mx-auto flex-1'>
        <h1>Què és la CEL de Mediona?</h1>
        <p>És una <a href="https://www.diba.cat/es/web/mediambient/comunitats-energ%C3%A8tiques" target="_blank">comunitat energètica local</a> de Mediona, també anomenada CEL de Mediona, formada de diferents agents, en el nostre cas l'ajuntament, comerços i ciutadans, per tal de produir, distribuir i consumir energia de manera compartida.</p>

        <p>La plataforma sorgeix com una proposta de l'ajuntament per impulsar la sobirania energetica del nostre poble. Recolzant-se a ePlural, assessoria tècnica amb experiència en aquest tipus de projectes, al llarg del 2022 s'han anat fent xerrades explicatives del que és una comunitat energètica. A més, s'ha creat un grup motor, format per habitants del municipi, per impulsar la creació del projecte.</p>

        <p>El nostre objectiu seria reduir la dependència de les grans distribuïdores i comercialitzadores, produint la nostra pròpia energia d'una manera més ecològica i sostenible. De moment, en una primera fase, l'objectiu és aprofitar la voluntat del nostre ajuntament per instal·lar un conjunt de plaques solars sobre el sostre del poliesportiu.</p>

        <p>Part d'aquesta primera fase, busquem constituir una cooperativa e integrar a la comunitat cinquanta habitages de Sant Joan o Can Xombo, per ara hi ha una limitació legal de 2km des del centre de producció de l'energia, 5 comerços i el mateix ajuntament. Podeu obtenir més informació del projecte podeu veure <a href="/xifres">la secció de xifres</a> on expliquem en més detall l'estudi tècnic fet per ePlural.</p>

        <p>En aquest moment estem en cerca activa perquè no arribem a la xifra desitjada, així que si t'interessa no dubtis a contactar-nos a <a href="mailto:celmediona@gmail.com">celmediona@gmail.com</a>. A la part de <a href="/feste-soci">Fes-te soci'</a> detallem que necessites per formar part.</p>

        <p>Si encara no et queda clar perquè fer-te sòcia <a href="/perque-ferme-soci">aquí et detallem els avantatges</a></p>
      </main>

      <Footer />
    </div>
  )
}
