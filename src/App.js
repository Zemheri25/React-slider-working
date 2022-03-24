import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  const {id, image, name, title, quote} = people[index];
   
  const length = people.length - 1
 
  const nextPerson = () => {
    if(index !== length) {
      setIndex(index +1)
    }
    else{
      setIndex(0)
    }
  }

  const prevPerson = () => {
    if(index !== 0) {
      setIndex(index - 1);
    }
    else {
      setIndex(length)
    }
  }




  return (
    <div className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">

         <article key={id}>
            <img src={image} alt={name} className = "person-img"/>
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon"/>

          </article>
        
        <button className="prev">
          <FiChevronLeft onClick={prevPerson}/>
        </button>

        <button className="next" onClick={nextPerson}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default App;
