import { useMemo, useState } from "react";
import "./App.css";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from "@react-google-maps/api";

export default function Home() {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDIsT-zUfdy3f0DPzH9G9Fh36IzZiOqiss",
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}

function Map() {
    const [markers, setMarkers] = useState([]);
    const [selected, setSelected] = useState(null);

    const center = useMemo(() => ({ lat: 40.757339, lng: -73.985992 }), []);

    return (
        <GoogleMap
            zoom={10}
            center={center}
            mapContainerClassName="map-container"
            onClick={(event) => {
                setMarkers((current) => [
                    ...current,
                    {
                        lat: event.latLng.lat(),
                        lng: event.latLng.lng(),
                        time: new Date(),
                    },
                ]);
            }}
        >
            {markers.map((marker) => (
                <Marker
                    key={marker.time.toISOString()}
                    position={{ lat: marker.lat, lng: marker.lng }}
                    onClick={() => {
                        setSelected(marker);
                    }}
                />
            ))}

            {selected ? (
                <InfoWindow
                    position={{ lat: selected.lat, lng: selected.lng }}
                    onCloseClick={() => {
                        setSelected(null);
                    }}
                >
                    <div>
                        <h2>
                            Location Added!
                        </h2>
                        <p>Pertinent information about the Location</p>
                    </div>
                </InfoWindow>) : null}
            
        </GoogleMap>
    );
}