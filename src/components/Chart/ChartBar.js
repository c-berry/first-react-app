import React from "react";

import "./ChartBar.css";

function ChartBar(props) {
    let barFillHeight = "0%";

    // Give percentage between 0-100 that bar should be filled:
    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill"
                     // Style expects js object:
                     style={{height: barFillHeight}}>
                </div>
            </div>
            <div className="chart-bar__label">
                {props.label}
            </div>
        </div>
    );
}

export default ChartBar;