import Solutions from "../src/components/Solutions/Solutions";
import Footer from "../src/components/Footer";
import Head from "next/head";

function App() {
    return (
        <div className="">
            <Head>
                <title>Home Solutions | SuperHomes Comprehensive Services</title>
                <meta name="description" content="Explore SuperHomes comprehensive home solutions. From design to construction and interiors, we offer all you need for your dream home." />
                <link rel="canonical" href="https://www.superhomes.co/solutions" />
                <meta property="og:title" content="Home Solutions | SuperHomes Comprehensive Services" />
                <meta property="og:description" content="Explore SuperHomes comprehensive home solutions. From design to construction and interiors, we offer all you need for your dream home." />
            </Head>
            <Solutions />
            <Footer />
        </div>
    );
}

export default App;
