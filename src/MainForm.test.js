import React from "react";
import renderer from "react-test-renderer";
import MainForm from "./components/mainForm";

it("renders correctly when load", () => {
  const tree = renderer.create(<MainForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
