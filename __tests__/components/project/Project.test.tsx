import Project from "@/components/project/Project";
import { render } from "@testing-library/react";

describe("Project", (): void => {
  it("should render", (): void => {
    const project = {
      slug: "project-slug",
      title: "Project Title",
      description: "Project description.",
      creationDate: "10-10-2010",
    };
    const { baseElement } = render(<Project project={project} />);

    expect(baseElement).toMatchSnapshot();
  });
});
