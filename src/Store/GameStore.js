import {makeAutoObservable} from "mobx"

export default class GameStore {
    constructor() {
        this._categories = []
        this._games = []
        this._selectedCategory = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setCategories(categories) {
        this._categories = categories
    }
    setGames(games) {
        this._games = games
    }

    setSelectedCategory(category){
        this.setPage(1)
        this._selectedCategory = category

    }

    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get categories(){
        return this._categories
    }
    get games() {
        return this._games
    }
    get selectedCategory() {
        return this._selectedCategory
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