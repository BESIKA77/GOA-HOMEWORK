let academy = {
    name: 'Goa',
    courses: 'py,js,css',
    socialLink: 'https::/...',
    reviews: {
        user1: {
            name: 'beso',
            status: 'parent',
            review: '5 star'
        },
        user2: {
            name: 'Andria',
            status: 'child',
            review: '5 star'
        },
        user3: {
            name: 'Gela',
            status: 'parent',
            review: '4 star'
        }
    }
}

// 1
console.log(Object.entries(academy));
// 2
console.log(Object.keys(academy));
// 3
console.log(Object.values(academy));
// 4
console.log('courses' in academy); 
// 5
let newObject = {
    member: 'Andria'
}
let combined = Object.assign({}, academy, newObject);
console.log(combinedObject);
// 6
Object.freeze(academy);
// 7
console.log(Object.isFrozen(academy));