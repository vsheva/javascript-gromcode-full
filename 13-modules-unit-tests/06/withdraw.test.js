import  {withdraw} from "./withdraw.js";

it("should return null if clients and balances are not array", ()=>{
    expect(withdraw("abc", "efg", "mno", 10)).toEqual(null);
});


it("should withdraw money", ()=>{
    expect(withdraw(['Ann', 'John', 'User'], [20, 50, -6], 'John', 10)).toEqual(40);
});


it("should return -1 if not enough money", ()=>{
    expect(withdraw(['Ann', 'John', 'User'], [20, 50, -6], 'John', 90)).toEqual(-1);
});


