import SingleItem from "./SingleItem";


const Items = (props) => {

    const carouselItems = document.querySelector('.carouselItems')
    
    const scroll = (scrollOffset) => {
        carouselItems.scrollLeft += scrollOffset;
    }

    return (

    <div className="carousel">
       
    <h2 className="header">Sponsored items based on your recent views</h2>
    <button onClick={() => scroll(-1200)}>
        <span className="material-icons">
            chevron_left
            </span>
        </button>
    <div className="carouselItems">
        {props.products.map((elem) => {
            return (
                <SingleItem elem={elem} key={elem.product_id} />
        )})}

    </div>
        <button onClick={() => scroll(1150)}>
            <span className="material-icons">
            chevron_right
            </span>
        </button>
    </div>
    )
}

export default Items;