import type { IProduct } from "./product";
export interface IUser {
    id: number,
    name: string,
    surname: string,
    patronymic: string,
    discont: number,
    items: IProduct[],
    profileImage: {
        file: {
            url: string,
            name: string,
        },
    },
    authorized: boolean,
    userAccessKey: string,
}