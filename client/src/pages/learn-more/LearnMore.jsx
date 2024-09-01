import React from "react";
import CommonPage from "../commonPages/CommonPage";
import AboutImg from "../../assets/images/aboutus.png";

const LearnMore = () => {
  return (
    <>
      <CommonPage
        title="Information"
        subtitle="MoreOver"
        desc1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fuga cum optio qui eos doloremque sed perspiciatis fugit nemo"
        desc2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fuga cum optio qui eos doloremque sed perspiciatis fugit nemomagni"
        btnAbout="Explore Our Services"
        visit="/more-info"
        imageAbout={AboutImg}
      />
    </>
  );
};

export default LearnMore;
