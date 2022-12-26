import ProjectTable from "@/components/project/ProjectTable";
import { render } from "@testing-library/react";
import { ProjectLinkType } from "types/Project";

describe("ProjectTable", (): void => {
  it("should render", (): void => {
    const { baseElement } = render(
      <ProjectTable
        links={[
          {
            title: "index.html",
            href: "url-link",
            type: "application" as ProjectLinkType,
          },
          {
            title: "mockup-01.png",
            href: "image-url",
            type: "image" as ProjectLinkType,
          },
          {
            title: "README.md",
            href: "#readme",
            type: "file" as ProjectLinkType,
          },
        ]}
        updated={{ description: "Update description", date: "01-01-2020" }}
      />
    );

    expect(baseElement).toMatchSnapshot();
  });
});
