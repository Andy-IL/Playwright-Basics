import { test, expect } from "@playwright/test"
// import AddComputerPage from "./support/pageobjectmodel/pages/addComputer.page";
// import ComputersPage from "./support/pageobjectmodel/pages/computers.page";

let computerDetails = [
  ["01", "Computername", "1999-01-01", "2000-12-12", "Apple Inc."],
  ["02", "SecondName", "1995-05-05", "2005-11-12", "ASUS"]
]
let initComputers = 0

test.describe("Filter_Edit_Delete", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://computer-database.gatling.io/computers")
    let h1Text = await page
      .getByRole("heading", { name: "computers found" })
      .allTextContents()
    // extract number
    initComputers = Number(h1Text[0].split(" ")[0])
    console.log("beforeEach got '" + initComputers + "' reported")
  })
  test("Edit Computer", async ({ page }) => {
    let newName = "New Computer Name"
    let newCompany = "RCA"
    console.log("Edit starts with '" + initComputers + "' reported")

    await page.getByPlaceholder("Filter by computer name...").fill("ZX")
    await page.getByRole("button", { name: "Filter by name" }).click()
    await page.getByRole("link", { name: "Sinclair ZX81" }).click()
    await page.getByRole("heading", { name: "Edit computer" })
    await page.locator("#name").fill(newName)
    await page.locator("#introduced").fill("2024-03-30")
    await page.locator("#company").selectOption({ label: newCompany })

    await page.getByRole("button", { name: "Save this computer" }).click()
    await page.getByText("Done ! Computer " + newName + " has been updated")
    let h1Text = await page
      .getByRole("heading", { name: "computers found" })
      .allTextContents()
    // extract number
    let newNumOfComputers = Number(h1Text[0].split(" ")[0])
    console.log(
      "Edited computer, Captured text: " +
        h1Text[0] +
        "\n and got '" +
        newNumOfComputers +
        "' computers\n vs. initially: '" +
        initComputers +
        "'"
    )

    if (newNumOfComputers != initComputers) {
      console.log(
        "FAIL: Edit caused a change in the number '" +
          initComputers +
          "' reported:-("
      )
    } else {
      console.log("PASS: Edit computer caused No change in number reported")
    }
    expect(newNumOfComputers == initComputers).toBeTruthy()
  })

  test("Filter ", async ({ page }) => {
    console.log("Filter starts with '" + initComputers + "' reported")
    await page.getByPlaceholder("Filter by computer name...").click()
    await page.getByPlaceholder("Filter by computer name...").fill("Tandy")
    await page.getByRole("button", { name: "Filter by name" }).click()
    await page.getByText("Nothing to display").click()
    await page.getByPlaceholder("Filter by computer name...").click()
    await page.getByPlaceholder("Filter by computer name...").fill("ZX")
    await page.getByRole("button", { name: "Filter by name" }).click()

    let h1Text = await page
      .getByRole("heading", { name: "computers found" })
      .allTextContents()
    // extract number
    let newNumOfComputers = Number(h1Text[0].split(" ")[0])
    // test the number

    if (newNumOfComputers == initComputers) {
      console.log("Filter FAIL: same number as before")
    } else {
      console.log(
        "Filter PASS: filtered computer number: '" + newNumOfComputers + "'"
      )
    }
    expect(newNumOfComputers == initComputers).toBeFalsy()
  })

  test("Delete computer", async ({ page }) => {
    console.log("Delete started with '" + initComputers + "' reported")

    await page.getByPlaceholder("Filter by computer name...").fill("ZX")
    await page.getByRole("button", { name: "Filter by name" }).click()
    await page.getByRole("link", { name: "Sinclair ZX81" }).click()
    await page.getByRole("button", { name: "Delete this computer" }).click()
    await page
      .getByText("Done ! Computer Sinclair ZX81 has been deleted")
      .click()
    let h1Text = await page
      .getByRole("heading", { name: "computers found" })
      .allTextContents()
    // extract number
    let newNumOfComputers = Number(h1Text[0].split(" ")[0])

    if (newNumOfComputers != initComputers - 1) {
      console.log(
        "Deleted a computer, Captured text: " +
          h1Text[0] +
          "\n and got '" +
          newNumOfComputers +
          "' computers"
      )
      console.log("FAIL Looks like no change in the number :-(")
    } else {
      console.log(
        "PASS Delete computer. Captured text: " +
          h1Text[0] +
          "\n and got '" +
          newNumOfComputers +
          "' computers."
      )
    }
    // expect(newNumOfComputers  == (initComputers-1)).toBeTruthy() ;
    expect(newNumOfComputers == initComputers - 1).toBeFalsy()
  })
})
test.describe("Add a set of new computers", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://computer-database.gatling.io/computers")
    let h1Text = await page
      .getByRole("heading", { name: "computers found" })
      .allTextContents()
    // extract number
    let initComputers = Number(h1Text[0].split(" ")[0])
  })
  for (let details of computerDetails) {
    let testname = "Add Computer " + details[0]
    test(testname, async ({ page }) => {
      console.log("Add  starts with '" + initComputers + "' reported")
      await page.getByText("Add a new computer").isVisible
      let firsth1Text = await page
        .getByRole("heading", { name: "computers found" })
        .allTextContents()
      console.log("Initial Captured text: " + firsth1Text[0])
      // extract number
      let OldNumOfComputers = Number(firsth1Text[0].split(" ")[0])

      await page.getByText("Add a new computer").click()
      //  await page.locator("#name").fill("CommitQuality");
      await page.locator("#name").fill(details[1])
      await page.locator("#introduced").fill(details[2])
      await page.locator("#discontinued").fill(details[3])
      await page.locator("#company").selectOption({ label: details[4] })
      await page.getByText("Create this computer").click()
      await expect(
        page.getByText("Done ! Computer " + details[1] + " has been created")
      ).toBeVisible()

      await expect(
        page.getByRole("heading", { name: "computers found" })
      ).toBeVisible()

      let h1Text = await page
        .getByRole("heading", { name: "computers found" })
        .allTextContents()
      // extract number
      let newNumOfComputers = Number(h1Text[0].split(" ")[0])
      console.log(
        "Added a computer, Captured text: " +
          h1Text[0] +
          "\n and got '" +
          newNumOfComputers +
          "' computers"
      )

      if (newNumOfComputers == OldNumOfComputers) {
        console.log(
          "FAIL: Added a computer, Looks like no change in the number :-("
        )
      } else {
        console.log("Added a computer, one more reported")
      }
      //  expect(newNumOfComputers  == (initComputers+1)).toBeTruthy() ;
      expect(newNumOfComputers == initComputers + 1).toBeFalsy()

      // .match(/\d+/)[0];  // regexp - match was trouble

      //                 // now see if the computer is created
      // await page.getByPlaceholder('Filter by computer name...').fill(details[1]);
      // await page.getByRole('button', { name: 'Filter by name' }).click();
      // await page.getByRole('link', { name: details[1] }).click();
      // await page.getByRole('heading', { name: 'Edit computer' })
    })
  }
})
