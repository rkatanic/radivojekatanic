import IconButon from "@/components/IconButton";
import { fireEvent, render } from "@testing-library/react";

describe("IconButon", (): void => {
  it("should render", (): void => {
    const { baseElement } = render(
      <IconButon onClick={jest.fn()} icon={<div>icon</div>} />
    );

    expect(baseElement).toMatchSnapshot();
  });

  it("should call on click handle", (): void => {
    const mockOnClick = jest.fn();
    const { getByRole } = render(
      <IconButon onClick={mockOnClick} icon={<div>icon</div>} />
    );

    fireEvent.click(getByRole("button"));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
