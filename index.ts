import reduceValues from "@unction/reducevalues";
import mergeRight from "@unction/mergeright";
import first from "@unction/first";
import fresh from "@unction/fresh";

export default function mergeAllRight<A> (enumerables: Array<Array<A> | Set<A> | RecordType<unknown, A> | string>): Array<A> | Set<A> | RecordType<unknown, A> | string {
  if (first(enumerables)) {
    return reduceValues(mergeRight)(fresh(first(enumerables)))(enumerables);
  }

  return enumerables;
}
