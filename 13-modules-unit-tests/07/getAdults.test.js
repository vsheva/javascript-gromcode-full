import  {getAdults} from "./getAdults.js";


it("should return empty object if  entered object is empty", ()=>{
    expect(getAdults({})).toEqual({});
});

it("should return object of users older than 18", ()=>{
    const result =getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
    expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});


it("should get object only ", ()=>{
    const result =getAdults("John");
    expect(result).toEqual(null);
});
