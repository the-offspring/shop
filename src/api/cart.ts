import type { ICart } from "@/types/cartType";

interface IResponsCart {
    items: ICart;
}

export const getProductsCart = async (userAccessKey: string): Promise<IResponsCart> => {
    try {  
        const query = new URLSearchParams({ userAccessKey }).toString();
        const fetchResponse = await fetch(`https://vue-study.skillbox.cc/api/baskets?${query}`);
        const response = await fetchResponse.json();
        
        const items: ICart = response.items;
        
        return  {items: items};
    } catch (error) {
        throw new Error(`Failed to fetch products: ${error.message}`);
    }
};
// export const getProductCart = async (userAccessKey: string): Promise<IResponsCart> => {
//     try {  
//         const query = new URLSearchParams({ userAccessKey: String(userAccessKey) }).toString();
//         const fetchResponse = await fetch(`https://vue-study.skillbox.cc/api/baskets?userAccessKey=${query}`);
//         const respons = await fetchResponse.json();
//         const cart: IProduct[] = respons.item; 

//         return {cart: cart};
//     } catch {
//         throw new Error(`Failed to fetch products: ${error.message}`);
//     }
// }
// export const deleteProductCart = async (userAccessKey: string): Promise<IResponsCart> => {
//     try {  
//         const query = new URLSearchParams({ userAccessKey: String(userAccessKey) }).toString();
//         const fetchResponse = await fetch(`https://vue-study.skillbox.cc/api/baskets?userAccessKey=${query}`);
//         const respons = await fetchResponse.json();
//         const cart: IProduct[] = respons.item; 

//         return {cart: cart};
//     } catch {
//         throw new Error(`Failed to fetch products: ${error.message}`);
//     }
// }

