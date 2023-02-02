import {action, makeObservable, observable, runInAction} from "mobx";
import axios from "axios";
import {CardType} from "@/types/CardType";

class MainStore {
    products: CardType[] = new Array<CardType>()
    cart: CardType[] = new Array<CardType>()
    constructor() {
        makeObservable(this, {
            products: observable.deep,
            cart: observable,
            getProducts: action,
            increment: action,
            decrement: action
        })
        this.getProducts().then()
    }

    getProducts = async() => {
        try {
            const response = await axios("https://fakestoreapi.com/products/category/electronics")
            this.products = await response.data
            this.products.map((p) => {
                p.count = 1
                p.isAddToCart = false
            })
        } catch (e) {
            console.log(e)
        }
    }

    increment = (product: any) => {
        product.count += 1
    }

    decrement = (product: any) => {
        if (product.count === 1){
            return
        }
        product.count -= 1
    }

    addToCart = (product: CardType) => {
        this.products.map((e) => {
            if (e.id === product.id) {
                e.isAddToCart = true
                this.cart.push(e)
            }
        })
    }

    removeFromCart = (product: CardType) => {
        this.products.map((e) => {
            if (e.id === product.id) {
                e.isAddToCart = false
                let index = this.cart.indexOf(product)
                this.cart.splice(index, 1)
            }
        })
    }

    getPrice = (price: number) => {
        return Math.round(price * 70)
    }




}

export default MainStore;
