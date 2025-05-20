import React from "react";
import BannerImage from "../../assets/potato.png";

const Banner = () => {
  return (
    <>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* image section */}
          <div className="flex justify-center items-center">
            <img src={BannerImage} alt="" />
          </div>
          {/* text section */}
          <div>
            <h1 className="text-4xl font-semibold">Excellent Taste And Quality</h1>
            <p className="py-4 font-semibold">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere error neque delectus fugiat totam, vel exercitationem suscipit recusandae dolorem quibusdam enim, illum inventore nulla perferendis quae?
                {""}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
