import Interior from "../src/components/Interior/Interior";
import Footer from "../src/components/Footer";
import Head from "next/head";

function App() {
    return (
        <div className="">
            <Head>
                <title>Interior Design Services | SuperHomes</title>
                <meta name="description" content="Discover SuperHomes interior design services. We transform spaces into stunning interiors that reflect your personality and lifestyle." />
                <link rel="canonical" href="https://www.superhomes.co/interiors" />
                <meta property="og:title" content="Interior Design Services | SuperHomes" />
                <meta property="og:description" content="Discover SuperHomes interior design services. We transform spaces into stunning interiors that reflect your personality and lifestyle." />
            </Head>
            <Interior />
            <Footer />
        </div>
    );
}

export default App;
