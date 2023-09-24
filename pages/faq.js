import Faq from "../src/components/Faq/Faq";
import Footer from "../src/components/Footer";
import Head from "next/head";

function App() {
    return (
        <div className="">
            <Head>
                <title>Frequently Asked Questions | SuperHomes</title>
                <meta name="description" content="Find answers to common questions about SuperHomes services and processes. Your home construction journey starts here." />
                <link rel="canonical" href="https://www.superhomes.co/faq" />
                <meta property="og:title" content="Frequently Asked Questions | SuperHomes" />
                <meta property="og:description" content="Find answers to common questions about SuperHomes services and processes. Your home construction journey starts here." />
            </Head>
            <Faq />
            <Footer />
        </div>
    );
}

export default App;
