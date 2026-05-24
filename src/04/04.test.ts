import {expect, test} from "vitest";
import {chiPredicate, predicate} from "./04.ts";

test('should take old man older then 90', ()=>{
    const ages = [ 18, 20, 22, 1, 100, 90, 14 ]

    const oldAges = ages.filter(predicate);

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('should take courses chipper 160', ()=>{
    const courses = [
        { title: 'CSS', price: 110},
        { title: 'JS', price: 200},
        { title: 'REACT', price: 150}
    ]

    const chipCourses = courses.filter(chiPredicate);

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].title).toBe('CSS')
    expect(chipCourses[0].price).toBe(110)
    expect(chipCourses[1].title).toBe('REACT')
    expect(chipCourses[1].price).toBe(150)
})

test('get only completed tasks', ()=>{
    const tasks = [
        { id: 1, title: 'Bread', isDone: false },
        { id: 2, title: 'Milk', isDone: true },
        { id: 3, title: 'Salt', isDone: true },
        { id: 4, title: 'Sugar', isDone: false },
    ]

    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].title).toBe('Milk')
    expect(completedTasks[1].title).toBe('Salt')
})