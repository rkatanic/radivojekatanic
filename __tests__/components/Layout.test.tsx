import Layout from "@/components/Layout";
import { render } from "@testing-library/react";

jest.mock("next/config", () => () => ({
  publicRuntimeConfig: {
    lastModifiedDate: "01-10-2020",
  },
}));
jest.mock("next/image", () => ({ src, alt }: any) => (
  <img src={src} alt={alt} />
));
jest.mock("next/router", () => ({
  useRouter: () => ({
    locale: "en",
  }),
}));

jest.mock("next-i18next", () => ({
  ...jest.requireActual("next-i18next"),
  useTranslation: () => ({ t: (key: any) => key }),
}));

describe("Layout", (): void => {
  it("should render", (): void => {
    const { baseElement } = render(
      <Layout locale="en">
        <div>children</div>
      </Layout>
    );

    expect(baseElement).toMatchSnapshot();
  });
});
