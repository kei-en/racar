import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import { exploreData } from '../data';
import SmallCard from '../components/SmallCard';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>racar</title>
        <meta name="description" content="P2P car sharing platform" />
        <link rel="icon" href="/fav.svg" />
      </Head>

      <Header /> 
      <Banner /> 

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map(({img, location}) => (
              <SmallCard key={img} img={img} location={location} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
};

// export async function getStaticProps() {
//   const explore = fetch(exploreData).
//     then((
//       (res) 
//     ))
// }