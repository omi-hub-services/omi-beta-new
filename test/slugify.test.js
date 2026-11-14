import { test } from "node:test";
import assert from "node:assert/strict";
import { slugify } from "../src/slugify.js";

test("strips Vietnamese diacritics and punctuation", () => {
  assert.equal(slugify("Xin chào Thế Giới!"), "xin-chao-the-gioi");
});

test("maps đ to d, collapses and trims separators", () => {
  assert.equal(slugify("  Đường   số 1 "), "duong-so-1");
});

test("returns empty string for empty input", () => {
  assert.equal(slugify(""), "");
});

test("returns empty string when no letters or digits remain", () => {
  assert.equal(slugify(" !!! "), "");
});
