import './App.css';
// import {User} from "./06/06-callbacks.tsx";
import {ManComponent} from "./07/Destructuring.tsx";

const man = {
    name: 'Nikolay',
    age: 32,
    lessons: [{title: '1'}, {title: '2'}],
    address: {
        street: {
            title: 'Nezavisimosti street'
        }
    }
}

export const App = ()=> {
    return (
        <div className="App">
            {/*<User />*/}
            <ManComponent title={'Title'} man={man} car={{model: 'honda'}}/>
        </div>
    );
}
