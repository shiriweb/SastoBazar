import React, { useState } from "react";
import AboutImg from "../../assets/images/aboutus.png";
import DetailsInfo from "../details-info/DetailsInfo";

const MoreAbout = () => {
  const [showMore, setShowMore] = useState(false);
  console.log(showMore);

  const handleShow = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="flex justify-center ml-10">
        <img
          src={AboutImg}
          alt="Sasto Bazar"
          className="w-full h-full max-w-md object-contain animate-moveUpDown"
        />
        <div className="font-poppins px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold leading-none sm:text-4xl">
                <span className="mr-2">Our Story</span>
                <span className="text-orange-500">Our Story</span>
              </h2>

              <p className="mb-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                fuga cum optio qui eos doloremque sed perspiciatis fugit nemo
                magni
              </p>
              <>
                <p className="mb-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  fuga cum optio qui eos doloremque sed perspiciatis fugit nemo
                  magni
                </p>
              </>
              <button
                className="inline-block py-2 px-4 text-white bg-orange-500 hover:bg-orange-600 rounded-lg no-underline"
                onClick={handleShow}
              >
                About Our Company
              </button>
            </div>
          </div>
        </div>
        {showMore ? <DetailsInfo /> : ""}
      </div>
    </>
  );
};

export default MoreAbout;
