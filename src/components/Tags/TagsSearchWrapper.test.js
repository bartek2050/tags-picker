import { fireEvent, render, screen } from "@testing-library/react";
import { TagsSearchWrapper } from "../Tags/TagsSearchWrapper.tsx";
import "@testing-library/jest-dom";

jest.mock("../Tags/SelectedTagsWrapper", () => ({
  SelectedTagsWrapper: () => <div>SelectedTagsWrapper</div>
}));

jest.mock("../Tags/CmsAiWrapper", () => ({
  CmsAiWrapper: () => <div>CmsAiWrapper</div>
}));

jest.mock("../Tags/TagsSelectionMeterWrapper", () => ({
  TagsSelectionMeterWrapper: () => <div>TagsSelectionMeterWrapper</div>
}));

jest.mock("../Tags/TagsList", () => ({
  TagsList: ({ inputValue }) => <div>TagsList with {inputValue}</div>
}));

describe("TagsSearchWrapper component", () => {
  const renderComponent = (showTagSearch = true) => {
    const setShowTags = jest.fn();

    return render(
      <TagsSearchWrapper showTagSearch={showTagSearch} setShowTags={setShowTags} />
    );
  };

  test("should display TagsList when inputValue is not empty", () => {
    renderComponent();

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });

    expect(screen.getByText(/TagsList with test/i)).toBeInTheDocument();
  });

  test("should display other components when inputValue is empty", () => {
    renderComponent();

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "" } });

    // Check that the other components are displayed
    expect(screen.getByText(/SelectedTagsWrapper/i)).toBeInTheDocument();
    expect(screen.getByText(/CmsAiWrapper/i)).toBeInTheDocument();
    expect(screen.getByText(/TagsSelectionMeterWrapper/i)).toBeInTheDocument();
  });
});