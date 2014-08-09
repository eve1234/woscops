//----------------------------------------------------------------
// store (contains the products)
//
//function product(sku, name, dimensions, materials, finish, description, price) 
//
function store() {
    this.products = [
        new product("APL", "Apple", "4x6x12mm", "Silver", "Smooth", "A nice apple", 1),
        new product("AVC", "Avocado", "4x6x12mm", "Silver", "Smooth", "A nice apple", 2),
        new product("BAN", "Banana", "4x6x12mm", "Silver", "Smooth", "A nice apple", 3),
        new product("CTP", "Cantaloupe", "4x6x12mm", "Silver", "Smooth", "A nice apple", 4),
        new product("PAP", "A", "4x6x12mm", "Silver", "Smooth", "A nice apple", 6),
        new product("PCH", "B", "4x6x12mm", "Silver", "Smooth", "A nice apple", 7),
        new product("PER", "C", "4x6x12mm", "Silver", "Smooth", "A nice apple", 8),
        new product("FIG", "Fig", "4x6x12mm", "Silver", "Smooth", "A nice apple", 5)

    ];

}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}
