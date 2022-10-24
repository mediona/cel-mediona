import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Comunitat Energètica Local de Mediona (CEL)</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Outfit:wght@300;400&display=swap" rel="stylesheet" />
      </Head>

      <main >
        <Header title="Comunitat Energètica Local de Mediona (CEL)" />
        <p>Benvingut a la pàgina de la CEL de Mediona, aquí podràs consultar els dubtes més freqüents sobre la comunitat i descarregar els documents principals que et poden servir d'ajuda</p>
        <h3>Preguntes i Respostes</h3>
        <p className="description">
          <b>1. Què és una comunitat energètica local (CEL)?</b><br />
            Les CEL són organitzacions formades per agrupacions de diferents agents d’un mateix territori que s’uneixen per a transformar la manera en què es produeix i s’accedeix a l’energia, generant beneficis mediambientals, econòmics i socials als seus membres i a les zones locals on opera. Tenen capacitat per a distribuir l’energia generada a qualsevol punt de connexió que es trobi dins un radi d’un quilòmetre de les instal·lacions. Aquestes entitats estan basades en la participació oberta i voluntària i les controlen les persones sòcies o membres que la conformen.
            </p>
        <p className="description">
          <b>2. Què és una Comunitat Energètica Local (CEL) impulsada des de l’Economia Social i Solidària (ESS)?
            </b><br />
            Les CEL impulsades des de l’ESS són entitats amb forma jurídica pròpia (associació o cooperativa) sense ànim de lucre. Tenen la voluntat de generar dinàmiques cooperatives que transformen la manera de  produir  i  consumir  recursos  energètics i  que  generen  un  impacte  transformador  a  escala  social, mediambiental i local.

            </p>
        <p className="description">
          <b>3. Quins són els principals serveis energètics que podria oferir la CEL?</b><br />
            Els principals serveis energètics que podria oferir una CEL són els relatius a la producció d’energia
a través de diferents tecnologies (fotovoltaica, xarxa de calor, biogàs, etc.), l’assessorament entorn a
l’eficiència energètica i altres serveis com la mobilitat sostenible, telefonia mòbil, internet compartit,
formacions  i  compres  col·lectives  de  productes o serveis (d’energia, d’instal·lacions solars, de cotxe
elèctric, etc.).
            </p>
        <p className="description">
          <b>4. Quins són els beneficis d’una CEL?</b><br />
Els  beneficis  d’una  CEL  inclouen  tres  dimensions:  mediambiental,  social  i  econòmica.
A escala mediambiental, les CEL contribueixen a reduir les emissions de C0<sub>2</sub>, a través de la producció
d’energia verda i renovable, treballant l’eficiència i reducció de l’ús energètic.
A  escala  social,  les  CEL  són  un  mecanisme  per a democratitzar el model  energètic, garantint  l’accés
universal a l’energia, la sobirania  energètica  del  territori  i  la  lluita  contra  la  pobresa  energètica.  Així
mateix, les CEL empoderen les persones que hi participen en la presa de decisions sobre el model
energètic i contribueixen a millorar les relacions de veïnatge i a enfortir la comunitat local.
Finalment,  en l’àmbit econòmic, redueixen  l’import mensual de la factura  elèctrica,  i  el  consum  i  la
producció local de serveis energètics genera riquesa en el territori en el qual opera la CEL.
            </p>
        <p className="description">
          <b>5. L’energia que rebré de la CEL serà 100% renovable?</b><br />
            Sí que ho serà. Justament les CEL centren el 100% de la seva producció en energies renovables. No
obstant això, cal tenir present que la demanda d’energia no coberta per la capacitat de producció de la
CEL serà proveïda pel sistema elèctric gene
ral a través d’una comercialitzadora, com fins ara.
            </p>
        <p className="description">
          <b>6. Qui pot participar en una CEL?</b><br />
            En una CEL hi poden intervenir multiplicitat d’actors, cadascun dels quals assumeix la funció que la
mateixa CEL hagi acordat, en funció del marc competencial i legal que es pugui adjudicar. Així doncs, els principals actors que s’identifiquen són la ciutadania organitzada, les administracions públiques, les empreses  i  organitzacions  socials  i  les  persones  individuals.  A  més,  la  participació  és  oberta  i voluntària.
            </p>
        <p className="description">
          <b>7. Com puc participar en la CEL de Mediona?</b><br />
            Existeixen  diferents  maneres  de  participar  en  una  CEL.  En  primer  lloc,  com  a  sòcia  consumidora, participant en la producció i/o consum d'energia a canvi de l’aportació d’una quota econòmica per cobrir  les  despeses  de  la CEL  (manteniment  de  les  instal·lacions,  despeses administratives, etc.).  En segon  lloc,  com  a  sòcia  col·laboradora,  contribuint  en  el  desenvolupament  de  la  CEL  a  través d’aportacions de capital, altres recursos i/o en la participació d’activitats de l a pròpia CEL. Finalment, sense ser sòcia però participant com a difusora o sensibilitzadora de la CEL.
            </p>
        <p className="description">
          <b>8. Quins són els drets de les persones consumidores?</b><br />
            El primer dret és el de participar en les preses de decisions sobre el present i el futur de la Co
munitat Energètica i el seu model energètic a través dels espais democràtics que s’estableixen en el si de l’entitat i que venen regulats per la fórmula jurídica que adopta l’entitat. Aquesta participació pot ser a través  de  la  gestió  i  representació  activa  de  la  Comunitat  (en  el  Consell  Rector,  en  cas  de  si  és  una cooperativa,  o  Junta  Directiva  si  és  una  associació)  i/o  a  través  de  la  validació  de  les  decisions  que prenguin els primers en Assemblea on cada una de les sòcies tindrà un vot.
El  segon  dret  és el  de  beneficiarse  dels  diferents  serveis  energètics  que  pot  oferir  la  Comunitat
Energètica generant un estalvi econòmic en l’ús d’energia. Els principals serveis són els relatius a la producció d’energia a través de diferents tecnologies renovables (fotovoltaica, xarxa de calor, biogàs,
etc.),  l’assessorament  entorn a  l’eficiència  energètica  i altres  serveis  com  la  mobilitat sostenible, telefonia mòbil, internet compartit, formacions i compres col·lectives de productes o serveis. Finalment, tenen el dret d’assistir a les reunions de les Assemblees Generals i dels altres òrgans socials als quals siguin convocades i participar en les activitats de formació i d’intercooperació.
            </p>
        <p className="description">
          <b>Quines són les obligacions de les persones consumidores?</b><br />
            Les persones sòcies estan obligades a fer el pagament de l’aportació obligatòria al capital social, si és una  cooperativa,  així  com  les  altres  aportacions  econòmiques  que  s’estableixin  per  a  l’accés  als diferents  serveis  energètics  i  la  gestió  de  la  Comunitat  Energètica  una  v egada  ja  estigui  constituïda. D’altra  banda,  a  nivell  administratiu,  les  persones  participants  hauran  d’aportar  la  informació necessària per tal d’assegurar l’alta i el correcte funcionament dels serveis energètics.
        </p>
        <p className="description">
          <b>10. Quant hauré de pagar per a formarpart de la CEL?</b><br />
            Hauràs de pagar l’aportació obligatòria al capital social per ferte soci/a de la cooperativa que s’hagi decidit, així  com  les  altres  obligacions  econòmiques  que s’estableixin  en  forma  d’aportacions pel funcionament de la CEL i els diferen ts serveis que pugui oferir.
        </p>
        <p className="description">
          <b>11. En cas de molta demanda, com es prioritzarà qui s’abasteix d’energia de la CEL i qui no?</b><br />
Els  criteris  els  decidirà  el  Grup  Motor  (abans  de  constituir  la  CEL)  o  el  Consell  Rector  una vegada constituïda  i  hauran  de  ser  validats  per  l'Assemblea.  Alguns  dels  criteris  que  es  poden  tenir  en
consideración  són,  per  exemple,  l’ordre  d’entrada,  el  tractament  de  la  pobresa  energètica  o  si l’habitatge és primera o segona residència.
        </p>
        <p className="description">
          <b>12. Què passa si vull formar part de la CEL però no visc dins el rati de 1000 metres?</b><br />
            Pots ferte’n soci/a per col·laborar amb al CEL i beneficiarte dels altres serveis que pugui oferirla CEL com   ara   assessorament   energètic,   la   mobilitat   sostenible,   telefonia   mòbil, internet   compartit, formacions i compres col·lectives de productes o serveis.
        </p>
        <p className="description">
          <b>13. Podré participar de la CEL i consumir energia si no sóc propietària del pis on visc? I si el contracte de la llum no està a nom de la llogatera?</b><br />
Si  no  ets  propietària,  pots  ferte  sòcia  consumidora  o col·laboradora  de  la  CEL.  Ara  bé,  per  ser  sòcia
consumidora d’energia cal que el contracte de la llum estigui al teu nom.    
        </p>
        <p className="description">
          <b>14. No tinc clar quant de temps viuré a Mediona o a la casa on visc ara. Què passa si participo a la CEL i canvio de domicili?</b><br />
Si ets sòcia consumidora i ja no estàs dins del radi de 1000 metres al voltant de la instal·lació, deixaràs
de ser elegible com a sòcia consumidora de la CEL. De totes maneres, podràs seguir participant hi sent sòcia col·laboradora. En el cas que volguessin deixar ne de formar part, les sòcies tenen total llibertat de deixarho de ser i recuperar el capital social inicial aportat.
        </p>
        <p className="description">
          <b>15. Si tinc plaques a casa meva, em podré sumar a la CEL?</b><br />
            Si tens plaques solars a casa teva, igualment podràs participar de la CEL com a sòcia col·laboradora o
sòcia productora i consumidora. En el primer cas, contribuint en el desenvolupament de la CEL a través
d’aportacions de capital, altres recursos i/o en la participació d’activitats de la pròpia CEL. En el segon
cas, pots contribuir en la producció d’energia dins la CEL i ser una consumidora més. Les condicions en
les que una persona sòcia esdevé productora d’energia de la CEL vindran definides per la pròpia
comunitat.
        </p>
        <p className="description">
          <b>16. Com es relaciona la CEL amb la comercialitzadora?</b><br />
No és indispensable que per participar d’una CEL tothom hagi d’estar amb la mateixa comercialitzadora
d’electricitat. Pot ser una decisió de la mateixa Comunitat si considera que és un element rellevant
establir si aquesta condició és necessària o no. Per tant, si així es considera més adequat, cada persona consumidora de la CEL podrà contractar la llum i rebre les factures de la comercialitzadora que vulgui.
        </p>
        <p className="description">
          <b>17. Quines diferències hi ha entre ferte sòcia de Som Energia i constituir una CEL?</b><br />
Som Energia és una cooperativa productora i comercialitzadora d’electricitat verda. Qui se’n fa soci/a pot contractar la llum, participar en projectes de generació renovable, fer aportacions al capital social, participar activament a la cooperativa i a les formacions de l’Aula Popular.
Constituir una CEL és impulsar la transició energètica a nivell local, desenvolupant generació distribuïda i renovable en el territori, empoderant la ciutadania i involucrant a les entitats municipals en aquesta transformació. Segurament són dues opcions complementàries perquè, com es diu abans, en principi sempre caldrà el vincle amb una comercialitzadora.
        </p>
        <p className="description">
          <b>18. Com es pot assegurar la participació de famílies en situació de pobresa energètica a la CEL?</b><br />
Existeixen  diferents  mecanismes  per  assegurar  que  les  famílies  en  situació  de  pobresa  energètica puguin beneficiarse i participar dels diferents serveis energètics que pot oferir la CEL:
La primera opció és que en els estatuts de l’entitat, s’incorporin diferents criteris i premisses per prioritzar l’accés a les famílies en situació de pobresa energètica als serveis que ofereix la
CEL.
La segona  opció  és  que  el propi  Ajuntament  de  Mediona afegeixi  en el  conveni  de  cessió  de l’espai per les instal·lacions clàusules que incorporin diferents criteris i premisses per prioritzar l’accés a aquestes famílies
En ambdós casos, addicionalment es podrien introduir opcions per facilitar les obligacions econòmiquesde les sòcies participants. Aquestes poden ser rebaixes o exempcions en el pagament de les quotes i/o en les aportacions inicials de capital d’aquestes famílies que haurien de ser compensades per la resta de les sòcies.
        </p>
        <p className="description">
          <b>19. Podré participar de la CEL si rebo el Bo Social? Quines conseqüències té?</b><br />
Sí,  podràs  formar  part  de  la  CEL  com  a sòcia  i  beneficiarte  dels  diferents  serveis  que  ofereix  la Comunitat. Una de les condicions essencials per rebre el Bo Social és no superar un llindar establert de consum d’energia anual. En la mesura en que al formar part de la CEL com a sòcia consumidor a redueixes el consum d’energia de la xarxa, les famílies que actualment reben el Bo Social continuaran sent elegibles per rebre aquesta prestació.
A nivell econòmic, el Bo Social s’aplica sobre el total de la factura de la llum (potència contractada i consum). Conseqüentment, degut a que el consum d’energia de la xarxa serà inferior una vegada la participant consumidora rebi energia de la CEL, la prestació del Bo Social serà inferior a la que rebia abans  de  participar  a  la  Comunitat.  Ara  bé,  és  important  tenir  en  compte  que  obtindrà  un  estalvi econòmic procedent del consum d’aquella energia produïda per la CEL.
Finalment,  com  a  última  consideració,  cal  recordar  que  totes  aquestes  famílies  hauran  de  seguir connectades a la xarxa a través de les comercialitzadores de referència (CUR) per seguir aplicant pel
Bo Social, fet no incompatible en participar de la CEL.
        </p>
        <h3>Documents relacionats</h3>
        <p>Descarrega el tríptic de la CEL <a href="/triptic.pdf" target="_blank">aquí mateix</a>.</p>
        <img src="/logo.png" alt="logo"></img>
      </main>

      <Footer />
    </div>
  )
}
