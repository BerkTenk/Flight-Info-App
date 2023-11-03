import React, { useEffect, useState } from 'react'
import axios from 'axios'
function FlightList({ filters }) {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState("");

    useEffect(() => {
        // axios("localhost:3000/GetFlights")
        //     .then((res) => {
            const staticFlightsData = [
                {
                    "id": 1,
                    "name": "IST-JFK",
                    "departure": "IST",
                    "arrival": "JFK",
                    "departureDate": "2023-02-01",
                    "arrivalDate": "2023-02-02",
                    "price": 500,
                    "departureTime":"08:05",
                    "arrivalTime":"10:50",
                    "duration":"2h 30m",
                    "arrivalAirport":"John F. Kennedy International Airport",
                    "arrivalCity":"New York / USA",
                    "departureAirport":"İstanbul Airport",
                    "departureCity":"İstanbul / Türkiye"
                },
                {
                    "id": 2,
                    "name": "JFK-LHR",
                    "departure": "JFK",
                    "arrival": "LHR",
                    "departureDate": "2023-10-06",
                    "arrivalDate": "2023-10-07",
                    "price": 200,
                    "departureTime":"11:05",
                    "arrivalTime":"16:50",
                    "duration":"4h 30m",
                    "departureAirport":"John F. Kennedy International Airport",
                    "departureCity":"New York / USA",
                    "arrivalAirport":"Heathrow Airport",
                    "arrivalCity":"London / England"
                },
                {
                    "id": 3,
                    "name": "IST-LHR",
                    "departure": "IST",
                    "arrival": "LHR",
                    "departureDate": "2023-11-08",
                    "arrivalDate": "2023-11-09",
                    "price": 600,
                    "departureTime":"08:05",
                    "arrivalTime":"14:50",
                    "duration":"5h 30m",
                    "arrivalAirport":"Heathrow Airport",
                    "arrivalCity":"London / England",
                    "departureAirport":"İstanbul Airport",
                    "departureCity":"İstanbul / Türkiye"
                },
                {
                    "id": 4,
                    "name": "JFK-IST",
                    "departure": "JFK",
                    "arrival": "IST",
                    "departureDate": "2023-09-05",
                    "arrivalDate": "2023-09-06",
                    "price": 1000,
                    "departureTime":"20:05",
                    "arrivalTime":"21:50",
                    "duration":"1h 30m",
                    "departureAirport":"John F. Kennedy International Airport",
                    "departureCity":"New York / USA",
                    "arrivalAirport":"İstanbul Airport",
                    "arrivalCity":"İstanbul / Türkiye"
                },
                {
                    "id": 5,
                    "name": "JFK-LHR",
                    "departure": "JFK",
                    "arrival": "LHR",
                    "departureDate": "2023-03-05",
                    "arrivalDate": "2023-03-06",
                    "price": 300,
                    "departureTime":"08:05",
                    "arrivalTime":"10:50",
                    "duration":"2h 30m",
                    "departureAirport":"John F. Kennedy International Airport",
                    "departureCity":"New York / USA",
                    "arrivalAirport":"Heathrow Airport",
                    "arrivalCity":"London / England"
                }, {
                    "id": 6,
                    "name": "CDG-LHR",
                    "departure": "CDG",
                    "arrival": "LHR",
                    "departureDate": "2023-04-05",
                    "arrivalDate": "2023-04-06",
                    "price": 700,
                    "departureTime":"07:05",
                    "arrivalTime":"10:50",
                    "duration":"3h 30m",
                    "arrivalAirport":"Heathrow Airport",
                    "arrivalCity":"London / England",
                    "departureAirport":"Charles de Gaulle Airport",
                    "departureCity":"Paris / France"
                },
                {
                    "id": 7,
                    "name": "JFK-CDG",
                    "departure": "JFK",
                    "arrival": "CDG",
                    "departureDate": "2023-03-01",
                    "arrivalDate": "2023-03-02",
                    "price": 300,
                    "departureTime":"08:05",
                    "arrivalTime":"13:50",
                    "duration":"5h 00m",
                    "arrivalAirport":"Charles de Gaulle Airport",
                    "arrivalCity":"Paris / France",
                    "departureAirport":"John F. Kennedy International Airport",
                    "departureCity":"New York / USA"
                },
                {
                    "id": 8,
                    "name": "DXB-LHR",
                    "departure": "DXB",
                    "arrival": "LHR",
                    "departureDate": "2023-07-05",
                    "arrivalDate": "2023-07-06",
                    "price": 1000,
                    "departureTime":"09:05",
                    "arrivalTime":"15:50",
                    "duration":"5h 30m",
                    "arrivalAirport":"Heathrow Airport",
                    "arrivalCity":"London / England",
                    "departureAirport":"Dubai International Airport",
                    "departureCity":"Dubai / UAE"
                },
                {
                    "id": 9,
                    "name": "JFK-DXB",
                    "departure": "JFK",
                    "arrival": "DXB",
                    "departureDate": "2023-03-05",
                    "arrivalDate": "2023-03-06",
                    "price": 1200,
                    "departureTime":"08:30",
                    "arrivalTime":"18:50",
                    "duration":"9h 30m",
                    "arrivalAirport":"Dubai International Airport",
                    "arrivalCity":"Dubai / UAE",
                    "departureAirport":"John F. Kennedy International Airport",
                    "departureCity":"New York / USA"
                },
                {
                    "id": 10,
                    "name": "IST-CDG",
                    "departure": "IST",
                    "arrival": "CDG",
                    "departureDate": "2023-09-05",
                    "arrivalDate": "2023-09-06",
                    "price": 500,
                    "departureTime":"08:05",
                    "arrivalTime":"11:50",
                    "duration":"3h 30m",
                    "arrivalAirport":"Charles de Gaulle Airport",
                    "arrivalCity":"Paris / France",
                    "departureAirport":"İstanbul Airport",
                    "departureCity":"İstanbul / Türkiye"
                }
            ];
                let filteredFlights = staticFlightsData;
                if (filters.departureAirport) {
                    filteredFlights = filteredFlights.filter((flight) =>
                        flight.departure.toLowerCase().includes(filters.departureAirport.toLowerCase())
                    )
                };
                if (filters.arrivalAirport) {
                    filteredFlights = filteredFlights.filter((flight) =>
                        flight.arrival.toLowerCase().includes(filters.arrivalAirport.toLowerCase())
                    );
                };
                if (filters.departureDate) {
                    filteredFlights = filteredFlights.filter((flight) =>
                        flight.departureDate.toLowerCase().includes(filters.departureDate.toLowerCase())
                    );
                };
                if (filters.arrivalDate) {
                    filteredFlights = filteredFlights.filter((flight) =>
                        flight.arrivalDate.toLowerCase().includes(filters.arrivalDate.toLowerCase())
                    );
                };
                if (sort === "price") {
                    filteredFlights.sort((a, b) => a.price - b.price);
                } else if (sort === "name") {
                    filteredFlights.sort((a, b) => a.name.localeCompare(b.name));
                } else if (sort === "duration") {
                    filteredFlights.sort((a, b) => a.duration.localeCompare(b.duration));
                } else if (sort === "depTime") {
                    filteredFlights.sort((a, b) => a.departureTime.localeCompare(b.departureTime));
                } else if (sort === "arrTime") {
                    filteredFlights.sort((a, b) => a.arrivalTime.localeCompare(b.arrivalTime));
                }

                setFlights(filteredFlights);
    }, [filters, sort]);


    const [expandedFlightId, setExpandedFlightId] = useState(null);

    const toggleFlightDetails = (flightId) => {
        if (expandedFlightId === flightId) {
            setExpandedFlightId(null);
        } else {
            setExpandedFlightId(flightId);
        }
    };

    if (loading) {
        return <p>Loading...</p>
    }
    if (!flights || flights.length === 0) {
        return <p>Flight not found.</p>
    }


    return (
        <div>
            <br />
            <div className='bar2'>
                <button className='button-1' onClick={() => setSort("price")}>Sort By Price</button>
                <button className='button-1' onClick={() => setSort("name")}>Sort By Name</button>
                <button className='button-1' onClick={() => setSort("duration")}>Sort By Duration</button>
                <button className='button-1' onClick={() => setSort("depTime")}>Sort By Departure Time</button>
                <button className='button-1' onClick={() => setSort("arrTime")}>Sort By Arrival Time</button>
            </div>
            <ul className='list'>
                {flights.map((flight) => (
                    <li key={flight.id}>
                        Name:{flight.name}  <br />
                        Departure:{flight.departure} <br />
                        Arrival:{flight.arrival} <br />
                        Departure Date: {flight.departureDate} <br />
                        Arrival Date: {flight.arrivalDate} <br />
                        Departure Time: {flight.departureTime} <br />
                        Arrival Time: {flight.arrivalTime} <br />
                        Duration : {flight.duration} <br />
                        Price: {flight.price}₺ <br />
                        <button className='button-1' onClick={() => toggleFlightDetails(flight.id)}>
                            {expandedFlightId === flight.id ? 'Hide Details' : 'Show Details'}
                        </button>
                        {expandedFlightId === flight.id && (
                            <div>
                                Departure City / Country: {flight.departureCity} <br />
                                Arrival City / Country: {flight.arrivalCity}  <br />
                                Departure Airport: {flight.departureAirport} <br />
                                Arrival Airport: {flight.arrivalAirport} <br />
                            </div>
                        )}
                        

                    </li>
                )
                )}
            </ul>
        </div>
    )
}

export default FlightList