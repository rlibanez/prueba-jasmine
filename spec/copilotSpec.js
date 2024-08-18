describe("A suite", function () {
    it("contains spec with an expectation false", function () {
        expect(true).toBe(false);
    });
    it("contains spec with an expectation true", function () {
        expect(true).toBe(true);
    });

    it("checks if a number is greater than another number", function () {
        expect(10).toBeGreaterThan(5);
    });

    it("checks if a string contains a substring", function () {
        expect("Hello, world!").toContain("world");
    });

    it("checks if an array contains a specific element", function () {
        expect([1, 2, 3]).toContain(2);
    });

    it("checks if an object has a specific property", function () {
        let obj = { name: "John", age: 30 };
        expect(obj.age).toBeDefined();
    });

    it("checks if a value is defined", function () {
        let value = "defined";
        expect(value).toBeDefined();
    });

    it("checks if a value is null", function () {
        let value = null;
        expect(value).toBeNull();
    });

    it("checks if a value is NaN", function () {
        let value = NaN;
        expect(value).toBeNaN();
    });

    it("checks if a value is truthy", function () {
        let value = "truthy";
        expect(value).toBeTruthy();
    });

    it("checks if a value is falsy", function () {
        let value = 0;
        expect(value).toBeFalsy();
    });
});