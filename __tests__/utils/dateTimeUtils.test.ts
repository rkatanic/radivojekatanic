import { DATE_FORMAT } from "utils/dateTimeUtils";

describe("dateTimeUtils", () => {
  it("should display correct date format", (): void => {
    const formattedDate = DATE_FORMAT.format(new Date("2022-01-01"));

    expect(formattedDate).toBe("Jan 01, 2022");
  });
});
