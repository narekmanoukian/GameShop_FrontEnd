import {makeAutoObservable} from "mobx"

export default class GameStore {
    constructor() {
        this._categories = [
            {id: 1, name: 'RPG'},
            {id: 2, name: 'Survival'},
            {id: 3, name: 'Strategy'},
            {id: 4, name: 'Simulator'},
            {id: 5, name: 'Sport'},
        ]
        this._games = [
            {id: 1, name: 'Dota 2', price: 0, rating: 4.5, img:'Dota Image'},
            {id: 2, name: 'DayZ', price: 45, rating: 4.3, img:'DayZ Image'},
            {id: 3, name: 'GTA V', price: 100, rating: 5, img:'GTA V Image'},
            {id: 4, name: 'GTA V', price: 100, rating: 5, img:'GTA V Image'},
            {id: 5, name: 'GTA V', price: 100, rating: 5, img:'GTA V Image'},
            {id: 6, name: 'GTA V', price: 100, rating: 5, img:'GTA V Image'},
            {id: 7, name: 'GTA V', price: 100, rating: 5, img:'GTA V Image'},

        ]
        this._selectedCategory = {}
        makeAutoObservable(this)
    }

    setCategories(categories) {
        this._categories = categories
    }
    setGames(games) {
        this._games = games
    }

    setSelectedCategory(category){
        this._selectedCategory = category

    }

    get Categories(){
        return this._categories
    }
    get Games() {
        return this._games
    }
    get selectedCategory() {
        return this._selectedCategory
    }
}