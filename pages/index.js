import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='container mx-auto flex-1'>
        <h1>Què és la CEL de Mediona?</h1>
        <p>És una <a href="https://www.diba.cat/es/web/mediambient/comunitats-energ%C3%A8tiques" target="_blank">comunitat energètica local</a> de Mediona, també anomenada CEL de Mediona, formada de diferents agents, en el nostre cas l'Ajuntament, comerços i ciutadans, per tal de produir, distribuir i consumir energia de manera compartida.</p>

        <p>La plataforma sorgeix com una proposta de l'Ajuntament per impulsar la sobirania energètica del nostre poble. Amb el suport de <a href="https://comunitatenergetica.coop/" target="_blank">e-Plural</a> i <a href="https://epi.coop/ca/inici/" target="_blank">EPI</a>, assessories tècniques amb experiència en aquest tipus de projectes, al llarg del 2022 es van anar fent xerrades explicatives de què és una comunitat energètica. A més, s'ha creat el Grup Motor, format per habitants del municipi, per a impulsar la creació del projecte.</p>

        <p>El nostre objectiu és reduir la dependència de les grans distribuïdores i comercialitzadores, produir la nostra pròpia energia d'una manera més ecològica i sostenible. De moment, en una primera fase, l'objectiu és aprofitar la voluntat del nostre ajuntament per a instal·lar un conjunt de plaques solars sobre el sostre del Poliesportiu.</p>

        <p>Part d'aquesta primera fase, busquem constituir una cooperativa i integrar a la comunitat cinquanta habitages de Sant Joan o Can Xombo; per ara hi ha una limitació legal de 2km des del centre de producció de l'energia, 5 comerços i el mateix ajuntament. Podeu obtenir més informació del projecte a <a href="/xifres">la secció de xifres</a>, on expliquem amb més detall l'estudi tècnic fet per e-Plural.</p>

        <p>Si t'interessa, no dubtis a contactar-nos a <a href="mailto:celmediona@gmail.com">celmediona@gmail.com</a>. A la part de <a href="/feste-soci">Fes-te soci'</a> detallem què cal per formar-ne part.</p>

        <p>Si encara no et queda clar per què fer-te'n sòcia, <a href="/perque-ferme-soci">aquí te'n detallem els avantatges</a></p>
      </main>

      <Footer />
    </div>
  )
}
