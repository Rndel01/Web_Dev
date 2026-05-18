const inventorySystem = {
    inventory: [
        {id: 1, name: "Laptop", price: 300, stock: 0,},
        {id: 2, name: "Mouse", price: 50, stock: 127,},
        {id: 3, name: "Headset", price: 40, stock: 69,},
        {id: 4, name: "Keyboard", price: 95, stock: 154,},
        {id: 5, name: "Motherboard", price: 120, stock: 3}
    ],

    addProduct(name, price, stock) {
        const newProduct = {
            id:    this.inventory.length + 1,
            name:  name,
            price: parseFloat(price),
            stock: parseInt(stock)
        };
        this.inventory.push(newProduct);
        this.renderTable();
    },

    renderTable() {
        const table_div = document.getElementById('table');
        table_div.innerHTML = '';

        const table = document.createElement('table');

        const thead = table.createTHead();
        const headerRow = thead.insertRow();
        ["ID", "Item Name", "Price", "Stock"].forEach(text => {
            const th = document.createElement("th");
            th.textContent = text;
            headerRow.appendChild(th);
        });

        const tbody = document.createElement("tbody");
        table.appendChild(tbody);

        this.inventory.forEach(item => {
            const row = tbody.insertRow();
            [
                item.id,
                item.name,
                "$ " + item.price.toFixed(2),
                item.stock
            ].forEach((value, index) => {
                const cell = row.insertCell();
                if (index === 3 && value === 0) {
                    cell.textContent = "Out of Stock";
                    cell.classList.add("out-of-stock");
                } else {
                    cell.textContent = value;
                }
            });
        });
        table_div.appendChild(table);
    },

    init() {
        document.querySelector('.but').addEventListener('click', () => {
            const name  = document.getElementById('pName').value;
            const price = document.getElementById('price').value;
            const stock = document.getElementById('sQuant').value;

            this.addProduct(name, price, stock);
            document.getElementById('pName').value  = '';
            document.getElementById('price').value  = '';
            document.getElementById('sQuant').value = '';
        });
        this.renderTable();
    }
};

inventorySystem.init();