
import mergeAllRight from "./index";

test("empty", () => {
  expect(mergeAllRight([])).toEqual([]);
});

test("Array", () => {
  expect(mergeAllRight([["0"], ["1"], ["2"]])).toEqual(["0", "1", "2"]);
});

test("Object", () => {
  expect(mergeAllRight([{aaa: "aaa"}, {bbb: "bbb"}, {ccc: "ccc"}])).toEqual({
    aaa: "aaa",
    bbb: "bbb",
    ccc: "ccc",
  });
});
