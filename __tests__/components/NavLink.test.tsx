import NavLink from "@/components/NavLink";
import { render } from "@testing-library/react";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("NavLink", (): void => {
  it("should render with inactive link", (): void => {
    (useRouter as jest.Mock).mockReturnValue({ asPath: "/" });
    const { baseElement } = render(<NavLink link="/link" label="Label" />);

    expect(baseElement).toMatchSnapshot();
  });

  it("should render with active link", (): void => {
    (useRouter as jest.Mock).mockReturnValue({ asPath: "/link" });
    const { baseElement } = render(<NavLink link="/link" label="Label" />);

    expect(baseElement).toMatchSnapshot();
  });
});
