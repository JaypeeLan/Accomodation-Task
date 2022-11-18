import { render, screen } from "@testing-library/react";
import DisplayRooms from "../DisplayRooms.js";

describe("API test", () => {
  it("should display all rooms in the halls", async () => {
    render(<DisplayRooms />);
    const rooms = await screen.findByTestId("room-1");
    expect(rooms).toBeInTheDocument();
  });
});
