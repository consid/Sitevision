import React from "react";
import { render } from "@testing-library/react";

import Card from "./Card";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Card header="This is a Card"
      text="Hello world!"
      imgAlt="Example image"
      imgSrc="https://picsum.photos/200/300"
      link="#"
      linkText="Go to example"
      color="white"
      backgroundColor="#2E2EFF" />);
  });
});