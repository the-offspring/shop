import type { IProduct } from "@/types/product"
import type { IPagination } from "@/types/pagination";

interface IResponsProducts {
    product: IProduct[],
    pagination: IPagination,
}

export const getProducts = async (page: number = 1): Promise<IResponsProducts> => {
    try {
        const query = new URLSearchParams({
            page: String(page),
            limit: String(8)
        }).toString();
        
        const fetchResponse = await fetch(`https://vue-study.skillbox.cc/api/products?${query}`);
        const respons = await fetchResponse.json();
        const product: IProduct[] = respons.items;

        return {
            product: product,
            pagination: respons.pagination,
        };
    } catch (error) {
        throw new Error(`Failed to fetch products: ${error.message}`);
    }
}
