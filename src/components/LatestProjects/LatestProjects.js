import React, { useEffect, useState } from 'react';
import Drawers from '../Drawers';
import FixedMenu from '../FixedMenu/FixedMenu';
import Link from 'next/link';

function LatestProjects() {
    const [Data, setData] = useState([]);
    useEffect(() => {

        fetch("https://www.superhomes.co/admin/public/api/latest-projects")
            .then((res) => res.json())
            .then((res) => {
                setData(res.porfolios);
            })
    }, [Data]);
    return (
        <>
            <div id="projects-section" className="div-section-container outer-div relative bg-[#baa082]">
                <FixedMenu />
                <Drawers />
                <div className="w-full mt-16 md:mt-20">
                    <span className="text-[25px] md:text-[35px] xl:text-[54.2px]">Projects</span>
                </div>
                <div className="flex flex-col gap-8 mt-8">
                    {/* row-1-starts */}
                    {Data.map((i, j) => {
                        return (
                            <div className='grid grid-cols-3 gap-8 items-center' key={j}>
                                <div className="col-span-full md:col-span-1">
                                    <img src={"https://www.superhomes.co/admin/public/" + i.featureImgs} className="object-cover w-full h-[230px] rounded-2xl"></img>
                                </div>
                                <div className="col-span-full md:col-span-1 w-9/12">
                                    <span className="block text-[15.8px] md:text-[27.12px] my-auto">{i.portfolioTitle}</span>
                                </div>
                                <div className="col-span-full md:col-span-1">
                                    <Link href={`/latest-projects/${i.slugs}`}><button className="button-circle-gray-no-border my-8 md:float-right">LEARN MORE</button></Link>
                                </div>
                                <div className="invisible md:visible col-span-full border-b border-black "></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}
export default LatestProjects;