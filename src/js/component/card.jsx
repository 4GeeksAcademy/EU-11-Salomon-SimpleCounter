import React from "react";

function Card(props) {
    let seconds = props.seconds; // the seconds
    let secondsString = "000000" + seconds; // Prepend with leading zeros
    let finalSecondsString = secondsString.slice(-6); // Only keep the last six characters
    // spits the parts of the digets into tables
    let digits = finalSecondsString.split('');

    return (
        <div className="container d-flex justify-content-center">
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <div className="counter">
                            {/* map is like a table so this function goes to every didget and creats a card for them (for the max amount of didgets)*/}
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