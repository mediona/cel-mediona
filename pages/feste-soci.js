import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='container mx-auto flex-1'>
        <p>Quina alegria! Que siguis aquí vol dir que vols formar part de la nostra comunitat.</p>
        <p>Per això només necessitem que ens enviïs a <a href="mailto:celmediona@gmail.com">celmediona@gmail.com</a> el teu nom i cognoms, l'adreça del teu habitatge i telèfon de contacte. Pots adjuntar també qualsevol pregunta o dubte que tinguis.</p>
        <p>Quan rebem el teu email t'explicarem breument explicant-te quins seran els següents passos i conèixer-te una mica més. Benvingut!</p>
      </main>
      <Footer />
    </div>
  )
}
