import React from 'react';
import Footer from "../../src/components/Footer";
import Drawers from "../../src/components/Drawers";
import FixedMenu from "../../src/components/FixedMenu/FixedMenu";
import { useRouter } from 'next/router';
import Head from "next/head";

export default function LatestProjects({ slugs, data }) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    const temp = typeof data.galleryImgs === 'string' ? data.galleryImgs.split(',') : "";
    const itemRows = [];
    for (let item of temp) {
        const row = (
            <img className="masonary-grid-img drop-shadow-md" src={"https://www.superhomes.co/admin/public/" + item} />
        );
        itemRows.push(row);
    }
    return (
        <>
            <Head>
                <title>{data.seoTitle} | SuperHomes</title>
                <meta name="description" content={data.metaDesc} />
                <link rel="canonical" href={`https://www.superhomes.co/admin/public/api/latest-projects/${data.slugs}`} />
                <meta property="og:title" content={data.seoTitle} />
                <meta property="og:description" content={data.metaDesc} />
                <meta property="og:image" content={"https://www.superhomes.co/admin/public/" + data.featureImgs} />
            </Head>
            <div className="outer-div div-section-container relative bg-white">
                <Drawers />
                <FixedMenu />
                <div className="">
                    <div className="w-full mt-16 md:mt-20">
                        <span className="block text-[25px] md:text-[35px] xl:text-[54.2px]">{data.portfolioTitle}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-end gap-x-12 gap-y-8 mt-8">
                        <div className="col-span-1 w-full h-full">
                            <img src={"https://www.superhomes.co/admin/public/" + data.featureImgs} className="w-full h-full max-h-[600px] drop-shadow-md object-fill rounded-xl"></img>
                        </div>
                        <div className="col-span-1 w-full">
                            <div className="">
                                <span className="projects-title text-[13.8px] md:text-[27.12px]">Location</span>
                                <span className="projects-para text-[10px] md:text-[15.52px]">{data.location}</span>
                            </div>
                            <div className="">
                                <span className="projects-title text-[13.8px] md:text-[27.12px]">Client</span>
                                <span className="projects-para text-[10px] md:text-[15.52px]">{data.client}.</span>
                            </div>
                            <div className="">
                                <span className="projects-title text-[13.8px] md:text-[27.12px]">Plot Size</span>
                                <span className="projects-para text-[10px] md:text-[15.52px]">{data.plotSize}</span>
                            </div>
                            <div className="">
                                <span className="projects-title text-[13.8px] md:text-[27.12px]">Completion Time</span>
                                <span className="projects-para text-[10px] md:text-[15.52px]">{data.completionTime}</span>
                            </div>
                            <div className="">
                                <span className="projects-title text-[13.8px] md:text-[27.12px]">Package</span>
                                <span className="projects-para text-[10px] md:text-[15.52px]">{data.package}</span>
                            </div>
                            <div className="">
                                <span className="projects-title text-[13.8px] md:text-[27.12px]">Built up Area</span>
                                <span className="projects-para text-[10px] md:text-[15.52px]">{data.builtUpArea}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-full masonary-grid mt-8">
                        {itemRows}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

// export async function getServerSideProps({ params }) {
//     const slugs = params.slugs;
//     const data = await fetch(`https://www.superhomes.co/admin/public/api/latest-projects/${slugs}`).then(res => res.json());
//     return {
//         props: {
//             slugs,
//             data
//         }
//     }
// }

export async function getStaticPaths() {
    const res = await fetch('https://www.superhomes.co/admin/public/api/latest-projects')
    const data = await res.json()
    const paths = data.porfolios.map((portfolio) => ({
        params: { slugs: portfolio.slugs },
    }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://www.superhomes.co/admin/public/api/latest-projects/${params.slugs}`)
    const data = await res.json()
    return { props: { data } }
}


