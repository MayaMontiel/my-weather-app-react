import React from "react";
import Daily from "./Daily";

export default function DailyForecast() {
    return (
        <div className="DailyForecast">
            <small>Daily</small>
            <hr />
            <div className="daily">
                <div className="row">
                    <Daily />
                    <Daily />
                    <Daily />
                    <Daily />
                    <Daily />
                </div>
            </div>
        </div>
    );
}
