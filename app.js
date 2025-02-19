const div = document.querySelector('.container');
const loadingSpinner = document.querySelector('.loading-spinner');

axios('https://fakestoreapi.com/products')
.then((res) => {
console.log(res.data);
res.data.map(item => {
        div.innerHTML += `
        <div class="card" id = "child" style="width: 18rem;">
            <img width="300" height="300" src="${item.image}" class="card-img-top p-2" alt="Image">
            <div class="card-body">
                <h5 class="card-title">${item.title.slice(0 , 15)}...</h5>
                <p class="card-text">${item.description.slice(0 , 50)}...</p>
                <p class="card-text">Rs: ${item.price}</p>
                <button class="btn btn-outline-info btn-lg text">Add to cart</button>
            </div>
        </div>
        `
})
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    loadingSpinner.className = "d-none"
})