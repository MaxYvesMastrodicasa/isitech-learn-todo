import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import App from "./App.tsx";

test("Add item to TODO", async () => {
  render(<App />);
  const user = userEvent.setup();
  const btn = screen.getByText("Add a todo");
  const list = screen.getByTestId("list");
  const input = screen.getByPlaceholderText("Nourrir le chat");

  //simuler l'écriture
  await user.type(input, "Nourrir le chat");

  //simuler clic du boutton
  await user.click(btn);

  expect(list.children.length).toBe(1);
  expect(list.children[0].textContent).toBe("Nourrir le chat");
});
