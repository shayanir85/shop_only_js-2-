function formatRial(num) {
    // Convert number to string and add thousands separators
    const formatted = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Map English digits to Persian digits
    const persianDigits = {
        '0': '۰', '1': '۱', '2': '۲', '3': '۳', '4': '۴',
        '5': '۵', '6': '۶', '7': '۷', '8': '۸', '9': '۹'
    };

    // Replace each digit with its Persian equivalent
    return formatted.replace(/[0-9]/g, d => persianDigits[d]) + ' تومان';
}
function rate(rate) {
    switch (rate) {
        case 0:
            return "☆☆☆☆☆";
            break;
        case 1:
            return "★☆☆☆☆";
            break;
        case 2:
            return "★★☆☆☆";
            break;
        case 3:
            return "★★★☆☆";
            break;
        case 4:
            return "★★★★☆";
            break;
    }
}


const url = new URLSearchParams(window.location.search);//gets the url
const id = url.get('id');// gets the index variable
const numid = parseInt(id);//parse it to int 
const products = {
    Data: []
}
const list = document.querySelector('.products')//gets a html tag to print 
const Details = document.querySelector('.details')
fetch('../json/product.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        products.Data = data.products;
        products.Data.forEach((val, i) => {
            list.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <img src="${val.image}" class="card-img-top" alt="Product 1">
                        <div class="card-body">
                            <h5 class="card-title">${val.title}</h5>
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="h5" >${formatRial(val.price.current)}</span>
                                <a href="product.html?id=${val.id}" class="btn btn-primary">View Details</a>
                            </div>
                        </div>
                    </div>
                </div> 
            `;
        });
    })
fetch('../json/product.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        products.Data = data.products;
        products.Data.forEach((val, i) => {
            if (id == val.id) {
                Details.innerHTML += `
                <div class="row ">
                <div class="col-md-6 ">
                    <img src="${val.image}" class="img-fluid rounded" alt="Product Image">
                </div>
                <div class="col-md-6">
                    <h2>${val.title}</h2>
                    <div class="mb-3">
                        <span class="text-warning">${rate(val.rating)}</span>
                        <span class="text-muted">Ratings: ${val.rating}</span>
                    </div>
                    <h3 class="text-primary">${formatRial(val.price.current)}</h3>
                    <p class="lead">High-quality wireless headphones with noise cancellation.</p>
                    
                    <div class="mb-4">
                        <h5>Description</h5>
                        <p>${val.description} </p>
                    </div>
                    
                    <div class="row mb-4">
                        <div class="col-md-4">
                            <label for="quantity" class="form-label">تعداد</label>
                            <select class="form-select" id="quantity">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="d-grid gap-2 d-md-block">
                        <button class="btn btn-primary btn-lg me-md-2">سبد خرید</button>
                        <button class="btn btn-outline-secondary btn-lg">خرید</button>
                    </div>
                </div>
            </div>
                `;
            }
        });
    });
