import {$authHost, $host} from "./index";


export const createCategory = async (category) => {
    const {data} = await $authHost.post('api/category', category)
    return data
}

export const fetchCategories = async () => {
    const {data} = await $host.get('api/category')
    return data
}

export const createGame = async (game) => {
    const {data} = await $authHost.post('api/game', game)
    return data
}

export const fetchGames = async (categoryId, page, limit= 5) => {
    const {data} = await $host.get('api/game', {params: {
            categoryId, page, limit
        }})
    return data
}

export const fetchOneGame = async (id) => {
    const {data} = await $host.get('api/game/' + id)
    return data
}