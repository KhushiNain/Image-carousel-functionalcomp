import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {

    const [index,setIndex]=useState(0);

    const handleBackArrow=()=>{
        if(index==0){
            setIndex(images.length-1)
        }else{
            setIndex((prev)=>prev-1)
        }
    }
    const handleForwardArrow=()=>{
        index==2?setIndex(0):setIndex((prev)=>prev+1)  
    }

    return(
        // empty react fragment to wrap all the elements)
        <>
        <img className="image" src={images[index].img} alt="" />
        <ArrowBackIosIcon className="button left-btn" onClick={handleBackArrow}/>
        <ArrowForwardIosIcon className="button right-btn" onClick={handleForwardArrow}/>
        <h1 className="heading text">{images[index].title}</h1>
        <p className="text subheading">{images[index].subtitle}</p>

        </>
    )
}

export default Carousel;
