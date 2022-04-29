const {shuffleArray} = require('./utils')

let testArr = [1,2,3,4]
describe('shuffleArray should', () => {
    test('Array is returned', function(){
    expect(Array.isArray(shuffleArray(testArr))).toBe(true)
    })
     
it('should check array length to be the same as output', function(){
    expect(shuffleArray(testArr)).toHaveLength(testArr.length)
})
})

