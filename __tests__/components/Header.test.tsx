import Header from "@/components/Header";
import { render } from "@testing-library/react";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Header", (): void => {
  it.only("should render", (): void => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
    });

    const { baseElement } = render(<Header />);

    expect(baseElement).toMatchSnapshot();
  });
});
