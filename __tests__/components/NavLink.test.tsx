import NavLink from "@/components/NavLink";
import { render } from "@testing-library/react";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("NavLink", () => {
  it("should render", (): void => {
    useRouter.mockImplementationOnce(() => ({
      asPath: "/",
    }));
    const { baseElement } = render(<NavLink link="/link" label="Label" />);

    expect(baseElement).toMatchSnapshot();
  });

  it("should render with active link", (): void => {
    useRouter.mockImplementationOnce(() => ({
      asPath: "/link",
    }));
    const { baseElement } = render(<NavLink link="/link" label="Label" />);

    expect(baseElement).toMatchSnapshot();
  });
});
