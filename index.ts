import { Company } from "./company";
import { Warehouse } from "./warehouse";
import { Product } from "./product";

const Nike = new Company('Nike');
const localWarehouse : Warehouse = {
  name: "Medellin WH",
  location: "Medellin, Colombia",
  products: []
};
const localWarehouse2 : Warehouse = {
  name: "Bogota WH",
  location: "Bogota, Colombia",
  products: []
};

const blueShirt : Product = {
  id: 1,
  name: "Blue Shirt",
  quantity: 3,
  price: 25,
  color: "Blue",
  size: "M",
}

Nike.addWarehouse(localWarehouse);
Nike.addWarehouse(localWarehouse2);
Nike.addProductToWarehouse(blueShirt,localWarehouse);
console.log(Nike);
console.log(Nike.getWarehouseProducts(localWarehouse));