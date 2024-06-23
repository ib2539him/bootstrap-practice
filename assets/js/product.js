

const productCard = (product) => {
    const { image, price, title, description } = product;




    return(

        `
        <div class="product">

        <img src=${image}>

        <h2>${price}</h2>
        <p class="product-title">${title}</p>
        <p class="product-description">${description}</p>

        </div>

        `
    )
}


export default productCard;