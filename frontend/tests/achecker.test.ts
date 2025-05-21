import * as Puppeteer from "puppeteer";
// @ts-expect-error no types for locate-chrome
import locateChrome from "locate-chrome";
import { beforeAll, afterAll, describe, it, expect } from "bun:test";
import { getCompliance, assertCompliance } from "accessibility-checker";

let browser: Puppeteer.Browser;
let page: Puppeteer.Page;

const executablePath: string = await new Promise((resolve) =>
  locateChrome((arg: any) => resolve(arg)),
);

beforeAll(async () => {
  try {
    browser = await Puppeteer.launch({
      headless: true,
      executablePath,
    });
    page = await browser.newPage();
  } catch (e) {
    console.log(e);
  }
  return Promise.resolve();
});

afterAll(async () => {
  await browser.close();
  return Promise.resolve();
});

// Describe this Suite of testscases, describe is a test Suite and 'it' is a testcase.
describe("Accessibility Checks", function () {
  it("Home", async () => {
    await page.goto(`http://localhost:5173/`);

    const result = await getCompliance(page, "Home");
    const report = result!.report as any;
    console.info("Accessibility Report for Home:", report);
    expect(assertCompliance(report)).toEqual(0);
  });

  it("Experience", async () => {
    await page.goto(`http://localhost:5173/experience`);

    const result = await getCompliance(page, "Experience");
    const report = result!.report as any;
    console.info("Accessibility Report for Experience:", report);
    expect(assertCompliance(report)).toEqual(0);
  });

  it("Projects", async () => {
    await page.goto(`http://localhost:5173/projects`);

    const result = await getCompliance(page, "Projects");
    const report = result!.report as any;
    console.info("Accessibility Report for Projects:", report);
    expect(assertCompliance(report)).toEqual(0);
  });
});
