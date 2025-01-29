import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Product</h2>
          <p>
           Kami menghadirkan rangkaian produk kecantikan berkualitas yang dirancang untuk memenuhi kebutuhan perawatan dan riasan Anda. Mulai dari serum wajah yang memberikan nutrisi mendalam, lipstik dengan warna memukau, hingga body wash dan body lotion untuk menjaga kelembapan kulit Anda. Tak ketinggalan, krim wajah untuk perawatan intensif dan blush on yang memberikan sentuhan akhir sempurna pada penampilan Anda. Semua produk kami dibuat dengan bahan pilihan untuk mendukung kecantikan alami Anda setiap hari.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4 image-gallery"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
