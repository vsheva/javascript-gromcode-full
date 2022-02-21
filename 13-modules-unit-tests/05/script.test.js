import  {reverseArray} from "./script.js";

it("should get reversed array", ()=>{
    expect(reverseArray([1, 5, 7, 11, 5])).toEqual([5, 11, 7, 5, 11]);
});


