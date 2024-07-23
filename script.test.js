const {greetUser, add, reverse, subtract} = require('./script')

test('should return hello and user name', ()=>{
        expect(greetUser('emma')).toBe('hello emma')
    })

test('should add two numbers', ()=>{
    expect(add(2,5)).toBe(7)
})
test('should subtract two numbers', ()=>{
    expect(subtract(5,2)).toBe(3)
})

test('should reverse string', ()=>{
    expect(reverse('dataOne')).toBe('enOatad')
})