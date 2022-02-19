import getSum, {getSquaredNumbers,getOddNumbers} from "./calculator"

it("should get squared numbers", ()=>{
    const result =getSquaredNumbers([1,2,3]);
    expect(result).toEqual([1,4,9]);
});


it("should keep  odd numbers only", ()=>{
    const result =getOddNumbers([1,2,3,4,5]);
    expect(result).toEqual([1,4,5]);
});

it("should get sum of numbers", ()=>{
    const result =getSum([8,4]);
    expect(result).toEqual([12]);
});
