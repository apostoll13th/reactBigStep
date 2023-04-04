import { classNames } from "./classNames";

describe("classNames", () => {
  test("without mods", () => {
    expect(classNames("class", {}, ["btn"])).toBe("class btn");
  });
  test("full", () => {
    const expected = "class1 disabled btn red";

    expect(
      classNames(
        "class1",
        {
          disabled: true,
          scrolled: false,
        },
        ["btn", "red"]
      )
    ).toBe(expected);
  });
  test("without additional", () => {
    expect(classNames("class", {disabled:true})).toBe("class disabled");
  });
});
