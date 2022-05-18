import React, { useState } from 'react'
import reviews from './data';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa'

function Review() {
    let [index,setIndex]=useState(2);
    const {name,job,image,text}=reviews[index];

    const decrement=()=>{
        if(index===0){
            setIndex(reviews.length-1);
        }else{
            setIndex(--index);
        }
        console.log(index);
        
    }

    const increment=()=>{
        if(index===reviews.length-1){
            setIndex(0);
        }else{
            setIndex(++index);
        }
        console.log(index);
    }

    const random=()=>{
        let cur=Math.floor(Math.random()*reviews.length);
        setIndex(cur);
        console.log(index);
    }
  return (
    <article className="review">
        <div className="img-container">
            <img src={image} alt={name} className='person-img'/>
            <span className="quote-icon">
                <FaQuoteRight/>
            </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
            <button className="pre-btn" onClick={decrement}>
                <FaChevronLeft/>
            </button>
            <button className="next-btn" onClick={increment}>
                <FaChevronRight/>
            </button>
            <button className="random-btn" onClick={random}>
                Surprise me
            </button>
        </div>
    </article>
  )
}

export default Review