import SingleItem from "./SingleItem";

const Items = (props) => {
    props.props.products.data.map((elem) => {
        return <SingleItem elem={elem} key={elem.product_id} />
    })
}

export default Items;