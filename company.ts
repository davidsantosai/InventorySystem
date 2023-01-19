import { Warehouse } from "./warehouse";
import { Product } from "./product";

export class Company {
  private readonly name: string = '';
  private warehouseList: Array<Warehouse> = [];

  constructor(name: string) {
    this.name = name;
  }

  addWarehouse(value: Warehouse) {
    try {
      this.warehouseList.push(value);
    }
    catch (error) {
      console.error(error);
    }
  }

  addProductToWarehouse(product: Product, wareHouse: Warehouse) {
    try {
      var index = this.warehouseList.findIndex(element => element == wareHouse);
      this.warehouseList[index].products.push(product);
    }
    catch (error) {
      console.error(error);
    }
  }

  getWarehouseProducts(wareHouse: Warehouse) {
    try {
      var index = this.warehouseList.findIndex(element => element == wareHouse);
      return this.warehouseList[index].products;
    }
    catch (error) {
      console.error(error);
    }
  }
}