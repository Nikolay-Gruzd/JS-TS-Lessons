import * as React from "react";

type AddressType = {
    street: {
        title: string
    }
}
type LessonsType = {
    title: string
}
type ManType = {
    name: string
    age: number
    lessons: Array<LessonsType>
    address: AddressType
}

type PropsType = {
    title: string
    man: ManType
    car: {model: string}
}

export const ManComponent: React.FC<PropsType> = ({ title, man, ...props }) => {

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{man.name}</div>
            <h3>{props.car.model}</h3>
        </div>
    )
}