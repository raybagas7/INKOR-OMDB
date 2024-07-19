import ListNavigation from "@/components/Navigation/ListNavigation/ListNavigation";
import { render, screen } from "@testing-library/react";

describe("ListNavigation Component", () => {
  it("should render the name of the list when the props passed in", () => {
    const listNameProps = "Movie";
    render(<ListNavigation name={listNameProps} to="/" />);

    const listName = screen.getByText(listNameProps);
    expect(listName).toBeInTheDocument();
  });

  it("should not render active data-testid when the list navigation is not active", () => {
    const listNameProps = "Movie";
    render(<ListNavigation name={listNameProps} to="/" isActive={false} />);

    const activeIndicator = screen.queryByTestId("active-list");
    expect(activeIndicator).not.toBeInTheDocument();
  });

  it("should render active data-testid when the list navigation is active", () => {
    const listNameProps = "Movie";
    render(<ListNavigation name={listNameProps} to="/" isActive={true} />);

    const activeIndicator = screen.getByTestId("active-list");
    expect(activeIndicator).toBeInTheDocument();
  });
  it("should render a passed icon component with data-testid", () => {
    const listNameProps = "movie";
    const dataTestIconProps = "icon-passed";
    render(
      <ListNavigation
        name={listNameProps}
        to="/"
        isActive={true}
        icon={<div data-testid={dataTestIconProps}></div>}
      />,
    );

    const icon = screen.getByTestId(dataTestIconProps);
    expect(icon).toBeInTheDocument();
  });
});
