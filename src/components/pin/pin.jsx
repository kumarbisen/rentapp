import './pin.scss'
import { Marker,Popup } from 'react-leaflet'

import { Link } from 'react-router-dom';
function Pin({item}) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
          <Popup className='popupContainer'>
            <img src={item.images} alt="" />
            <div className="textContainer">
                <Link to={`/${item.id}`}>{item.title}</Link>
                <span >{item.bedroom} bedroom</span>
                <b>${item.price}</b>
            </div>
           
          </Popup>
        </Marker>
  )
}
export default Pin;