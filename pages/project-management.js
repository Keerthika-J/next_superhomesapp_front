import ProjectManagement from "../src/components/ProjectManagement/ProjectManagement";
import Footer from "../src/components/Footer";
import Head from "next/head";

function App() {
    return (
        <div className="">
            <Head>
                <title>Project Management Services | SuperHomes</title>
                <meta name="description" content="Discover SuperHomes project management services. We ensure that your home construction project is executed seamlessly and on time." />
                <link rel="canonical" href="https://www.superhomes.co/project-management" />
                <meta property="og:title" content="Project Management Services | SuperHomes" />
                <meta property="og:description" content="Discover SuperHomes project management services. We ensure that your home construction project is executed seamlessly and on time." />
            </Head>
            <ProjectManagement />
            <Footer />
        </div>
    );
}

export default App;

