import {makeAutoObservable} from "mobx"

export default class GameStore {
    constructor() {
        this._Category = [
            {id: 1, name: 'RPG'},
            {id: 2, name: 'Survival'},
        ]
        this._Game = [
            {id: 1, name: 'Dota 2', price: 0, rating: 4.5, img:'Dota Image'},
            {id: 2, name: 'DayZ', price: 45, rating: 4.3, img:'DayZ Image'}
        ]
        makeAutoObservable(this)
    }

    setCategories(categories) {
        this._categories = categories
    }
    setGames(games) {
        this._games = games
    }

    get isCategories(){
        return this._categories
    }
    get isGames() {
        return this._games
    }
}