import { usePopup } from "@/store/usePopUp";
import { renderHook } from "@testing-library/react";
import { act } from "react";

describe("usePopup", () => {
  it("should set isShowPopup to true and set content when showPopup is called", () => {
    // Arrange
    const { result } = renderHook(() => usePopup());

    // Act
    act(() => {
      result.current.showPopup("Popup content");
    });

    // Assert
    expect(result.current.isShowPopup).toBe(true);
    expect(result.current.content).toBe("Popup content");
  });

  it("should set isShowPopup to false and set content to null when hidePopup is called", () => {
    // Arrange
    const { result } = renderHook(() => usePopup());

    // Set up initial state
    act(() => {
      result.current.showPopup("Initial content");
    });

    // Act
    act(() => {
      result.current.hidePopup();
    });

    // Assert
    expect(result.current.isShowPopup).toBe(false);
    expect(result.current.content).toBeNull();
  });
});
