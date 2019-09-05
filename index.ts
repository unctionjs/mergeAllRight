import reduceValues from "@unction/reducevalues";
import mergeRight from "@unction/mergeright";
import first from "@unction/first";
import fresh from "@unction/fresh";
import {EnumerableType} from "./types";

export default function mergeAllRight<A> (enumerables: Array<EnumerableType<A>>): EnumerableType<A> {
  if (first(enumerables)) {
    return reduceValues(mergeRight)(fresh(first(enumerables)))(enumerables);
  }

  return enumerables;
}
