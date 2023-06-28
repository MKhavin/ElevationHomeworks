function addItemToCart(item) {
    const itemInStock = $(item).data().instock

    if (itemInStock) {
        $("#cart").append(`<div class=cart-item>${$(item).text()}</div>`)
    }
}

function itemClicked() {
   addItemToCart(this)
}

$(".item").click(itemClicked)