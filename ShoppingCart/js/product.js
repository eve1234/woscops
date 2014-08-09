//----------------------------------------------------------------
// product class
function product(sku, name, dimensions, materials, finish, description, price) {
    this.sku = sku; // product code (SKU = stock keeping unit)
    this.name = name;
    this.dimensions = dimensions;
    this.materials = materials;
    this.finish = finish;
    this.description = description;
    this.price = price;
}
