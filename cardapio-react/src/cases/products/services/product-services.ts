import {products} from "../dtos/product";

export const productServices = {
    listAll () {
        return products;
    }
}