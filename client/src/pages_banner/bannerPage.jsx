import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import FirstBanner from "../assets/images/1.png";
import SecondBanner from "../assets/images/2.png";
import ThirdBanner from "../assets/images/3.png";
import FourthBanner from "../assets/images/4.png";
import {items} from "./bannerData";

const BannerPage= () => {
  return (
    <>
    <Carousel indicators ={false}>
        <items.map ((value, index)=> {
                <Carousel.Item key={value.id}>
                    <img src={value,image} alt='{value, title}'/>
                </Carousel.Item>
                </>
            </Carousel>
            }
        })>
    </>
  );
}

export default BannerPage;