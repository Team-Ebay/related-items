import SingleItem from "./SingleItem";


const Items = (props) => {

    return (

    <div className="carousel">
       
    <h2 className="header">Sponsored items based on your recent views</h2>

    <div className="carouselItems">
        {props.products.map((elem) => {
            return (
                <SingleItem elem={elem} key={elem.product_id} />
        )})}

    </div>

    </div>
    )
}

export default Items;