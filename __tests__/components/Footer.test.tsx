import Footer from "@/components/Footer";
import { render } from "@testing-library/react";

jest.mock("next/config", () => () => ({
  publicRuntimeConfig: {
    lastModifiedDate: "01-10-2020",
  },
}));

describe("Footer", (): void => {
  it("should render", (): void => {
    const { baseElement } = render(<Footer />);

    expect(baseElement).toMatchSnapshot();
  });
});
