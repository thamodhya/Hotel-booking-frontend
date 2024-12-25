import React, { useState } from "react";
import RoomResult from "../common/RoomResult";
import RoomSearch from "../common/RoomSearch";

const HomePage = () => {
    const [roomSearchResults, setRoomSearchResults] = useState([]);

    // Function to handle search results
    const handleSearchResult = (results) => {
        setRoomSearchResults(results);
    };

    return (
        <div className="home">
            {/* HEADER / BANNER ROOM SECTION */}
            <section>
                <header className="header-banner">
                    <img
                        src="https://tse2.mm.bing.net/th?id=OIP.vYuDcCRJ7X__i6qDJP3ZRQHaE8&pid=Api"
                        alt="King Hotel"
                        className="header-image"
                    />
                    <div className="overlay"></div>
                    <div className="animated-texts overlay-content">
                        <h1>
                            Welcome to <span className="hotel-color">King Hotel</span>
                        </h1>
                        <br />
                        <h3>Step into a haven of comfort and care</h3>
                    </div>
                </header>
            </section>

            {/* SEARCH/FIND AVAILABLE ROOM SECTION */}
            <RoomSearch handleSearchResult={handleSearchResult} />
            <RoomResult roomSearchResults={roomSearchResults} />

            {/* <h4>
                <a className="view-rooms-home" href="/rooms">
                    All Rooms
                </a>
            </h4> */}
            <div className="view-rooms-container">
                <a className="view-rooms-button" href="/rooms">
                    Explore All Rooms
                </a>
            </div>


            <h2 className="home-services">
                Services at <span className="king-color">King Hotel</span>
            </h2>

            {/* SERVICES SECTION */}
            <section className="service-section">
                <div className="service-card">
                    <img
                        src="https://tse2.mm.bing.net/th?id=OIP.XScUlVT0JPQ-Mr5DpTg2HwHaHa&pid=Api"
                        alt="Air Conditioning"
                    />
                    <div className="service-details">
                        <h3 className="service-title">Air Conditioning</h3>
                        <p className="service-description">
                            Stay cool and comfortable throughout your stay with our individually controlled in-room air conditioning.
                        </p>
                    </div>
                </div>
                <div className="service-card">
                    <img
                        src="https://tse3.mm.bing.net/th?id=OIP.4IDFZpXHcNNK95Q208Zv-QHaHa&pid=Api"
                        alt="Mini Bar"
                    />
                    <div className="service-details">
                        <h3 className="service-title">Mini Bar</h3>
                        <p className="service-description">
                            Enjoy a convenient selection of beverages and snacks stocked in your room's mini bar with no additional cost.
                        </p>
                    </div>
                </div>
                <div className="service-card">
                    <img
                        src="https://tse2.mm.bing.net/th?id=OIP.4O2h5eWG1FdJEh_LpW4BAwHaHa&pid=Api"
                        alt="Parking"
                    />
                    <div className="service-details">
                        <h3 className="service-title">Parking</h3>
                        <p className="service-description">
                            We offer on-site parking for your convenience. Please inquire about valet parking options if available.
                        </p>
                    </div>
                </div>
                <div className="service-card">
                    <img
                        src="https://tse4.mm.bing.net/th?id=OIP.NDGWd4vneqUm1bsltj2cSAHaHa&pid=Api"
                        alt="WiFi"
                    />
                    <div className="service-details">
                        <h3 className="service-title">WiFi</h3>
                        <p className="service-description">
                            Stay connected throughout your stay with complimentary high-speed Wi-Fi access available in all guest rooms and public areas.
                        </p>
                    </div>
                </div>
            </section>

            {/* AVAILABLE ROOMS SECTION */}
            <section></section>
        </div>
    );
};

export default HomePage;
