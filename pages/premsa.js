import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
    <main className='container mx-auto flex-1'>
      <h2>Aparicions a la premsa</h2>
      <ul>
        <li><a href="https://lafurapenedes.cat/comunitats-energetiques/"> La Fura - Comunitats Energetics</a></li>
        <li><a href="https://www.rtvvilafranca.cat/2022/12/el-penedes-planteja-la-necessitat-dabordar-el-debat-sobre-el-model-energetic/"> RTV Vilafranca - El Penedès planteja la necessitat d’abordar el debat sobre el model energètic</a></li>
        <li><a href="https://blog.somenergia.coop/grupos-locales/catalunya/alt-penedes/2022/02/xerrada-a-mediona-comunitats-energetiques-locals-cels/"> Blog Som Energia</a></li>
        <li><a href="/triptic.pdf" target="_blank">Triptic de la Feria de Entitats</a></li>
      </ul>
    </main>

    <Footer />
    </div>
    )
  }