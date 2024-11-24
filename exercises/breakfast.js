// Exercise 1, Part 1
// Add the `async` keyword to the function and `await` to the `toast` method.
export function makeToast(bread, toaster) {
  toaster.add(bread)
  toaster.toast()
  return toaster.pop()
}

// Exercise 1, Part 2
// Add the `async` and `await` where needed to make the test pass.
// The `grinder.grind()` and `coffeeMaker.brew()` methods are asynchronous.
export function makeCoffee(beans, grinder, coffeeMaker, cup) {
  grinder.add(beans)
  grinder.grind()
  coffeeMaker.add(grinder.dump())
  coffeeMaker.brew()
  return cup.fill(coffeeMaker.pour())
}

// Exercise 1, Part 3
// Use the async `makeToast` and `makeCoffee` functions above to make breakfast.
export function makeBreakfast(
  bread,
  toaster,
  beans,
  grinder,
  coffeeMaker,
  cup
) {
  const toast = null // TODO: Use makeToast
  const coffee = null // TODO: Use makeCoffee
  return { toast, coffee }
}
