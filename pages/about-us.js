import About from "../src/components/About/About";
import Footer from "../src/components/Footer";
import Head from "next/head";

function App() {
    return (
        <div className="">
            <Head>
                <title>About SuperHomes | Building Dreams, Creating Homes</title>
                <meta name="description" content="Learn about SuperHomes - a dedicated team of builders and designers committed to building dreams and creating homes that define comfort and style." />
                <link rel="canonical" href="https://www.superhomes.co/about-us" />
                <meta property="og:title" content="About SuperHomes | Building Dreams, Creating Homes" />
                <meta property="og:description" content="Learn about SuperHomes - a dedicated team of builders and designers committed to building dreams and creating homes that define comfort and style." />
                <meta property="og:image" content="https://www.superhomes.co/static/media/SH_About_Us_Banner.6a467e708547c3ea6978.png" />
            </Head>
            <About />
            <Footer />
        </div>
    );
}

export default App;
