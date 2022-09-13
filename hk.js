const puppeteer=require("puppeteer");

const loginLink="https://www.hackerrank.com/auth/login";
const codeObj=require('./code');
const email="xamot46817@stvbz.com";
const password='222525';
// let browserOpen=puppeteer.launch({
//     headless:false,
//     args:['--start-maximized'],
//     defaultViewport:null
// })
//using async await
(async function(){
    try {
        let browserInstannce=await puppeteer.launch({
            headless:false,
            args:['--start-maximized'],
            defaultViewport:null
        });
        let newTab=await browserInstannce.newPage();
        await newTab.goto(loginLink);
        await newTab.type("input[id='input-1']",email,{delay:50});
        await newTab.type("input[type='password']",password,{delay:50});
        await newTab.click("button[data-analytics='LoginPassword']",{delay:50});
        await waitAndclick('.topic-card>a[data-attr1="algorithms"]',newTab);
        await waitAndclick('input[value="warmup"]',newTab);
        let questionArr=await newTab.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled',{delay:50});
        await questionArr[0].click();
        await waitAndclick(".monaco-editor.no-user-select .vs",newTab);
        await waitAndclick('.checkbox-input',newTab);
        await newTab.waitForSelector('textarea.custominput',newTab);
        await newTab.type('textarea.custominput',codeObj.answers[0],{delay:10});
        await newTab.keyboard.down('Control');
        await newTab.keyboard.press('A');
        await newTab.keyboard.press('X');
        await newTab.keyboard.up('Control');
        await waitAndclick(".monaco-editor.no-user-select .vs",newTab);
        await newTab.keyboard.down('Control');
        await newTab.keyboard.press('A');
        await newTab.keyboard.press('V');
        await newTab.keyboard.up('Control');
        await newTab.click('.hr-monaco-submit',{delay:50});

    } catch (error) {
        console.log(error);
    }
})()
                       
async function waitAndclick(selector,cPage){
   await cPage.waitForSelector(selector);
   let selectorClicked=cPage.click(selector);
   return selectorClicked
}

// using promises

// let page
// browserOpen.then(function(browserObj){
//     let browserOpenPromise=browserObj.newPage();
//     return browserOpenPromise;
// }).then(function(newTab){
//     page=newTab;
//     let hackerrankOpenPromise=newTab.goto(loginLink);
//     return hackerrankOpenPromise;
// }).then(function(){
//     let emaiIsEntered=page.type("input[id='input-1']",email,{delay:50});
//     return emaiIsEntered;
// }).then(function(){
//     let passwordIsEntered=page.type("input[type='password']",password,{delay:50});
//     return passwordIsEntered;
// }).then(function(){
//     // let  loginButtonClick=page.keyboard.press('Enter');
//     let loginButtonClick=page.click("button[data-analytics='LoginPassword']",{delay:50});
//     return loginButtonClick;
// }).then(function(){
//     let clickOnAlgoPromise=waitAndclick('.topic-card>a[data-attr1="algorithms"]',page);
//     return clickOnAlgoPromise;
// }).then(function(){
//     let getToWarmUp=waitAndclick('input[value="warmup"]',page);
//     return getToWarmUp;
// }).then(function(){
//     let waitfor3seconds=page.waitForTimeout(3000);
//     return waitfor3seconds;
// }).then(function(){
//     let allChallengesPromise=page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled',{delay:50});
//     return allChallengesPromise;
// }).then(function(questionsArr){
//     // console.log('number of questions ', questionsArr.length);
//     let questionWillsolved=questionSolver(page,questionsArr[0],codeObj.answers[0]);
//     return questionWillsolved;
// })

// function questionSolver(page,question,answer){
//     return new Promise((resolve, reject) => {
//         let questionWillBeClicked=question.click();
//         questionWillBeClicked.then(function(){
//             let EditorInFocusPromise=waitAndclick(".monaco-editor.no-user-select .vs",page);
//             return EditorInFocusPromise;
//         }).then(function(){
//             return waitAndclick('.checkbox-input',page);
//         }).then(function(){
//             return page.waitForSelector('textarea.custominput',page)
//         }).then(function(){
//             return page.type('textarea.custominput',answer,{delay:10});
//         }).then(function(){
//             let ctrlIsPressed=page.keyboard.down('Control');
//             return ctrlIsPressed;
//         }).then(function(){
//             let AIsPressed=page.keyboard.press('A',{delay:100});
//             return AIsPressed;
//         }).then(function(){
//             let XIsPressed=page.keyboard.press('X',{delay:100});
//             return XIsPressed;
//         }).then(function(){
//             let ctrlisUnpressed=page.keyboard.up('Control');
//             return ctrlisUnpressed;
//         }).then(function(){
//             let mainEditorInFocus=waitAndclick(".monaco-editor.no-user-select .vs",page);
//             return mainEditorInFocus;
//         }).then(function(){
//             let ctrlIsPressed=page.keyboard.down('Control');
//             return ctrlIsPressed;
//         }).then(function(){
//             let AIsPressed=page.keyboard.press('A',{delay:100});
//             return AIsPressed;
//         }).then(function(){
//             let VIsPressed=page.keyboard.press('V',{delay:100});
//             return VIsPressed;
//         }).then(function(){
//             let ctrlisUnpressed=page.keyboard.up('Control');
//             return ctrlisUnpressed;
//         }).then(function(){
//             return page.click('.hr-monaco-submit',{delay:50});
//         }).then(function(){
//             resolve();
//         }).catch(function(err){
//             reject();
//         })
//     })
// }


// function waitAndclick(selector,cPage){
//     return new Promise(function(resolve,reject){
//         let waitForModelPromise=cPage.waitForSelector(selector);
//         waitForModelPromise.then(function(){
//             let clickModal=cPage.click(selector);
//             return clickModal;
//         }).then(function(){
//             resolve();
//         }).catch(function(err){
//             reject();
//         })
//     })
// }
