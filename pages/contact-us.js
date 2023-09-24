import Contact from "../src/components/Contact/Contact";
import Footer from "../src/components/Footer";
import Head from "next/head";

function App() {
    return (
        <div className="">
            <Head>
                <title>Contact SuperHomes | Get in Touch for Your Dream Home</title>
                <meta name="description" content="Contact SuperHomes today and start your journey towards your dream home. Our team is here to answer your questions and provide assistance." />
                <link rel="canonical" href="https://www.superhomes.co/contact-us" />
                <meta property="og:title" content="Contact SuperHomes | Get in Touch for Your Dream Home" />
                <meta property="og:description" content="Contact SuperHomes today and start your journey towards your dream home. Our team is here to answer your questions and provide assistance." />
            </Head>
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
