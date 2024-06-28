import add from "../add";

function bot() {
    const ans = add(1,2);
    expect(ans).toBe(3);
}

test('should return the sum of two numbers', bot);