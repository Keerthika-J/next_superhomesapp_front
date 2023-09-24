import AllBlogs from "../src/components/Blogs/AllBlogs";
import Footer from "../src/components/Footer";
import Head from "next/head";

function App() {
    return (
        <div className="">
            <Head>
                <title>SuperHomes Blogs | Insights, Inspiration and Trends</title>
                <meta name="description" content="Explore SuperHomes' blogs for valuable insights, design inspiration, and the latest trends in the world of home construction and interior design." />
                <link rel="canonical" href="https://www.superhomes.co/blogs" />
                <meta property="og:title" content="SuperHomes Blogs | Insights, Inspiration and Trends" />
                <meta property="og:description" content="Explore SuperHomes' blogs for valuable insights, design inspiration, and the latest trends in the world of home construction and interior design." />
            </Head>
            <AllBlogs />
            <Footer />
        </div>
    );
}

export default App;

