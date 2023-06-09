const {By, Key, Builder, Browser} = require("selenium-webdriver");
const assert = require('assert');
require("chromedriver");

async function cart(username, password) {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://qa-challenge.codesubmit.io");

    //login
    await driver.findElement(By.id("user-name")).sendKeys(username);
    await driver.findElement(By.id("password")).sendKeys(password);
    await driver.findElement(By.id("login-button")).click();

    //check URL
    let actUrl = await driver.getCurrentUrl();
    let expUrl = "https://qa-challenge.codesubmit.io/inventory.html";

    assert.deepStrictEqual(actUrl, expUrl);
    console.log("Cart: Test #1 success");

    //get data
    let item1Title = await driver.findElement(By.id("item_0_title_link")).getText();
    let item1Desc = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div[2]/div[1]/div")).getText();
    let item1Pric = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div[2]/div[2]/div")).getText();

    //add to cart
    await driver.findElement(By.id("add-to-cart-sauce-labs-bike-light")).click();

    //go to cart
    await driver.findElement(By.id("shopping_cart_container")).click();

    //check URL
    actUrl = await driver.getCurrentUrl();
    expUrl = "https://qa-challenge.codesubmit.io/cart.html";
    assert.deepStrictEqual(actUrl, expUrl);
    console.log("Cart: Test #2 success");
    
    //get expected data
    let expitem1Title = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[3]/div[2]/a")).getText();
    let expitem1Desc = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[3]/div[2]/div[1]")).getText();
    let expitem1Pric = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[3]/div[2]/div[2]/div")).getText();
    
    //compare data
    assert.deepStrictEqual(item1Title, expitem1Title);
    console.log("Item: Test #1 success");
    assert.deepStrictEqual(item1Desc, expitem1Desc);
    console.log("Item: Test #2 success");
    assert.deepStrictEqual(item1Pric, expitem1Pric);
    console.log("Item: Test #3 success");

    //check checkout button
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[3]/div[2]/div[2]/button")).click();
}

async function checkout(username, password) {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://qa-challenge.codesubmit.io");

    //login
    await driver.findElement(By.id("user-name")).sendKeys(username);
    await driver.findElement(By.id("password")).sendKeys(password);
    await driver.findElement(By.id("login-button")).click();

    //check URL
    let actUrl = await driver.getCurrentUrl();
    let expUrl = "https://qa-challenge.codesubmit.io/inventory.html";

    assert.deepStrictEqual(actUrl, expUrl);
    console.log("Test #1 success");

    //get data
    let item1Title = await driver.findElement(By.id("item_0_title_link")).getText();
    let item1Desc = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div[2]/div[1]/div")).getText();
    let item1Pric = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div[2]/div[2]/div")).getText();

    //add to cart
    await driver.findElement(By.id("add-to-cart-sauce-labs-bike-light")).click();

    //go to cart
    await driver.findElement(By.id("shopping_cart_container")).click();
    
    //get expected data
    let expitem1Title = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[3]/div[2]/a")).getText();
    let expitem1Desc = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[3]/div[2]/div[1]")).getText();
    let expitem1Pric = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/div[3]/div[2]/div[2]/div")).getText();
   
    //compare data
    assert.deepStrictEqual(item1Title, expitem1Title);
    console.log("Test #2 success");
    assert.deepStrictEqual(item1Desc, expitem1Desc);
    console.log("Test #3 success");
    assert.deepStrictEqual(item1Pric, expitem1Pric);
    console.log("Test #4 success");
    
    //check out
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/button[2]")).click();
    
    //check URL
    actUrl = await driver.getCurrentUrl();
    expUrl = "https://qa-challenge.codesubmit.io/checkout-step-one.html";
    assert.deepStrictEqual(actUrl, expUrl);
    console.log("Test #5 success");
    
}

cart("standard_user", "secret_sauce");
checkout("standard_user", "secret_sauce");