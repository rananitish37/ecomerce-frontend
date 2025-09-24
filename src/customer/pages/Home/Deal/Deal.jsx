import React from 'react'
import DealCard from './DealCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function Deal() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='py-5 lg:px-20'>
        <div className='flex items-center justify-between '>
        {/* <Slider {...settings}> */}
            {[1,2,3,4,5,6].map(n => <DealCard key={n} />)}
        {/* </Slider> */}
        
        </div>
    </div>
  )
}

export default Deal
