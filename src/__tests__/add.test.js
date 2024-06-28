import { hasUncaughtExceptionCaptureCallback } from "process";
import add from "../add";

test('should return the sum of two numbers', () => {
    const ans = add(1,2);
    expect(ans).toBe(3);
 })