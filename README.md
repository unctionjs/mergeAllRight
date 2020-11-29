# @unction/mergeAllRight

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> Array<Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string> => Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string

Merges a list of enumerables (of the same type) into a single enumerable.

``` javascript
mergeAllRight([["0"], ["1"], ["2"]]) // ["0", "1", "2"]
mergeAllRight([{aaa: "aaa"}, {bbb: "bbb"}, {ccc: "ccc"}]) // {aaa: "aaa", bbb: "bbb", ccc: "ccc",}
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/mergeAllRight.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/mergeAllRight.svg?maxAge=2592000&style=flat-square
