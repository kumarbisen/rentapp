import Slider from '../../components/slider/Slider'
import './singlePage.scss'
import { singlePostData } from '../../lib/dummydata'
import { userData } from '../../lib/dummydata'
import Map from '../../components/map/map'
function SinglePage() {
  return (
    <div className='singlePage'>
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">
                  ${singlePostData.price}
                </div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              ${singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">general</p>
          <div className="listVertical">
            <div className="feature">
              <img src="utility.png" alt="#" />
              <div className="featureText">
                <span>utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>

            <div className="feature">
              <img src="pet.png" alt="#" />
              <div className="featureText">
                <span>Pet policies</span>
                <p>pet are allowed </p>
              </div>
            </div>
            <div className="feature">
              <img src="fee.png" alt="#" />
              <div className="featureText">
                <span>Property fee</span>
                <p>You must have to pay fee (In Advance) </p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">

            <div className="size">
              <img src="/size.png" alt="#" />
              <span>80sq feet</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="#" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="bath.png" alt="#" />
              <span>1 bathroom</span>
            </div>
          </div>



          <p className='title'>Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="#" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>

            <div className="feature">
              <img src="pet.png" alt="#" />
              <div className="featureText">
                <span>Bus stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="fee.png" alt="#" />
              <div className="featureText">
                <span>Market</span>
                <p>500m away</p>
              </div>
            </div>

          </div>

          <p className="title">Locations</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />

          </div>

          <div className="buttons">
            <button>
              <img src="chat.png" alt="#" />
              <span>Talk to Owner</span>
            </button>
            <button>
              <img src="save.png" alt="#" />
              <span>save property</span>
            </button>
          </div>


        </div>
      </div>

    </div>





  )
}
export default SinglePage