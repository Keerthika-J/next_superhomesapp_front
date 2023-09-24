import React from "react";
import Slider from "react-slick";

function TestimonialSlider() {
  const SliderData =
    [
      {
        image: "/images/portfolio_1.png",
        name: "Mr. Krishna Prasad Muttukadu",
        place: 'ECR',
        desc: "Our experience of building a house for the first time was a pleasant one thanks to Mr. Varun and his team at SuperHomes. From the get go, they were very transparent and explained every stage of construction in detail which gave us confidence to go ahead with them. The schedule they gave us was followed and communication with them was prompt. A very professional bunch of people made our experience great and made us realize our dream home just as we pictured it. I would have no second thoughts to take up their service again, which I hope to soon. Thank you SuperHomes once again and all the very best."
      },
      {
        image: "/images/portfolio_2.png",
        name: "Mrs. Rehana Sherin",
        place: 'Palavakkam',
        desc: "I was looking to build a house for rental purposes and had a strict budget. The team at SuperHomes came up with designs and suggestions best suited for the purpose. They were flexible with the payment schedule and the team showed personal interest in the construction. We are very happy with the quality of work and would definitely recommend them to our family and friends."
      },
      {
        image: "/images/portfolio_3.png",
        name: "Mr. Mohammed Wasim",
        place: 'Kodambakkam',
        desc: "My family and I had always thought building a house would be a stressful experience but SuperHomes made it easy for us. They took care of the entire process, right from the designing & planning stages till final hand over, everything was handled by them efficiently. Someone from the company was available at all time to clear our doubts and guide us. Their constant monitoring of quality at site enabled us to relax and enjoy the experience of building our Home."
      },
      {
        image: "/images/portfolio_4.png",
        name: "Mr.Sharath & Ms.Monisha",
        place: 'Avadi',
        desc: "We are very satisfied with the process that SuperHomes has in place. We are halfway through construction of our own house in Avadi, I must compliment the SuperHomes Team's attention to detail. The effort put in on the design-side (elevations, cross ventilation, sunlight, permit requirements, etc.) has paid off when it came to implementing everything in the small and complex size of the project site. We are nearing the end of the design phase and at every meeting, we have been pleasantly surprised by their knowledge of materials and their understanding of what we were trying to accomplish. It made the whole process enjoyable."
      },
      {
        image: "/images/portfolio_5.png",
        name: "Mr. Nikhil Khicha",
        place: 'Nungambakkam',
        desc: "Totally adore the creative skill set of Lupa mam and appreciate the dedication shown in order to complete the project within time, without having to compromise in any aspect of our design. Way to go."
      },
      {
        image: "/images/portfolio_6.png",
        name: "Mr. Jeya Krishnan",
        place: 'Koyambedu',
        desc: "Very happy with the entire experience provided by SuperHomes. I approached them for interior works and had a budget in mind. The final outcome turned out to be much more premium than I had expected and was completed well within the given budget. The design team is knowledgeable and take personal interest in delivering quality. Would definitely recommend their services to anyone looking for Home Interiors."
      }
    ];
  const settings =
  {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true
  };

  return (
    <>
      <Slider {...settings}>
        {SliderData.map((slide, index) =>
          <div key={index}>
            <div className="mt-8 flex flex-col items-center">
              <div className="w-full md:w-11/12">
                <img src="/images/quotes-start.png" className="w-10 opacity-80"></img>
                <span className="text-base block text-center">{slide.desc} </span>
                <img src="/images/quotes-end.png" className="w-10 opacity-80 float-right"></img>
              </div>
              <div className="my-8 flex justify-center items-center">
                <img src={slide.image} className="w-[60px]" />
                <div>
                  <span className="ml-4 text-[16px] block font-bold text-center">{slide.name}</span>
                  <span className="ml-4 text-[16px] block font-bold text-center">{slide.place}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </Slider>
    </>
  )
}

export default TestimonialSlider;