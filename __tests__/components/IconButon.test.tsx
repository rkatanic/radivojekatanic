import IconButon from "@/components/IconButton";
import { render } from "@testing-library/react";

describe("IconButon", (): void => {
  it("should render", (): void => {
    const { baseElement } = render(
      <IconButon href="link" icon={<div>icon</div>} />
    );

    expect(baseElement).toMatchSnapshot();
  });
});
