import { Rover, Board } from "./index"

// describe("init class", () => {
//     let rover = new Rover

//     test("we can init things", () => {
//         expect(rover).toBeTruthy()
//     })
// })

describe("we can init a class with params", () => {
    let rover = new Rover( 5, 5, 1, 2, 'N')

    test("we can get the current position of the rover", () => {
        expect(rover.getPosition()).toBe('1 2 N')
    })
})

describe("we can move the rover and get the correct position", () => {
    let rover = new Rover( 5, 5, 1, 2, 'N')

    test("we can get the current position of the rover", () => {
        expect(rover.move('LMLMLMLMM')).toBe('1 3 N')
    })
})

describe("we cannot move the rover off the board", () => {
    let rover = new Rover( 5, 5, 1, 2, 'N')

    test("we can get the current position of the rover", () => {
        expect(rover.move('LMMMMMMMMMM')).toBe('0 2 W')
    })
})

describe("init multiple rovers", () => {


})


// init Board class

// pass in rovers

// we need to know where the rovers are
// getPosition() but for all rovers

// moveRovers()
// error handling? have we fallen off?  is there a rover already there?

// is the board doing too much
// validating the moves

// management class?
// managing rovers
// manging output?




