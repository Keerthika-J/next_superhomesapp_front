import Home from "../src/components/Home/Home";
import Footer from "../src/components/Footer";
import Head from "next/head";

function App() {
    return (
        <div className="">
            <Head>
                <title>SuperHomes - Your Gateway to Extraordinary Living | Find Your Dream Home</title>
                <meta name="description" content="Explore SuperHomes, where extraordinary living begins. Discover a diverse range of dream homes tailored to your lifestyle. Start your journey to homeownership today." />
                <link rel="canonical" href="https://www.superhomes.co/" />
                <meta property="og:title" content="SuperHomes - Your Gateway to Extraordinary Living | Find Your Dream Home" />
                <meta property="og:description" content="Explore SuperHomes, where extraordinary living begins. Discover a diverse range of dream homes tailored to your lifestyle. Start your journey to homeownership today." />
                <meta property="og:image" content="https://www.superhomes.co/static/media/SH_Home_Banner.f43d827ef32acab4bbd2.png" />
            </Head>
            <Home />
            <Footer />
        </div>
    );
}

export default App;
