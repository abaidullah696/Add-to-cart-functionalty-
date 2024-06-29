var products = [
    {name:"White chair", headline: "Lskrhi Plus Poshish", price:"15000", image:"https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name:"Brown chair", headline: "Brown chair with poshish", price:"12000", image:"https://plus.unsplash.com/premium_photo-1705479742826-cb265b9d6999?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name:"Red Chair", headline: "Red  chair with poshing", price:"17000", image:"https://images.unsplash.com/photo-1462212210333-335063b676bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name:"Black chair", headline: "plastic black chair", price:"8000", image:"https://images.unsplash.com/photo-1489269637500-aa0e75768394?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNoYWlyfGVufDB8fDB8fHww"},
    {name:"Yellow chair", headline: "Yellow poshing chair", price:"12000", image:"https://images.unsplash.com/photo-1486946255434-2466348c2166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYWlyfGVufDB8fDB8fHww"},
    {name:"Pink chair", headline: "pink chair with poshing", price:"14000", image:"https://plus.unsplash.com/premium_photo-1690971631360-c7b4f08b4f94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"}
];

var popular = [
    {name:"Black chair", headline: "plastic black chair", price:"8000", image:"https://images.unsplash.com/photo-1489269637500-aa0e75768394?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNoYWlyfGVufDB8fDB8fHww"},
    {name:"Yellow chair", headline: "Yellow poshing chair", price:"12000", image:"https://images.unsplash.com/photo-1486946255434-2466348c2166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYWlyfGVufDB8fDB8fHww"},
    {name:"Pink chair", headline: "pink chair with poshing", price:"14000", image:"https://plus.unsplash.com/premium_photo-1690971631360-c7b4f08b4f94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"}
]
var cart = [];

function addProducts() {
    var clutter = "";
products.forEach(function (products, index) {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                <img class = "w-full h-full object-cover" src = "${products.image}"/>
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${products.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${products.headline}</h3>
                            <h4 class="font-semibold mt-2">&#x20B9;${products.price}</h4>
                        </div>
                        <button data-index = ${index} class="add w-10 h-10 rounded-full shader text-yellow-400">
                        <i data-index = ${index} class="add  ri-add-line"></i></button>
                    </div>
                </div>
            </div>`
})
document.querySelector(".products").innerHTML = clutter;
}
function popularProducts() {
    var clutter = "";
    popular.forEach(function (popular) {
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${popular.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${popular.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${popular.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">&#x20B9;${popular.price}</h4>
                    </div>
                </div>`
    })
    document.querySelector(".populars").innerHTML = clutter;
}

function addToCart() {
    document.querySelector(".products").addEventListener("click", function (details) {
        if (details.target.classList.contains(`add`) ) {
            cart.push(products[details.target.dataset.index])
            // console.log(cart)
        }
    })
}

function showCart() {
    document.querySelector(".carticon").addEventListener("click", function () {
        document.querySelector(".cartexpnd").style.display = "block";
        var clutter = "";
        cart.forEach(function (prod, index) {
            clutter += `<div class ="flex gap-2 bg-white p-2 round-lg">
                    <div class="w-10 h-10 flex-shrink-0 round-lg overflow-hidden">
                    <img class="w-full h-full object-cover" src = "${prod.image}"/>
                    </div>
                    <div>
                        <h3 class="font-semibold">${prod.name}</h3>
                        <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
                    </div>
                </div>`
        })
        document.querySelector(".cartexpnd").innerHTML=clutter;
    })
}

addProducts();
popularProducts()
addToCart();
showCart()

