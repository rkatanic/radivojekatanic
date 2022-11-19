import Project from "@/components/Project";
import { render } from "@testing-library/react";

describe("Project", (): void => {
  it("should render", (): void => {
    const { baseElement } = render(
      <Project
        project={{
          name: "Project name",
          description: "Project description.",
          creationDate: "2022-01-01",
          link: "project-url",
        }}
      />
    );

    expect(baseElement).toMatchSnapshot();
  });

  it("should render with badge", (): void => {
    const { baseElement } = render(
      <Project
        project={{
          name: "Project name",
          description: "Project description.",
          creationDate: "2022-01-01",
          link: "project-url",
          badgeLabel: "badge label",
        }}
      />
    );

    expect(baseElement).toMatchSnapshot();
  });
});
