const{test, epect} = require('@playwright/test');

test('Locate Multiple elements', async ({page}) => {

    await page.goto('https://demoblaze.com/')

//<-----------------Check all Links in the page--------------------------->

const allLinks = await page.$$('a');

for(const Link of allLinks){
    const allLinkText = await Link.textContent();
    console.log('Link Verify :', allLinkText);
}

//<-----------------Check all Products in the page--------------------------->

await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");

const allProducts = await page.$$("//div[@id='tbodyid']//div//h4/a");

for(const product of allProducts){
    const allProductName = await product.textContent();
    console.log('Product Verify :', allProductName);
}

page.close();

})

