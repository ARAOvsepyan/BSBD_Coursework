import {makeAutoObservable} from "mobx";

export default class TourStore {
    constructor() {
        this._tour = []
        this._country = []
        this._feeding = []
        this._reduction = []
        this._selectedCountry = {}
        this._selectedFeeding = {}
        this._selectedReduction = {}
        makeAutoObservable(this)
    }

    setCountry(country) {
        this._country = country
    }

    setFedding(feeding) {
        this._country = feeding
    }

    setReduction(reduction) {
        this._reduction = reduction
    }

    setSelectedCountry(country) {
        this.setPage(1)
        this._selectedCountry = country
    }

    setSelectedFedding(feeding) {
        this.setPage(1)
        this._selectedFeeding = feeding
    }

    setSelectedReduction(reduction) {
        this.setPage(1)
        this._selectedReduction = reduction
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

    getCountry(){
        return this._country
    }

    getSelectedCountry(){
        return this._selectedCountry
    }

    getFeeding(){
        return this._feeding
    }

    getSelectedFeeding(){
        return this._selectedFeeding
    }

    getReduction(){
        return this._reduction
    }

    getSelectedReduction(){
        return this._selectedReduction
    }
}