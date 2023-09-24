import Responsibility from "../src/components/Responsibility/Responsibility";
import Footer from "../src/components/Footer";
import Head from "next/head";

function App() {
    return (
        <div className="">
            <Head>
                <title>Social Responsibility | SuperHomes Commitment to the Community</title>
                <meta name="description" content="Learn about SuperHomes' commitment to social responsibility and our efforts to make a positive impact on the communities we serve." />
                <link rel="canonical" href="https://www.superhomes.co/responsibility" />
                <meta property="og:title" content="Social Responsibility | SuperHomes Commitment to the Community" />
                <meta property="og:description" content="Learn about SuperHomes' commitment to social responsibility and our efforts to make a positive impact on the communities we serve." />
            </Head>
            <Responsibility />
            <Footer />
        </div>
    );
}

export default App;
