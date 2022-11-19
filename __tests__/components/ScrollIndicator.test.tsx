import ScrollIndicator from "@/components/ScrollIndicator";
import { render } from "@testing-library/react";

describe("ScrollIndicator", (): void => {
  it("should render", (): void => {
    const { baseElement } = render(<ScrollIndicator />);

    expect(baseElement).toMatchSnapshot();
  });
});
