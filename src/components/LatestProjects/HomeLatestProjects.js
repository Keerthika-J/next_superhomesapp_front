import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function HomeLatestProjects() {
    const [Data, setData] = useState([]);
    useEffect(() => {
        fetch('https://www.superhomes.co/admin/public/api/latest-projects')
            .then((res) => res.json())
            .then((res) => {
                setData(res.porfolios);
            })
    }, [Data]);
    return (
        <>
            {
                Data.slice(0, 3).map((item, index) => {
                    return (<div className="col-span-1" key={index}>
                        <div className="relative">
                            <span className="slogan text-[32px] absolute bottom-0 left-0 text-white w-10/12 m-4 my-8">{item.portfolioTitle}</span>
                            <Link href={`/latest-projects/${item.slugs}`}>
                                <div className="slideshow">
                                    <img src={"https://www.superhomes.co/admin/public/" + item.featureImgs} className="home-latest-projects-img w-full h-[400px] rounded-xl my-4 object-cover"></img>
                                </div>
                            </Link>
                        </div>
                    </div>)
                })
            }
        </>
    )
}

export default HomeLatestProjects;
