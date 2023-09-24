import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Blogs.module.css';

function HomeBlogs() {
    const [Data, setData] = useState([]);
    useEffect(() => {
        fetch('https://www.superhomes.co/admin/public/api/blogs')
            .then((res) => res.json())
            .then((res) => {
                setData(res.blogs);
            })
    }, [Data]);
    return (
        <>
            {
                Data.slice(0, 3).map((i, j) => {
                    return (<div key={j} className="col-span-1 bg-[#f5eee4] rounded-xl">
                        <Link href={`/blogs/${i.slugs}`} className={styles.blogs_links}>
                            <img src={"https://www.superhomes.co/admin/public/" + i.featureImg} className="w-full h-[250px] object-cover mb-4 rounded-t-xl"></img>
                        </Link>
                        <Link href={`/blogs/${i.slugs}`} className={styles.blogs_links}>
                            <span className={styles.blogs_title}>{i.blogTitle}</span>
                            <span className={styles.blogs_desc} dangerouslySetInnerHTML={{ __html: i.blogDesc }}></span>
                        </Link>
                    </div>)
                })
            }
        </>
    )
}

export default HomeBlogs
