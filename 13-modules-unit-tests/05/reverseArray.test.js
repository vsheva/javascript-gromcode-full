import  {reverseArray} from "./reverseArray.js";


it("should get reversed array", ()=>{
    expect(reverseArray([1, 5, 7, 11, 5])).toEqual([5, 11, 7, 5, 1]);
});

it("should get null if not array", ()=>{
    expect(reverseArray("Hello world")).toEqual(null);
});

it("should get null if array is empty", ()=>{
    expect(reverseArray([])).toEqual(null);
});
