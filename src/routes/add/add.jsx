import './add.scss'
function Add() {
  return (
    <div className='add'>
        <div className="textContainer">
            <h1>Add New Post</h1>
            <form onSubmit="#">
                <input type="text" name='title' ></input>
                <input type="number" name='price'></input>
                <input type="address" name='address'></input>
                <input type="description" name='discription'></input>

            </form>

        </div>

        <div className='imageContainer'>
                image
        </div>
        

    </div>
  )
}
export default Add