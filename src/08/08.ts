
export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}

type UsersType = {
    [key: string]: {id: number, name: string}
}
export let users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '1602': {id: 1602, name: 'Natasha'},
    '1053': {id: 1053, name: 'Valera'},
    '14': {id: 14, name: 'Katya'},
}

const user = { id: 100500, name: 'Igor' }

users[user.id] = user
delete users[user.id]
users[user.id].name = 'Vitya'

export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 1602, name: 'Natasha'},
    {id: 1053, name: 'Valera'},
    {id: 14, name: 'Katya'}
]