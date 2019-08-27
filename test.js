
import {test} from "tap";

import mergeAllRight from "./";

test("empty", ({same, end}) => {
  same(
    mergeAllRight([]),
    []
  );

  end();
});

test("Array", ({same, end}) => {
  same(
    mergeAllRight([["0"], ["1"], ["2"]]),
    ["0", "1", "2"]
  );

  end();
});

test("Object", ({same, end}) => {
  same(
    mergeAllRight([{aaa: "aaa"}, {bbb: "bbb"}, {ccc: "ccc"}]),
    {
      aaa: "aaa",
      bbb: "bbb",
      ccc: "ccc",
    }
  );

  end();
});
