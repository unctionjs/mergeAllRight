import reduceValues from "@unction/reducevalues"
import mergeRight from "@unction/mergeright"
import first from "@unction/first"
import fresh from "@unction/fresh"

export default function mergeAllRight (functors: Array<FunctorType>): FunctorType {
  if (first(functors)) {
    return reduceValues(mergeRight)(fresh(first(functors)))(functors)
  }

  return functors
}
