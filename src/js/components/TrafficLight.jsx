import React, { useState } from "react";

const TrafficLight = () => {
    // Definimos el estado inicial (todas apagadas)
    const [selectedColor, setSelectedColor] = useState(" ");
    //Alternar Color
    const cycleColor = () => {
        if (selectedColor === "red") setSelectedColor("yellow");
        else if (selectedColor === "yellow") setSelectedColor("green");
        else if (selectedColor === "green") setSelectedColor("red");
        else setSelectedColor("red"); // Si está apagado, empezamos por el rojo
    };

    return (
        <div className="text-center">
            <div className="traffic-light-container">
                <div id="trafficTop"></div>
                <div id="container">
                    {/* Luz Roja */}
                    <div
                        onClick={() => setSelectedColor("red")}
                        className={"light red" + (selectedColor === "red" ? " glow" : "")}>
                    </div>

                    {/* Luz Amarilla */}
                    <div
                        onClick={() => setSelectedColor("yellow")}
                        className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}>
                    </div>

                    {/* Luz Verde */}
                    <div
                        onClick={() => setSelectedColor("green")}
                        className={"light green" + (selectedColor === "green" ? " glow" : "")}>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary mt-3" onClick={cycleColor}>
                Alternar Color
            </button>
        </div>
            );
};

            export default TrafficLight;