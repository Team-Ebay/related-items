import SingleItem from "./SingleItem";

const Items = (props) => {
    
    return (

    <div className="carousel">
        <button aria-label="Previous slide" class="carousel__previous" type="button"></button>
    <h2 className="header">Sponsored items based on your recent views</h2>
    {props.products.map((elem) => {
        return (
            <SingleItem elem={elem} key={elem.product_id} />
    )})}
        <button aria-label="Next slide" class="carousel__next" type="button"></button>
    </div>
    )
}

export default Items;