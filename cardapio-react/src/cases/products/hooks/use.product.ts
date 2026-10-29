import { productServices } from "../services/product-services";

export function useProduct() {
    return productServices.listAll();
}