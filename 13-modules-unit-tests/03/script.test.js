import  {getMinSquaredNumber} from "./scriptjs";

it("should get square minimum of absolute", ()=>{
    const result =getMinSquaredNumber([2,5]);
    expect(result).toEqual(4);
});
