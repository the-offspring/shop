import type { IProduct } from "./product"
import type { IUser } from "./user"

export interface ICart {
        id: number,
        items: IProduct[],
        user:  IUser [],
}