import ProjectTableRow from "@/components/project/ProjectTableRow";
import { render } from "@testing-library/react";
import { ProjectLink, ProjectLinkType } from "types/Project";

describe("ProjectTableRow", (): void => {
  it.each([
    [
      "application",
      {
        title: "index.html",
        href: "url-link",
        type: "application" as ProjectLinkType,
      },
    ],
    [
      "image",
      {
        title: "mockup-01.png",
        href: "image-url",
        type: "image" as ProjectLinkType,
      },
    ],
    [
      "file",
      {
        title: "README.md",
        href: "#readme",
        type: "file" as ProjectLinkType,
      },
    ],
  ])("should render %s link", (_: string, link: ProjectLink): void => {
    const { baseElement } = render(<ProjectTableRow link={link} />);

    expect(baseElement).toMatchSnapshot();
  });
});
