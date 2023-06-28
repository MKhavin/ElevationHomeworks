const cart = []

function addItemToCart(item) {
    const itemInStock = $(item).data().instock

    if (itemInStock) {
        const itemName = $(item).text()
        let itemInCart = cart.find(value => value.name === itemName)

        if (itemInCart !== undefined) {
            itemInCart.quantity += 1
        } else {
            itemInCart = {
                name: itemName,
                quantity: 1
            }

            cart.push(itemInCart)
        }
        renderCart()
    }
}

function renderCart() {
    const cartEl = $("#cart")
    cartEl.empty()
    cart.forEach(item => cartEl.append(`<div class=cart-item data-name='${item.name}'}>${item.name + (item.quantity > 1 ? ` x${item.quantity}` : "")}</div>`))
}

function itemClicked() {
    addItemToCart(this)
}

function cartItemClicked() {
    const item = $(this)
    const itemName = item.data().name

    let itemInCart = cart.findIndex(value => value.name === itemName)
    if (itemInCart !== -1) {
        cart.splice(itemInCart, 1)
    }

    item.remove()
}

$(".item").click(itemClicked)
$("#cart").on("click", ".cart-item", cartItemClicked)