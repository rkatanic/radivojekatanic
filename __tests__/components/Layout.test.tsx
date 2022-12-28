import Layout from "@/components/Layout";
import { fireEvent, render } from "@testing-library/react";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Layout", (): void => {
  it("should render", (): void => {
    (useRouter as jest.Mock).mockReturnValue({ asPath: "/", pathname: "/" });
    const { baseElement } = render(
      <Layout>
        <div>children</div>
      </Layout>
    );

    expect(baseElement).toMatchSnapshot();
  });

  describe("given project page", (): void => {
    it("should render with go back button", (): void => {
      (useRouter as jest.Mock).mockReturnValue({
        asPath: "/projects",
        pathname: "/projects/[slug]",
      });
      const { baseElement } = render(
        <Layout>
          <div>children</div>
        </Layout>
      );

      expect(baseElement).toMatchSnapshot();
    });

    it("should navigate to go back button", (): void => {
      const mockPush = jest.fn();
      (useRouter as jest.Mock).mockReturnValue({
        asPath: "/projects",
        pathname: "/projects/[slug]",
        push: mockPush,
      });
      const { getByTestId } = render(
        <Layout>
          <div>children</div>
        </Layout>
      );

      fireEvent.click(getByTestId("go-back-icon"));

      expect(mockPush).toHaveBeenCalledWith("/projects");
    });
  });
});
