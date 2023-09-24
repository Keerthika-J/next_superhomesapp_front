import Privacy from "../src/components/Privacy/Privacy";
import Footer from "../src/components/Footer";
import Head from "next/head";

function App() {
    return (
        <div className="">
            <Head>
                <title>Privacy Policy | SuperHomes Commitment to Your Data</title>
                <meta name="description" content="Learn about SuperHomes commitment to your data privacy. Our privacy policy ensures the security of your information." />
                <link rel="canonical" href="https://www.superhomes.co/privacy-policy" />
                <meta property="og:title" content="Privacy Policy | SuperHomes Commitment to Your Data" />
                <meta property="og:description" content="Learn about SuperHomes commitment to your data privacy. Our privacy policy ensures the security of your information." />
            </Head>
            <Privacy />
            <Footer />
        </div>
    );
}

export default App;
