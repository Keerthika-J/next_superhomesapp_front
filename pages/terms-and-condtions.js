import TermsConditions from "../src/components/TermsConditions/TermsConditions";
import Footer from "../src/components/Footer";
import Head from "next/head";

function App() {
    return (
        <div className="">
            <Head>
                <title>Terms and Conditions | SuperHomes Policies</title>
                <meta name="description" content="Review SuperHomes terms and conditions to understand our policies. We prioritize transparency and fairness in all our dealings." />
                <link rel="canonical" href="https://www.superhomes.co/terms-and-condtions" />
                <meta property="og:title" content="Terms and Conditions | SuperHomes Policies" />
                <meta property="og:description" content="Review SuperHomes terms and conditions to understand our policies. We prioritize transparency and fairness in all our dealings." />
            </Head>
            <TermsConditions />
            <Footer />
        </div>
    );
}

export default App;
