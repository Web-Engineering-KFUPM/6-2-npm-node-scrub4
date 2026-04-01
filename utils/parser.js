import _ from "lodash";

// TODO 5: Parser Functions Using Lodash

export function parseNumbers(input) {
  const numbers = _.map(input, (str) => Number(str));
  return _.compact(numbers);
}

export function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOps, operation);
}
