import  {getMinSquaredNumber} from "./script.js";

it("should get null if not array", ()=>{
    expect(getMinSquaredNumber("Hello world")).toEqual(null);
});

it("should get null if array is empty", ()=>{
    expect(getMinSquaredNumber([])).toEqual(null);
});

it("should get square of minimum absolute", ()=>{
    const result =getMinSquaredNumber([2,5]);
    expect(result).toEqual(4);
});

