import Slider from '../../components/slider/Slider'
import './singlePage.scss'
import { singlePostData } from '../../lib/dummydata'
import { userData } from '../../lib/dummydata'
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
              <img src="/utility.png" alt="" />
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes"></div>
          <p className='title'>Nearby Places</p>
          <p className="title">Locations</p>

        </div>


      </div>
    </div>
    
  )
}
export default SinglePage