import React from "react";
import CommonPage from "../commonPages/CommonPage";
import AboutImg from "../../assets/images/aboutus.png";

const AboutUs = () => {
  return (
    <>
      <CommonPage
        title="About"
        subtitle="Sasto Bazar"
        desc1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fuga cum optio qui eos doloremque sed perspiciatis fugit nemo magni"
        desc2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fuga cum optio qui eos doloremque sed perspiciatis fugit nemo magni"
        btnAbout="Learn More"
        visit="/more-info"
        imageAbout={AboutImg}
      />
    </>
  );
};

export default AboutUs;
