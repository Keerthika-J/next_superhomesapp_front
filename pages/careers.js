import Careers from "../src/components/Careers/Careers";
import Footer from "../src/components/Footer";
import Head from "next/head";

function App() {
    return (
        <div className="">
            <Head>
                <title>Careers at SuperHomes | Join Our Team</title>
                <meta name="description" content="Explore career opportunities at SuperHomes and join our dynamic team of professionals dedicated to shaping the future of home construction." />
                <link rel="canonical" href="https://www.superhomes.co/careers" />
                <meta property="og:title" content="Careers at SuperHomes | Join Our Team" />
                <meta property="og:description" content="Explore career opportunities at SuperHomes and join our dynamic team of professionals dedicated to shaping the future of home construction." />
            </Head>
            <Careers />
            <Footer />
        </div>
    );
}

export default App;
