import React, { useState } from "react";


export default function Search() {
    const [search, setSearch] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        if (search.lenght > 0) {
            alert("Enter a city");
        }
    }

    function updateSearch(event) {
        setSearch(event.target.value);
    }

    return (
        <div className = "search">
        <form className="form-inline" onSubmit={handleSubmit}>
            <input
                type="search"
                className="form-control form-control-sm mb-2 mr-2 col-9"
                placeholder="Enter City"
                autoFocus="on"
                onChange={updateSearch}
            />
            <button type="submit" className="btn btn-primary btn-sm mb-2 ml-2">
                <i className="fas fa-search"></i>
            </button>

            <button className="btn btn-primary btn-sm mb-2 ml-2">
                <i className="fas fa-map-marked-alt"></i>
            </button>
        </form>
        </div>
    );
}
