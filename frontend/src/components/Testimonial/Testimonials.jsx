import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
import ava04 from "../../assets/images/ava-4.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swiperToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive:[
        {
            breakpoint : 992,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite:true,
                dots:true,
            },
        },
        {
            breakpoint : 576,
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1, 
            },
        },
    ]
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          I've just come back from the Taj Express tour in India. It was
          amazing! Our tour leader Yusuf was the best. So knowledgeable, kind
          and one of life's gentlemen. The tour was the right balance of
          sightseeing and time out. The hotels were a great blend of old and
          new. I highly recommend Travel World and will definitely be using your
          company again.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Zade Meadows</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Excellent! We travelled to Bali and the Komodo National Park in June
          2023.Our trip was outstanding,very well organised by James our
          consultant.We saw some amazing sights,met some lovely people and
          stayed in amazing hotels.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Stella Harper</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          My partner and I spent 2 weeks in Cambodia and Thailand. We visited
          the temples of Angkor and travelled via Phnom Pehn to the Cardamom
          Mountains where we spent a few days in a river lodge. We then relaxed
          on the beaches of Koh Kood before heading home via a couple of days in
          Bangkok.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Crew Lansther</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        Overall experience was Awesome. Our Agent did a very good job in customizing our holiday as per our requirement. We had a memorable holiday. Hotel at Phuket and Bangkok was great, good location, clean and friendly staff. Last but not the least Thank you Travel World for meeting our requirements and for a prompt response whenever required.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava04} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Lyra Abbott</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
