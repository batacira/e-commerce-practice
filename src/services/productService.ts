import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface SingleProduct {

    id: number,
    name: string,
    image: string,
    description: string,
    current_price: number,
    amount: number,
    rarity: string,
    type: string,
    ratings: RatingsProduct,
    release_date: number

}

export interface RatingsProduct {
    one: number,
    two: number,
    three: number,
    four: number,
    five: number
}

export interface GetProducts {
    data: SingleProduct[] 
}

export const http = axios.create({
    baseURL: 'http://localhost:4000',
});


export const getGliders = () => http.get<never, GetProducts>('/gliders');

export const useGlidersQuery = () => useQuery(['gliders'], getGliders)
