import sum from "./sum"
import { describe, expect, it } from "vitest"

describe("#sum", () => {
    it("returns 0 with no numbers", () => {
        expect(sum()).toBe(0);
    });

    it("returns the same number with one input", () => {
        expect(sum(3)).toBe(3);
    });

    it("returns correct input for multiple numbers", () => {
        expect(sum(1, 2, 3, 4)).toBe(10);
    });
});