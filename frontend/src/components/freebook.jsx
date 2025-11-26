import React from 'react'
import list from '../../public/list.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './cards';

const FreeBook = () => {
    const filterData = list.filter((data) => data.category === "Free")
     var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 font-sans mt-5'>
       <div>
         <h1 className='font-semibold text-xl pb-2'>Free Books Offered</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sint, culpa distinctio magni quibusdam rerum alias repellat mollitia eveniet. Vel maiores debitis similique commodi repellat.</p>
       </div>
    
    <div>
        <Slider {...settings}>
          {filterData.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default FreeBook