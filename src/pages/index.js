import Head from "next/head";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import { getLocalData } from "../../lib/SmallCardsData";
import { getCardsData } from "../../lib/MediumCardsData";
import SmallCard from "../../components/SmallCards";
import MediumCard from "../../components/MediumCards";
import LargeCard from "../../components/LargeCard";
import Footer from "../../components/Footer";

export default function Home({ localData, cardsData }) {
  return (
    <>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="https://i.imgur.com/gKndKHK.png" />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <nav>
        {/* Header Component*/}
        <Header />
      </nav>
      <header>
        {/* Banner Component */}
        <Banner />
      </header>

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Europe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {localData?.map(({ img, location }) => (
              <SmallCard key={img} img={img} location={location} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live enywhere</h2>
          <div className="flex space-x-3 overflow-x-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <section>
          <LargeCard
            img="https://i.imgur.com/9GARzhJ.jpg"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb"
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export async function getStaticProps() {
  const localData = await getLocalData();
  const cardsData = await getCardsData();

  return {
    props: { localData, cardsData },
  };
}
