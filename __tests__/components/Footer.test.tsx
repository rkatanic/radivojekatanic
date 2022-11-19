import Footer from "@/components/Footer";
import { render } from "@testing-library/react";

describe("Footer", (): void => {
  it("should render", (): void => {
    const { baseElement } = render(<Footer />);

    expect(baseElement).toMatchSnapshot();
  });
});
