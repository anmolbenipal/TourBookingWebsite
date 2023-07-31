import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Track the weather and extreme weather situations along your route to make every trip a safe journey, whether it's sunny, rainy, or snowing.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Discover, plan & book your perfect trip with comprehensive guides to destinations all around the world according to your budget, and find great things to do & see.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "To provide the best tour and travel experiences, our packages are customizable at the time of booking. Personalize your holiday packages online.",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md='6' sm='12' className='mb-4' key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
