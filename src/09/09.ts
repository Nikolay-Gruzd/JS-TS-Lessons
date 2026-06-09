export type UserType = {
    name: string,
    age: number
}

export function icreaseAge(user: UserType){
    user.age++
}

export function pasportist(letters: any){
    letters.sort()
}