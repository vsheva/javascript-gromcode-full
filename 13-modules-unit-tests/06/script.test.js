import  {withdraw} from "./script.js";



it("should withdraw money", ()=>{
    expect(withdraw(['Ann', 'John', 'User'], [20, 50, -6], 'John', 10)).toEqual(40);
});


it("should return -1 if not enough money", ()=>{
    expect(withdraw(['Ann', 'John', 'User'], [20, 50, -6], 'John', 60)).toEqual(-1);
});


