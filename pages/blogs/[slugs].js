import { FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon, TwitterShareButton, TwitterIcon } from "react-share";
import Footer from "../../src/components/Footer";
import Drawers from "../../src/components/Drawers";
import FixedMenu from "../../src/components/FixedMenu/FixedMenu";
import { useRouter } from 'next/router';
import Head from "next/head";

export default function Blog({ data }) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Head>
                <title>{data.blogTitle} | SuperHomes</title>
                {/* <meta name="description" content={data.metaDesc} />
                <meta name="keywords" content={data.keywords} />
                <meta name="robots" content="index, follow" /> */}
                <link rel="canonical" href={`https://www.superhomes.co/admin/public/api/blogs/${data.slugs}`} />
                {/* <meta property="og:title" content={data.seoTitle} />
                <meta property="og:description" content={data.metaDesc} /> */}
                <meta property="og:image" content={"https://www.superhomes.co/admin/public/" + data.featureImg} />
            </Head>
            <div className="outer-div div-section-container relative bg-white">
                <Drawers />
                <FixedMenu />
                <div className="mx-auto w-full md:w-3/4 pt-32">
                    <span className="my-2 block text-[30px] w-full mx-auto py-2">{data.blogTitle}</span>
                    <img src={"https://www.superhomes.co/admin/public/" + data.featureImg} className="my-4 w-full"></img>
                    <span className="my-2 block w-full mx-auto py-2" dangerouslySetInnerHTML={{ __html: data.blogDesc }}></span>
                    <div className="w-full border-b border-black pt-6 pb-4"></div>
                    <div className="my-8 flex justify-between">
                        <div className="share_svg">
                            <FacebookShareButton url={`https://www.superhomes.co/admin/public/api/blogs/${data.slugs}`}>
                                <FacebookIcon />
                            </FacebookShareButton>
                            <TwitterShareButton url={`https://www.superhomes.co/admin/public/api/blogs/${data.slugs}`}>
                                <TwitterIcon />
                            </TwitterShareButton>
                            <LinkedinShareButton url={`https://www.superhomes.co/admin/public/api/blogs/${data.slugs}`}>
                                <LinkedinIcon />
                            </LinkedinShareButton>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

// export async function getServerSideProps({ params }) {
//     const slugs = params.slugs;
//     const data = await fetch(`https://www.superhomes.co/admin/public/api/blogs/${slugs}`).then(res => res.json());
//     return {
//         props: {
//             slugs,
//             data
//         }
//     }
// }

export async function getStaticPaths() {
    const res = await fetch('https://www.superhomes.co/admin/public/api/blogs')
    const data = await res.json()
    const paths = data.blogs.map((blog) => ({
        params: { slugs: blog.slugs },
    }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://www.superhomes.co/admin/public/api/blogs/${params.slugs}`)
    const data = await res.json()
    return { props: { data } }
}