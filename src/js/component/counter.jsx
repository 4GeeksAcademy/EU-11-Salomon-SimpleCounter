import React from "react";

let counter = 0;

const Counter = (props) => {
     let count = String(props.count);

     while (count.length < 6) {
          count = "0" + count;
     }

     const counterCards = count.split('').map((digit, index) =>
      <CounterCard key={index} counterDigit={digit} color={props.color} />
     );

     return (
          <div className="container-fluid bg-black d-flex justify-content-center py-5">
          {counterCards}
          <div/>
          );

     const CounterCard = (props) => {
          return (
          <div className="card bg-black m-1 custom-container">
               <div className="card-body border rounded-3 custom-content" style={{ background:"black"}}>
                    <h5 className="card-title custom-title">{props.counterDigit}</h5>
               <div/>
          <div/>
          );
     };

export default Counter;
