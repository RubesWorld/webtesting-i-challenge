const enhancer = require("./enhancer.js");

describe("get repairs", () => {
  it("has a durability of 100", () => {
    const item = {
      name: "Bob",
      durability: 90,
      enhancement: 10,
    };
    const expectedItem = {
      name: "John",
      durability: 100,
      enhancement: 10,
    };
    const newItem = enhancer.repair(item);
    expect(newItem.durability).toBe(expectedItem.durability);
  });
});

describe("success", () => {
  it("returns a new item object modified", () => {
    const item = {
      name: "Bob",
      durability: 90,
      enhancement: 9,
    };
    const expectedItem = {
      name: "John",
      durability: 100,
      enhancement: 10,
    };
    const newItem = enhancer.success(item);
    expect(newItem.enhancement).toBe(expectedItem.enhancement);
  });
});

describe("fail", () => {
  it("returns object durability decreased by 5", () => {
    const item = {
      name: "Bob",
      durability: 90,
      enhancement: 9,
    };
    const expectedItem = {
      name: "John",
      durability: 85,
      enhancement: 10,
    };
    const newItem = enhancer.fail(item);
    expect(newItem.durability).toBe(expectedItem.durability);
  });

  it("returns object durability decreased by 10 and enhancement -1", () => {
    const item = {
      name: "Bob",
      durability: 80,
      enhancement: 17,
    };
    const expectedItem = {
      name: "John",
      durability: 70,
      enhancement: 16,
    };
    const newItem = enhancer.fail(item);
    expect(newItem.durability).toBe(expectedItem.durability);
    expect(newItem.enhancement).toBe(expectedItem.enhancement);
  });
});
