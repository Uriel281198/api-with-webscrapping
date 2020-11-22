const puppeter = require('puppeteer');




const deDetaDay = () => {
    
}
const getDataMonday = async (req, res) => {
    try {
        let urlBase = 'https://animeschedule.net/';
        let browser = await puppeter.launch({
            // headless: false
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ],
        });
        let page = await browser.newPage();
        await page.setViewport({
            width: 1920,
            height: 1480,
            deviceScaleFactor: 1,
        })
        await page.goto(urlBase, { waitUntil: 'networkidle2' });

        const resultado = await page.evaluate(async () =>
            [...document.querySelectorAll('.Monday .timetable-column-show .show-link')]
                .map((x) => x.href))

        let monday = [];
        for (let enlace of resultado) {
            await page.goto(enlace, { waitUntil: 'networkidle2' });
            await page.waitForTimeout(1000)

            const anime = await page.evaluate(() => {
                let temp = {}
                temp.title = document.querySelector("#show-title").innerText;
                temp.image = document.querySelector("#show-poster").src;
                temp.description = document.querySelector("#show-description").innerText
                return temp;
            })

            monday.push(anime);
        }
        res.json({ monday })
        await browser.close();
    }
    catch (e) {
        console.log(e)
    }
}

const getDataTuesday = async (req, res) => {
    try {
        let urlBase = 'https://animeschedule.net/';
        let browser = await puppeter.launch({
            // headless: false
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ],
        });
        let page = await browser.newPage();
        await page.setViewport({
            width: 1920,
            height: 1480,
            deviceScaleFactor: 1,
        })
        await page.goto(urlBase, { timeout: 0 });

        const resultado = await page.evaluate(async () =>
            [...document.querySelectorAll('.Tuesday .timetable-column-show .show-link')]
                .map((x) => x.href))
                
        let tuesday = [];
        for (let enlace of resultado) {
            await page.goto(enlace, { waitUntil: 'networkidle2' });
            await page.waitForTimeout(1000)

            const anime = await page.evaluate(() => {
                let temp = {}
                temp.title = document.querySelector("#show-title").innerText;
                temp.image = document.querySelector("#show-poster").src;
                temp.description = document.querySelector("#show-description").innerText
                return temp;
            })

            tuesday.push(anime);
        }
        res.json({ tuesday })
        await browser.close();
    }
    catch (e) {
        console.log(e)
    }
}


const getDataWednesday = async (req, res) => {
    try {
        let urlBase = 'https://animeschedule.net/';
        let browser = await puppeter.launch({
            // headless: false
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ],
        });
        let page = await browser.newPage();
        await page.setViewport({
            width: 1920,
            height: 1480,
            deviceScaleFactor: 1,
        })
        await page.goto(urlBase, { timeout: 0 });

        const resultado = await page.evaluate(async () =>
            [...document.querySelectorAll('.Wednesday .timetable-column-show .show-link')]
                .map((x) => x.href))
                
        let wednesday = [];
        for (let enlace of resultado) {
            await page.goto(enlace, { waitUntil: 'networkidle2' });
            await page.waitForTimeout(1000)

            const anime = await page.evaluate(() => {
                let temp = {}
                temp.title = document.querySelector("#show-title").innerText;
                temp.image = document.querySelector("#show-poster").src;
                temp.description = document.querySelector("#show-description").innerText
                return temp;
            })

            wednesday.push(anime);
        }
        res.json({ wednesday })
        await browser.close();
    }
    catch (e) {
        console.log(e)
    }
}
const getDataThursday = async (req, res) => {
    try {
        let urlBase = 'https://animeschedule.net/';
        let browser = await puppeter.launch({
            // headless: false
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ],
        });
        let page = await browser.newPage();
        await page.setViewport({
            width: 1920,
            height: 1480,
            deviceScaleFactor: 1,
        })
        await page.goto(urlBase, { timeout: 0 });

        const resultado = await page.evaluate(async () =>
            [...document.querySelectorAll('.Thursday .timetable-column-show .show-link')]
                .map((x) => x.href))
                
        let wednesday = [];
        for (let enlace of resultado) {
            await page.goto(enlace, { waitUntil: 'networkidle2' });
            await page.waitForTimeout(1000)

            const anime = await page.evaluate(() => {
                let temp = {}
                temp.title = document.querySelector("#show-title").innerText;
                temp.image = document.querySelector("#show-poster").src;
                temp.description = document.querySelector("#show-description").innerText
                return temp;
            })

            wednesday.push(anime);
        }
        res.json({ wednesday })
        await browser.close();
    }
    catch (e) {
        console.log(e)
    }
}

const getDataFriday = async (req, res) => {
    try {
        let urlBase = 'https://animeschedule.net/';
        let browser = await puppeter.launch({
            // headless: false
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ],
        });
        let page = await browser.newPage();
        await page.setViewport({
            width: 1920,
            height: 1480,
            deviceScaleFactor: 1,
        })
        await page.goto(urlBase, { waitUntil: 'networkidle2' });

        const resultado = await page.evaluate(async () =>
            [...document.querySelectorAll('.Friday .timetable-column-show .show-link')]
                .map((x) => x.href))
                
        let wednesday = [];
        for (let enlace of resultado) {
            await page.goto(enlace, { waitUntil: 'networkidle2' });
            await page.waitForTimeout(1000)

            const anime = await page.evaluate(() => {
                let temp = {}
                temp.title = document.querySelector("#show-title").innerText;
                temp.image = document.querySelector("#show-poster").src;
                temp.description = document.querySelector("#show-description").innerText
                return temp;
            })

            wednesday.push(anime);
        }
        res.json({ wednesday })
        await browser.close();
    }
    catch (e) {
        console.log(e)
    }
}
const getDataSaturday = async (req, res) => {
    try {
        let urlBase = 'https://animeschedule.net/';
        let browser = await puppeter.launch({
            // headless: false
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ],
        });
        let page = await browser.newPage();
        await page.setViewport({
            width: 1920,
            height: 1480,
            deviceScaleFactor: 1,
        })
        await page.goto(urlBase, { waitUntil: 'networkidle2' });

        const resultado = await page.evaluate(async () =>
            [...document.querySelectorAll('.Saturday .timetable-column-show .show-link')]
                .map((x) => x.href))
                
        let wednesday = [];
        for (let enlace of resultado) {
            await page.goto(enlace, { waitUntil: 'networkidle2' });
            await page.waitForTimeout(1000)

            const anime = await page.evaluate(() => {
                let temp = {}
                temp.title = document.querySelector("#show-title").innerText;
                temp.image = document.querySelector("#show-poster").src;
                temp.description = document.querySelector("#show-description").innerText
                return temp;
            })

            wednesday.push(anime);
        }
        res.json({ wednesday })
        await browser.close();
    }
    catch (e) {
        console.log(e)
    }
}
const getDataSunday = async (req, res) => {
    try {
        let urlBase = 'https://animeschedule.net/';
        let browser = await puppeter.launch({
            // headless: false
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ],
        });
        let page = await browser.newPage();
        await page.setViewport({
            width: 1920,
            height: 1480,
            deviceScaleFactor: 1,
        })
        await page.goto(urlBase,{ waitUntil: 'networkidle2' });

        const resultado = await page.evaluate(async () =>
            [...document.querySelectorAll('.Sunday .timetable-column-show .show-link')]
                .map((x) => x.href))
                
        let wednesday = [];
        for (let enlace of resultado) {
            await page.goto(enlace, { waitUntil: 'networkidle2' });
            await page.waitForTimeout(1000)

            const anime = await page.evaluate(() => {
                let temp = {}
                temp.title = document.querySelector("#show-title").innerText;
                temp.image = document.querySelector("#show-poster").src;
                temp.description = document.querySelector("#show-description").innerText
                return temp;
            })

            wednesday.push(anime);
        }
        res.json({ wednesday })
        await browser.close();
    }
    catch (e) {
        console.log(e)
    }
}



module.exports = {
    getDataMonday,
    getDataTuesday,
    getDataWednesday,
    getDataThursday,
    getDataFriday,
    getDataSaturday,
    getDataSunday,
}