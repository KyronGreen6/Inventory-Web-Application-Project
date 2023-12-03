document.addEventListener("DOMContentLoaded", () => {
    const inventory = [];
    function createInventoryItemCard(item) {
        const itemCard = document.createElement("div");
        itemCard.classList.add("item-card");
        const itemImage = document.createElement("img");
        itemImage.setAttribute("src", item.img);
        const itemName = document.createElement("strong");
        itemName.textContent = item.name;
        const itemText = document.createElement("p");
        itemText.textContent = item.description;
        const itemPrice = document.createElement("p");
        itemPrice.textContent = Price: $${item.price};
        const itemStock = document.createElement("p");


        itemCard.appendChild(itemImage);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(itemStock);
        itemCard.appendChild(itemText);
        document.querySelector(".supplies").appendChild(itemCard);
    }
    function displayInventory() {
        for (const item of inventory) {
            createInventoryItemCard(item);
        }

 }
    function orderItem() {
        const orderedItems = inventory.filter((item) => item.orderCount > 0);
        if (orderedItems.length === 0) {
            alert("You have no items in your order.");
        } else {
            const message = orderedItems.map(
                (item) =>
                    ${item.orderCount} order${item.orderCount > 1 ? "s" : ""} of ${item.name
                    }
            );
            alert(message.join("\n"));
        }
    }
    document.querySelector("#supply-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const newitem = {
            name: event.target.name.value,
            price: parseFloat(event.target.price.value),
            stock: parseInt(event.target.stock.value),
            img: event.target.img.value,
            orderCount: 0,
        };
        inventory.push(newitem);
        createInventoryItemCard(newitem);
        event.target.reset();
    });
    document.querySelector("#submit-button").addEventListener("click", orderItem);
    const inventoryItems = [
        {
            name: "Donut",
            price: 1.50,
            stock: 13,
            img: "images/donut.jpeg",
            description: "Lorem ipsum dolor sit amet ",
            orderCount: 0,
        },
        {
            name: Cheese Danish,
            price: 4.99,
            stock: 15,
            img: "images/cheese danish.jpeg",
            description: "Lorem ipsum dolor sit amet ",
            orderCount: 0,
        },
        {
            name:  Apple Fritters with Ice Cream,
            price: 5.99,
            stock: 3,
            img: "images/applefritters.jpeg",
            description: "Lorem ipsum dolor sit amet ",
            orderCount: 0,
        },

    ];
    for (const item of inventoryItems) {
        inventory.push(item);
    }
    displayInventory();
});