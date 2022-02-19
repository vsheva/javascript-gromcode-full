import {calc} from "./calculator.js";

it("should return null if not a string", () => {
    expect(calc([7 + 7])).toEqual(null);
});

it("should get sum of two numbers", () => {
    expect(calc("2 + 5")).toEqual("2 + 5 = 7");
});

it("should get subtractions of two numbers", () => {
    expect(calc("5 - 3")).toEqual("5 - 3 = 2");
});

it("should get multipliplication of two numbers", () => {
    expect(calc("7 * 8")).toEqual("7 * 8 = 56");
});

it("should get division of two numbers", () => {
    expect(calc("80 / 10")).toEqual("80 / 10");
});


