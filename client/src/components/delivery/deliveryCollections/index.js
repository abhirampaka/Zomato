import React from 'react'
import Slider from "react-slick"
import './deliveryCollections.css';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import DeliveryItem from './deliveryItem';
const deliveryItems = [
  {
    id:1,
    title:"Pizza",
    cover : "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
  },
  {
    id:2,
    title:"Biriyani",
    cover : "https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png"
  },
  {
    id:3,
    title:"Cake",
    cover : "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"
  },
  {
    id:4,
    title:"Chicken",
    cover : "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
  },
  {
    id:5,
    title:"Burger",
    cover : "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
  },
  {
    id:6,
    title:"Noodles",
    cover : "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png"
  },
  {
    id:7,
    title:"FriedRice",
    cover : "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png"
  },
  {
    id:8,
    title:"NorthIndian",
    cover : "https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg"
  },
  {
    id:9,
    title:"Rolls",
    cover : "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
  },
  {
    id:10,
    title:"Sandwitch",
    cover : "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png"
  },
  {
    id:11,
    title:"Paneer",
    cover : "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png"
  },
  {
    id:12,
    title:"Dosa",
    cover : "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
  },
]
const settings = {
  infinite : false,
  slidesToShow : 4,
  slidesToScroll: 1,
  nextArrow :<NextArrow/>,
  prevArrow :<PrevArrow/>
};
const DeliveryCollections = () => {
  return (
    <div className="delivery-collection">
       <div className= "max-width">
        <div className='collection-title'>Eat What Makes You Happy</div>
        <Slider {...settings}>
          {deliveryItems.map((item)=>{
            return <DeliveryItem item={item}/>;
          })}
        </Slider>
       </div>
        </div>
  )
}

export default DeliveryCollections;