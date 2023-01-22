import Layout from "@/components/Layout";
import { render } from "@testing-library/react";

jest.mock("next/config", () => () => ({
  publicRuntimeConfig: {
    lastModifiedDate: "01-10-2020",
  },
}));
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
});
