import {makeAutoObservable} from "mobx";

export default class SaleStore {
    constructor() {
        this._sale = []
        makeAutoObservable(this)
    }

    setSale(sale) {
        this._sale = {sale}
    }

    get sale() {
        return this._sale
    }
}