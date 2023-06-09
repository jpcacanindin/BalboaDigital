const {By, Key, Builder, Browser} = require("selenium-webdriver");
const assert = require('assert');
require("chromedriver");


async function inventory(username, password) {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://qa-challenge.codesubmit.io");

    //login
    await driver.findElement(By.id("user-name")).sendKeys(username);
    await driver.findElement(By.id("password")).sendKeys(password);
    await driver.findElement(By.id("login-button")).click();

    //check URL
    let actUrl = await driver.getCurrentUrl();
    const expUrl = "https://qa-challenge.codesubmit.io/inventory.html";

    assert.deepStrictEqual(actUrl, expUrl);
    console.log("Test #1 success");

    //get data
    let item1Title = await driver.findElement(By.id("item_0_title_link")).getText();
    let item1Desc = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div[2]/div[1]/div")).getText();
    let item1Pric = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div[2]/div[2]/div")).getText();
    let image1 = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div[1]/a/img"));
    let item1Img = await image1.getAttribute('src');

    //correct data
    let expItem1Title = "Sauce Labs Bike Light";
    let expItem1Desc = "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included."
    let expItem1Pric = "$9.99"
    let expItem1Pic = "https://qa-challenge.codesubmit.io/static/media/bike-light-1200x1500.37c843b0.jpg";

    //compare data
    assert.deepStrictEqual(item1Title, expItem1Title);
    console.log("Item 1: Test #1 success");
    assert.deepStrictEqual(item1Desc, expItem1Desc);
    console.log("Item 1: Test #2 success")
    assert.deepStrictEqual(item1Pric, expItem1Pric);
    console.log("Item 1: Test #3 success")
    assert.deepStrictEqual(item1Img, expItem1Pic);
    console.log("Item 1: Test #4 success")
    await driver.findElement(By.id("add-to-cart-sauce-labs-bike-light")).click();
    console.log("Item 1: Test #5 success")
    await driver.findElement(By.id("remove-sauce-labs-bike-light")).click();
    console.log("Item 1: Test #6 success")

     //get data
    let item2Title = await driver.findElement(By.id("item_1_title_link")).getText();
    let item2Desc = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[3]/div[2]/div[1]/div")).getText();
    let item2Pric = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[3]/div[2]/div[2]/div")).getText();
    let image2 = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[3]/div[1]/a/img"));
    let item2Img = await image2.getAttribute('src');
    
    //correct data
    let expItem2Title = "Sauce Labs Bolt T-Shirt";
    let expItem2Desc = "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt."
    let expItem2Pric = "$15.99"
    let expItem2Pic = "https://qa-challenge.codesubmit.io/static/media/bolt-shirt-1200x1500.c2599ac5.jpg";
    
    //compare data
    assert.deepStrictEqual(item2Title, expItem2Title);
    console.log("Item 2: Test #1 success")
    assert.deepStrictEqual(item2Desc, expItem2Desc);
    console.log("Item 2: Test #2 success")
    assert.deepStrictEqual(item2Pric, expItem2Pric);
    console.log("Item 2: Test #3 success")
    assert.deepStrictEqual(item2Img, expItem2Pic);
    console.log("Item 2: Test #4 success")
    await driver.findElement(By.id("add-to-cart-sauce-labs-bolt-t-shirt")).click();
    console.log("Item 2: Test #5 success")
    await driver.findElement(By.id("remove-sauce-labs-bolt-t-shirt")).click();
    console.log("Item 2: Test #6 success")

    //get data
    let item3Title = await driver.findElement(By.id("item_2_title_link")).getText();
    let item3Desc = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[5]/div[2]/div[1]/div")).getText();
    let item3Pric = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[5]/div[2]/div[2]/div")).getText();
    let image3 = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[5]/div[1]/a/img"));
    let item3Img = await image3.getAttribute('src');

    //correct data
    let expItem3Title = "Sauce Labs Onesie";
    let expItem3Desc = "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel."
    let expItem3Pric = "$7.99"
    let expItem3Pic = "https://qa-challenge.codesubmit.io/static/media/red-onesie-1200x1500.2ec615b2.jpg";

    //compare data
    assert.deepStrictEqual(item3Title, expItem3Title);
    console.log("Item 3: Test #1 success")
    assert.deepStrictEqual(item3Desc, expItem3Desc);
    console.log("Item 3: Test #2 success")
    assert.deepStrictEqual(item3Pric, expItem3Pric);
    console.log("Item 3: Test #3 success")
    assert.deepStrictEqual(item3Img, expItem3Pic);
    console.log("Item 3: Test #4 success")
    await driver.findElement(By.id("add-to-cart-sauce-labs-onesie")).click();
    console.log("Item 3: Test #5 success")
    await driver.findElement(By.id("remove-sauce-labs-onesie")).click();
    console.log("Item 3: Test #6 success")

    //get data
    let item4Title = await driver.findElement(By.id("item_3_title_link")).getText();
    let item4Desc = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[6]/div[2]/div[1]/div")).getText();
    let item4Pric = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[6]/div[2]/div[2]/div")).getText();
    let image4 = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[6]/div[1]/a/img"));
    let item4Img = await image4.getAttribute('src');
   
    //correct data
    let expItem4Title = "Test.allTheThings() T-Shirt (Red)";
    let expItem4Desc = "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton."
    let expItem4Pric = "$15.99"
    let expItem4Pic = "https://qa-challenge.codesubmit.io/static/media/red-tatt-1200x1500.30dadef4.jpg";

    //compare data
    assert.deepStrictEqual(item4Title, expItem4Title);
    console.log("Item 4: Test #1 success")
    assert.deepStrictEqual(item4Desc, expItem4Desc);
    console.log("Item 4: Test #2 success")
    assert.deepStrictEqual(item4Pric, expItem4Pric);
    console.log("Item 4: Test #3 success")
    assert.deepStrictEqual(item4Img, expItem4Pic);
    console.log("Item 4: Test #4 success")
    await driver.findElement(By.id("add-to-cart-test.allthethings()-t-shirt-(red)")).click();
    console.log("Item 4: Test #5 success")
    await driver.findElement(By.id("remove-test.allthethings()-t-shirt-(red)")).click();
    console.log("Item 4: Test #6 success")

    //get data
    let item5Title = await driver.findElement(By.id("item_4_title_link")).getText();
    let item5Desc = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[1]/div[2]/div[1]/div")).getText();
    let item5Pric = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[1]/div[2]/div[2]/div")).getText();
    let image5 = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[4]/div[1]/a/img"));
    let item5Img = await image5.getAttribute('src');

    //correct data
    let expItem5Title = "Sauce Labs Backpack";
    let expItem5Desc = "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."
    let expItem5Pric = "$29.99"
    let expItem5Pic = "https://qa-challenge.codesubmit.io/static/media/sauce-pullover-1200x1500.51d7ffaf.jpg";

    //compare data
    assert.deepStrictEqual(item5Title, expItem5Title);
    console.log("Item 5: Test #1 success")
    assert.deepStrictEqual(item5Desc, expItem5Desc);
    console.log("Item 5: Test #2 success")
    assert.deepStrictEqual(item5Pric, expItem5Pric);
    console.log("Item 5: Test #3 success")
    assert.deepStrictEqual(item5Img, expItem5Pic);
    console.log("Item 5: Test #4 success")
    await driver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click();
    console.log("Item 5: Test #5 success")
    await driver.findElement(By.id("remove-sauce-labs-backpack")).click();
    console.log("Item 5: Test #6 success")

    //get data
    let item6Title = await driver.findElement(By.id("item_5_title_link")).getText();
    let item6Desc = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[4]/div[2]/div[1]/div")).getText();
    let item6Pric = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[4]/div[2]/div[2]/div")).getText();
    let image6 = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[4]/div[1]/a/img"));
    let item6Img = await image6.getAttribute('src');

    //correct data
    let expItem6Title = "Sauce Labs Fleece Jacket";
    let expItem6Desc = "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office."
    let expItem6Pric = "$49.99"
    let expItem6Pic = "https://qa-challenge.codesubmit.io/static/media/sauce-pullover-1200x1500.51d7ffaf.jpg";

    //compare data
    assert.deepStrictEqual(item6Title, expItem6Title);
    console.log("Item 6: Test #1 success")
    assert.deepStrictEqual(item6Desc, expItem6Desc);
    console.log("Item 6: Test #2 success")
    assert.deepStrictEqual(item6Pric, expItem6Pric);
    console.log("Item 6: Test #3 success")
    assert.deepStrictEqual(item6Img, expItem6Pic);
    console.log("Item 6: Test #4 success")
    await driver.findElement(By.id("add-to-cart-sauce-labs-fleece-jacket")).click();
    console.log("Item 6: Test #5 success")
    await driver.findElement(By.id("remove-sauce-labs-fleece-jacket")).click();
    console.log("Item 6: Test #6 success")

}

inventory("standard_user", "secret_sauce");
