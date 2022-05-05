import {makeAutoObservable} from "mobx";

export default class TourStore {
    constructor() {
        this._tour = []
        makeAutoObservable(this)
    }

    setTour(tour) {
        this._tour = tour
    }

    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get tour() {
        return this._tour
    }
   
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}