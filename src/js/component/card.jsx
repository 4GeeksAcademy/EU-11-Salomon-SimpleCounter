import React from "react";

function Card(props) {
    let seconds = props.seconds; // the seconds
    let secondsString = "000000" + seconds; // Prepend with leading zeros
    let finalSecondsString = secondsString.slice(-6); // Only keep the last six characters
    // spits the parts of the digets into tables
    let digits = finalSecondsString.split('');

    return (
        <div className="container-fluid d-flex justify-content-center p-3 mb-2 bg-black">
            <div className="row">
                <div className="card bg-black text-white">
                    <div className="card-body">
                        
                        <div className="counter">
                            {/* map is like a table so this function goes to every digit and creates a card for them (for the max amount of digits)*/}
                            {digits.map((digit, index) => 
                                <div key={index} className="counter-digit">
                                    {digit}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;