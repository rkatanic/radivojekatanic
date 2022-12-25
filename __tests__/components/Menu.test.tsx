import Menu from "@/components/Menu";
import { render } from "@testing-library/react";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Menu", (): void => {
  it("should render", (): void => {
    (useRouter as jest.Mock).mockReturnValue({ asPath: "/projects" });

    const { baseElement } = render(<Menu />);

    expect(baseElement).toMatchSnapshot();
  });
});
