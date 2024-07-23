const {greetUser, add, reverse} = require('./script')

test('should return hell and user name', ()=>{
        expect(greetUser('emma')).toBe('hello emma')
    })

test('should return hell and user name', ()=>{
    expect(add(2,5)).toBe(7)
})

test('should return hell and user name', ()=>{
    expect(reverse('dataOne')).toBe('enOatad')
})