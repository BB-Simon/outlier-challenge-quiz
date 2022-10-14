import { getRandomInt } from "./getRandomInt";
//test block
test("get a random integer", () => {
// render the component on virtual dom

const randomInt = getRandomInt(3)

//assert the expected result
expect(randomInt).toBeLessThanOrEqual(3);
});