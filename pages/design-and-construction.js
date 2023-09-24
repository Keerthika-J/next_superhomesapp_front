import DesignConstruction from "../src/components/DesignConstruction/DesignConstruction";
import Footer from "../src/components/Footer";
import Head from "next/head";

function App() {
    return (
        <div className="">
            <Head>
                <title>Design and Construction Services | SuperHomes</title>
                <meta name="description" content="Explore SuperHomes design and construction services. We turn your vision into reality with innovative design and expert construction." />
                <link rel="canonical" href="https://www.superhomes.co/design-and-construction" />
                <meta property="og:title" content="Design and Construction Services | SuperHomes" />
                <meta property="og:description" content="Explore SuperHomes design and construction services. We turn your vision into reality with innovative design and expert construction." />
            </Head>
            <DesignConstruction />
            <Footer />
        </div>
    );
}

export default App;
