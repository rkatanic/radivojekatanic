import { toKebabLowerCase } from "utils/stringUtils";

describe("stringUtils", (): void => {
  it("should convert string to kebab lower case", (): void => {
    const string = toKebabLowerCase("Project Title One");

    expect(string).toBe("project-title-one");
  });
});
