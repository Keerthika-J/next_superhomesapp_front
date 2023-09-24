import React, { useEffect, useState } from 'react';
import styles from './Blogs.module.css';
import Drawers from '../Drawers';
import FixedMenu from '../FixedMenu/FixedMenu';
import Link from "next/link";

function AllBlogs() {
    const [Data, setData] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(10);
    useEffect(() => {
        fetch('https://www.superhomes.co/admin/public/api/blogs')
            .then((res) => res.json())
            .then((res) => {
                setData(res.blogs);
            })
            .catch(error => console.error(error));
    }, [Data]);
    function handleClick() {
        if (items.length === Data.length)
            setItemsToShow(10);
        else
            setItemsToShow(itemsToShow + 10);
    }
    const items = Data.slice(0, itemsToShow);
    return (
        <>
            <div className="outer-div div-section-container relative bg-white">
                <FixedMenu />
                <Drawers />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    <span className="col-span-full block text-[28.3721px] md:text-[54.2px] mt-16 md:mt-20">Blogs</span>
                    {items.map((i, j) => {
                        return (
                            <div key={j} className="col-span-1 bg-[#f5eee4] rounded-xl">
                                <Link href={`/blogs/${encodeURIComponent(i.slugs)}`} className={styles.blogs_links}>
                                    <img src={"https://www.superhomes.co/admin/public/" + i.featureImg} className="w-full h-[250px] object-cover object-top mb-4 rounded-t-xl"></img>
                                </Link>
                                <Link href={`/blogs/${encodeURIComponent(i.slugs)}`} className={styles.blogs_links}>
                                    <span className={styles.blogs_title}>{i.blogTitle}</span>
                                    <span className={styles.blogs_desc} dangerouslySetInnerHTML={{ __html: i.blogDesc }}></span>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <div className='mt-8'>
                    <button type="button" className="button-circle-white mx-auto block" onClick={handleClick}>
                        {items.length === Data.length ? "Load Less" : "Load More"}
                    </button>
                </div>
            </div>
        </>
    );
}
export default AllBlogs;