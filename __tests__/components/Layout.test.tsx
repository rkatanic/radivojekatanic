import Layout from "@/components/Layout";
import { render } from "@testing-library/react";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Layout", (): void => {
  it("should render", (): void => {
    (useRouter as jest.Mock).mockReturnValue({ asPath: "/" });
    const { baseElement } = render(
      <Layout>
        <div>children</div>
      </Layout>
    );

    expect(baseElement).toMatchSnapshot();
  });
});
