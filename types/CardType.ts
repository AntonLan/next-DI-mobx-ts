import {RatingType} from "@/types/RatingType";

export type CardType = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: RatingType,
    count?: number,
    isAddToCart?: boolean
}