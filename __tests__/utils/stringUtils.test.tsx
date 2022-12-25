import { toKebabLowerCase } from "utils/stringUtils";

describe("stringUtils", (): void => {
  it("should convert string to kebab lower case", (): void => {
    const string = toKebabLowerCase("Hello World");

    expect(string).toBe("hello-world");
  });
});
