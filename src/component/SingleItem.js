const SingleItem = (props) => {

    return (
       
        <div className="cardContainer">

            <div className="card">
            <div className="image">
            <img className="backImage" src={props.elem.image_url} alt='none' />
            </div>
            <p className="itemName">{props.elem.name}</p>            
            <p className="itemDesc">{props.elem.condition}</p>
            <h2 className="price">{props.elem.price}</h2>
            <p className="itemDesc">{props.elem.shipping}</p>
            <h3 className="itemDesc">{props.elem.items_sold}</h3>
            </div>

        </div>
    )
}

export default SingleItem