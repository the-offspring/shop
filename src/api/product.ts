import type { IPagination } from "@/types/pagination";
import type { IProduct } from "@/types/product"
import { URLSearchParams } from "url";

interface IResponsProducts {
    product: IProduct[],
    pagination: IPagination,
}

export const getProducts = async (page: number = 1): Promise<IResponsProducts> => {
    try {
        const query =new URLSearchParams({
            page: String(page),
            limit: String(8),
        })
        const fetchResponse = await fetch(`https://vue-study.skillbox.cc/api/products?${query}`);
        const respons = await fetchResponse.json();
        const product: IProduct[] = respons.items;

        return {
            product: product,
            pagination: respons.pagination,
        };
    } catch(err) {
        throw new Error('Product response was not ok')
    }
    
}
