import Items from "./Items";


const ProductCarousel = (props) => {

    return(
        <>

                <Items products={props.products} />

        </>
    )

}

export default ProductCarousel;