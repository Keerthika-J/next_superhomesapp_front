import React, { useState } from 'react';
import styles from "./Interior.module.css";

function Gallery() {
  const [loaded, setLoaded] = useState(false);
  const loadMore = () => {
    setLoaded(!loaded);
    console.log(loaded);

  }
  return (
    <div className={`${styles.masonary_grid_interiors} mt-8`} loading="lazy">
      <img src="/images/interiors/gallery/superhomes-interior-1.webp"></img>
      <img src="/images/interiors/gallery/superhomes-interior-2.webp"></img>
      <img src="/images/interiors/gallery/superhomes-interior-3.webp"></img>
      <img src="/images/interiors/gallery/superhomes-interior-4.webp"></img>
      <img src="/images/interiors/gallery/superhomes-interior-5.webp"></img>
      <img src="/images/interiors/gallery/superhomes-interior-6.webp"></img>


      <div style={{ display: loaded ? "block" : "none" }}>
        <img src="/images/interiors/gallery/superhomes-interior-7.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-8.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-9.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-10.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-11.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-12.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-13.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-14.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-15.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-16.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-17.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-18.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-19.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-20.webp"></img>

        <img src="/images/interiors/gallery/superhomes-interior-21.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-22.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-23.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-24.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-25.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-26.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-27.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-28.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-29.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-30.webp"></img>

        <img src="/images/interiors/gallery/superhomes-interior-31.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-32.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-33.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-34.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-35.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-36.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-37.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-38.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-39.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-40.webp"></img>

        <img src="/images/interiors/gallery/superhomes-interior-41.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-42.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-43.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-44.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-45.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-46.webp"></img>
        <img src="/images/interiors/gallery/superhomes-interior-47.webp"></img>
      </div>

      <div className={`${styles.read_more_div} pt-4 md:pt-8`}>
        {loaded ? <button className="button-circle-white mx-auto block" onClick={()=>{setLoaded(!loaded)}}>LOAD LESS</button> : <button className="button-circle-white mx-auto block" onClick={()=>{setLoaded(!loaded)}}>LOAD MORE</button>}
      </div>
    </div>
  )
}

export default Gallery
