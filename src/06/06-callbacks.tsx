import {ChangeEvent, MouseEvent} from 'React'
// const callback = () => {
//     // alert('hey')
//     return 12
// }
//
// window.setTimeout(callback, 1000)

export const User = () => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        alert(e.currentTarget.name)
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed ' + e.currentTarget.value)
    }

    return (
        <div>
            <textarea
                onChange={onNameChanged}
                onBlur={focusLostHandler}
            >Nikolay</textarea>
            <input onChange={onAgeChanged} type="number"/>
            <button name={'delete'} onClick={deleteUser}>delete</button>
        </div>
    )
}