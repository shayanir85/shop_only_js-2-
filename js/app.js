const products = {
    Data: []
}
fetch('product.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        products.Data = data.data.products;
    })
