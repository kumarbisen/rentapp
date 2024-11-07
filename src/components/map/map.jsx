// we are using React Leaflet library
import { MapContainer,TileLayer } from "react-leaflet";
import "./map.scss"
import Pin from "../pin/pin";
import "leaflet/dist/leaflet.css";
function Map({items}){
  
    return(
        <MapContainer center={[25.608357, 85.161750]} zoom={12} scrollWheelZoom={false} className="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {items.map(item=>{
          return <Pin item={item} key={item.id}/>
})}
      </MapContainer>
    )
}

export default Map;