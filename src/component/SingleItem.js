const SingleItem = (props) => {

    return (
       
        <div className="singleItem">

            <img className="backImage" src={props.elem.image_url} alt='none' />
            <p className="itemName">{props.elem.name}</p>            
            <p className="itemDesc">{props.elem.condition}</p>
            <h2 className="price">{props.elem.price}</h2>
            <p className="itemDesc">{props.elem.shipping}</p>
            <p className="itemDesc">{props.elem.rating}</p>
            <h3 className="itemDesc">{props.elem.items_sold}</h3>

        </div>
    )
}

export default SingleItem