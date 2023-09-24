import LatestProjects from "../src/components/LatestProjects/LatestProjects";
import Footer from "../src/components/Footer";
import Head from "next/head";

function App() {
    return (
        <div className="">
            <Head>
                <title>Latest Projects | SuperHomes Showcase of Excellence</title>
                <meta name="description" content="Explore SuperHomes latest projects, a showcase of excellence in home construction and interior design. See our commitment to quality." />
                <link rel="canonical" href="https://www.superhomes.co/latest-projects" />
                <meta property="og:title" content="Latest Projects | SuperHomes Showcase of Excellence" />
                <meta property="og:description" content="Explore SuperHomes latest projects, a showcase of excellence in home construction and interior design. See our commitment to quality." />
            </Head>
            <LatestProjects />
            <Footer />
        </div>
    );
}

export default App;
