//----------------------------------------------------------------------------------------
    import { Builder, By, until } from 'selenium-webdriver';
    import assert from 'assert';
    import chrome from 'selenium-webdriver/chrome.js';
    import fs from 'fs';
    import {PNG} from "pngjs";
    import pixelmatch from 'pixelmatch';
    import page_login from '../pages/page_login.js';
	describe('Swag Labs Test', function () {
    let driver;
//----------------------------------------------------------------------------------------       
        beforeEach(async function () {
        console.log('beforeEach() hook: Membuka URL');
        const options = new chrome.Options();
        options.addArguments('--incognito'); 
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
        await driver.get('https://www.saucedemo.com');
        });
//----------------------------------------------------------------------------------------
        afterEach(async function () {       
        console.log('afterEach() hook: Menutup driver');
        await driver.sleep(500);       
        await driver.quit();
        });    
//---------------------------------------------------------------------------------------
            it('Test Case 1 - Web Address', async function () {
            const title = await driver.getTitle();
            assert.strictEqual(title,'Swag Labs');

            let screenshot = await driver.takeScreenshot();
            let imgBuffer = Buffer.from(screenshot,"base64");
            fs.writeFileSync("screen/web/current.png", imgBuffer);
            if(!fs.existsSync("screen/web/baseline.png"))
                {
                fs.copyFileSync("screen/web/current.png","screen/web/baseline.png");
                console.log("Baseline image saved.");
                }
                    let img1 = PNG.sync.read(fs.readFileSync("screen/web/baseline.png"));
                    let img2 = PNG.sync.read(fs.readFileSync("screen/web/current.png"));
                    let {width, height} = img1;
                    let diff = new PNG ({ width, height});
                    let numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.6});      
                    fs.writeFileSync("screen/web/diff.png", PNG.sync.write(diff));          
                    if (numDiffPixels > 0) {
                    console.log(`Ada perbedaan visual! Pixels different: ${numDiffPixels}`);
                    } else {
                    console.log("Tidak ada perbedaan visual.");
                    }
                assert.strictEqual(numDiffPixels, 0, 'Visual Fail');
        })
//-----------------------------------------------------------------------------------------
            it('Test Case 2 - Test Case Negative Login username empty', async function () {
            let inputUsername = await driver.findElement(page_login.inputUsername)
            let inputPassword = await driver.findElement(page_login.inputPassword)
            let buttonLogin = await driver.findElement(page_login.buttonLogin) 
            await inputUsername.sendKeys('')
            await inputPassword.sendKeys('secret_sauce')
            await buttonLogin.click()

            let screenshot = await driver.takeScreenshot();
            let imgBuffer = Buffer.from(screenshot,"base64");
            fs.writeFileSync("screen/login/empty_username/current.png", imgBuffer);
            if(!fs.existsSync("screen/lpgin/empty_username/baseline.png"))
                {
                fs.copyFileSync("screen/login/empty_username/current.png","screen/login/empty_username/baseline.png");
                console.log("Baseline image saved.");
                }
                    let img1 = PNG.sync.read(fs.readFileSync("screen/login/empty_username/baseline.png"));
                    let img2 = PNG.sync.read(fs.readFileSync("screen/login/empty_username/current.png"));
                    let {width, height} = img1;
                    let diff = new PNG ({ width, height});
                    let numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.6});      
                    fs.writeFileSync("screen/login/empty_username/diff.png", PNG.sync.write(diff));          
                    if (numDiffPixels > 0) {
                    console.log(`Ada perbedaan visual! Pixels different: ${numDiffPixels}`);
                    } else {
                    console.log("Tidak ada perbedaan visual.");
                    }
                assert.strictEqual(numDiffPixels, 0, 'Visual Fail');  
        });
//--------------------------------------------------------------------------------------
        it('Test Case 3 - Test Case Negative Login username invalid', async function () {
            let inputUsername = await driver.findElement(page_login.inputUsername)
            let inputPassword = await driver.findElement(page_login.inputPassword)
            let buttonLogin = await driver.findElement(page_login.buttonLogin) 
            await inputUsername.sendKeys('standard_us')
            await inputPassword.sendKeys('secret_sauce')
            await buttonLogin.click()

            let screenshot = await driver.takeScreenshot();
            let imgBuffer = Buffer.from(screenshot,"base64");
            fs.writeFileSync("screen/login/invalid_username/current.png", imgBuffer);
            if(!fs.existsSync("screen/login/invalid_username/baseline.png"))
                {
                fs.copyFileSync("screen/login/invalid_username/current.png","screen/login/invalid_username/baseline.png");
                console.log("Baseline image saved.");
                }
                    let img1 = PNG.sync.read(fs.readFileSync("screen/login/invalid_username/baseline.png"));
                    let img2 = PNG.sync.read(fs.readFileSync("screen/login/invalid_username/current.png"));
                    let {width, height} = img1;
                    let diff = new PNG ({ width, height});
                    let numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.6});      
                    fs.writeFileSync("screen/login/invalid_username/diff.png", PNG.sync.write(diff));          
                    if (numDiffPixels > 0) {
                    console.log(`Ada perbedaan visual! Pixels different: ${numDiffPixels}`);
                    } else {
                    console.log("Tidak ada perbedaan visual.");
                    }
                assert.strictEqual(numDiffPixels, 0, 'Visual Fail');  
        });
//--------------------------------------------------------------------------------------
        it('Test Case 4 - Test Case Negative Login password invalid', async function () {
            let inputUsername = await driver.findElement(page_login.inputUsername)
            let inputPassword = await driver.findElement(page_login.inputPassword)
            let buttonLogin = await driver.findElement(page_login.buttonLogin) 
            await inputUsername.sendKeys('standard_user')
            await inputPassword.sendKeys('secret_sau')
            await buttonLogin.click()

            let screenshot = await driver.takeScreenshot();
            let imgBuffer = Buffer.from(screenshot,"base64");
            fs.writeFileSync("screen/login/invalid_password/current.png", imgBuffer);
            if(!fs.existsSync("screen/login/invalid_password/baseline.png"))
                {
                fs.copyFileSync("screen/login/invalid_password/current.png","screen/login/invalid_password/baseline.png");
                console.log("Baseline image saved.");
                }
                    let img1 = PNG.sync.read(fs.readFileSync("screen/login/invalid_password/baseline.png"));
                    let img2 = PNG.sync.read(fs.readFileSync("screen/login/invalid_password/current.png"));
                    let {width, height} = img1;
                    let diff = new PNG ({ width, height});
                    let numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.6});      
                    fs.writeFileSync("screen/login/invalid_password/diff.png", PNG.sync.write(diff));          
                    if (numDiffPixels > 0) {
                    console.log(`Ada perbedaan visual! Pixels different: ${numDiffPixels}`);
                    } else {
                    console.log("Tidak ada perbedaan visual.");
                    }
                assert.strictEqual(numDiffPixels, 0, 'Visual Fail');
        });
//--------------------------------------------------------------------------------------
        it('Test Case 5 - Test Case Negative Login password empty', async function () {
            let inputUsername = await driver.findElement(page_login.inputUsername)
            let inputPassword = await driver.findElement(page_login.inputPassword)
            let buttonLogin = await driver.findElement(page_login.buttonLogin) 
            await inputUsername.sendKeys('standard_user')
            await inputPassword.sendKeys('')
            await buttonLogin.click()

            let screenshot = await driver.takeScreenshot();
            let imgBuffer = Buffer.from(screenshot,"base64");
            fs.writeFileSync("screen/login/empty_password/current.png", imgBuffer);
            if(!fs.existsSync("screen/login/empty_password/baseline.png"))
                {
                fs.copyFileSync("screen/login/empty_password/current.png","screen/login/empty_password/baseline.png");
                console.log("Baseline image saved.");
                }
                    let img1 = PNG.sync.read(fs.readFileSync("screen/login/empty_password/baseline.png"));
                    let img2 = PNG.sync.read(fs.readFileSync("screen/login/empty_password/current.png"));
                    let {width, height} = img1;
                    let diff = new PNG ({ width, height});
                    let numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.6});      
                    fs.writeFileSync("screen/login/empty_password/diff.png", PNG.sync.write(diff));          
                    if (numDiffPixels > 0) {
                    console.log(`Ada perbedaan visual! Pixels different: ${numDiffPixels}`);
                    } else {
                    console.log("Tidak ada perbedaan visual.");
                    }
                assert.strictEqual(numDiffPixels, 0, 'Visual Fail');  
        });
//------------------------------------------------------------------------------------------
        it('Test Case 6 - Test Case Positive Sort Product A - Z', async function () {
            let inputUsername = await driver.findElement(page_login.inputUsername)
            let inputPassword = await driver.findElement(page_login.inputPassword)
            let buttonLogin = await driver.findElement(page_login.buttonLogin) 
            await inputUsername.sendKeys('problem_user') // problem_user ==> Tampilan produk tidak sesuai
            await inputPassword.sendKeys('secret_sauce')
            await buttonLogin.click()

            await driver.wait(until.urlContains('/inventory.html'), 2000, 'Login failed within 2 seconds.');
            let pageTitle = await driver.getTitle();
            assert.strictEqual(pageTitle, 'Swag Labs', 'Page title "Swag Labs" after successful login.');
            console.log('Login berhasil');
            
            let screenshot = await driver.takeScreenshot();
            let imgBuffer = Buffer.from(screenshot,"base64");
            fs.writeFileSync("screen/sort/a_to_z/current.png", imgBuffer);
            if(!fs.existsSync("screen/sort/a_to_z/baseline.png"))
                {
                fs.copyFileSync("screen/sort/a_to_z/current.png","screen/sort/a_to_z/baseline.png");
                console.log("Baseline image saved.");
                }
                    let img1 = PNG.sync.read(fs.readFileSync("screen/sort/a_to_z/baseline.png"));
                    let img2 = PNG.sync.read(fs.readFileSync("screen/sort/a_to_z/current.png"));
                    let {width, height} = img1;
                    let diff = new PNG ({ width, height});
                    let numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.6});      
                    fs.writeFileSync("screen/sort/a_to_z/diff.png", PNG.sync.write(diff));          
                    if (numDiffPixels > 0) {
                    console.log(`Ada perbedaan visual! Pixels different: ${numDiffPixels}`);
                    } else {
                    console.log("Tidak ada perbedaan visual.");
                    }
                assert.strictEqual(numDiffPixels, 0, 'Visual Fail');
        });  
//------------------------------------------------------------------------------------------
        it('Test Case 7 - Test Case Positive Sort Product Z - A', async function () {
            let inputUsername = await driver.findElement(page_login.inputUsername)
            let inputPassword = await driver.findElement(page_login.inputPassword)
            let buttonLogin = await driver.findElement(page_login.buttonLogin) 
            await inputUsername.sendKeys('standard_user')
            await inputPassword.sendKeys('secret_sauce')
            await buttonLogin.click()

            await driver.wait(until.urlContains('/inventory.html'), 2000, 'Login failed within 2 seconds.');
            let pageTitle = await driver.getTitle();
            assert.strictEqual(pageTitle, 'Swag Labs', 'Page title "Swag Labs" after successful login.');
            console.log('Login berhasil');
            
            const optionZa = await driver.findElement(By.xpath("//select[@class='product_sort_container']/option[@value='za']"));
            await optionZa.click();
            let product_sort_container = await driver.findElement(By.xpath('//div[normalize-space()="Test.allTheThings() T-Shirt (Red)"]'));
            let isProductDisplayed = await product_sort_container.isDisplayed();
            assert.strictEqual(isProductDisplayed, true, 'The "Test.allTheThings() T-Shirt (Red)" product should be displayed.');
            console.log('Berhasil sort produk "Name (Z to A)".');

            let screenshot = await driver.takeScreenshot();
            let imgBuffer = Buffer.from(screenshot,"base64");
            fs.writeFileSync("screen/sort/z_to_a/current.png", imgBuffer);
            if(!fs.existsSync("screen/sort/z_to_a/baseline.png"))
                {
                fs.copyFileSync("screen/sort/z_to_a/current.png","screen/sort/z_to_a/baseline.png");
                console.log("Baseline image saved.");
                }
                    let img1 = PNG.sync.read(fs.readFileSync("screen/sort/z_to_a/baseline.png"));
                    let img2 = PNG.sync.read(fs.readFileSync("screen/sort/z_to_a/current.png"));
                    let {width, height} = img1;
                    let diff = new PNG ({ width, height});
                    let numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.6});      
                    fs.writeFileSync("screen/sort/z_to_a/diff.png", PNG.sync.write(diff));          
                    if (numDiffPixels > 0) {
                    console.log(`Ada perbedaan visual! Pixels different: ${numDiffPixels}`);
                    } else {
                    console.log("Tidak ada perbedaan visual.");
                    }
                assert.strictEqual(numDiffPixels, 0, 'Visual Fail');
        });   
//----------------------------------------------------------------------------------
 });