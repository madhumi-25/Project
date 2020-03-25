$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Feature/TestCase.feature");
formatter.feature({
  "line": 2,
  "name": "Testing the practice automation website",
  "description": "",
  "id": "testing-the-practice-automation-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Practice_Automation_Project"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "To check if the user is able to login with valid details",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-login-with-valid-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@TC-01-Login_functionlity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Open the Practice automation website",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Enter valid and invalid \"\u003cemail\u003e\" and \"\u003cpassword\u003e\" in Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click login button",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-login-with-valid-details;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 14,
      "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-login-with-valid-details;;1"
    },
    {
      "cells": [
        "madhusavi1@gmail.com",
        "madhuvickyrekha"
      ],
      "line": 15,
      "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-login-with-valid-details;;2"
    },
    {
      "cells": [
        "mavire@gmail.com",
        "mavire3456"
      ],
      "line": 16,
      "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-login-with-valid-details;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "To check if the user is able to login with valid details",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-login-with-valid-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Practice_Automation_Project"
    },
    {
      "line": 5,
      "name": "@TC-01-Login_functionlity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Open the Practice automation website",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Enter valid and invalid \"madhusavi1@gmail.com\" and \"madhuvickyrekha\" in Login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.the_user_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 7661718655,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 25366145832,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "madhusavi1@gmail.com",
      "offset": 25
    },
    {
      "val": "madhuvickyrekha",
      "offset": 52
    }
  ],
  "location": "LoginSteps.enter_valid_and_invalid_and_in_Login(String,String)"
});
formatter.result({
  "duration": 33113759495,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"menu-item-50\"]/a\"}\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:49232}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 84b479c3634de4ef33308eaf78213b41\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"menu-item-50\"]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.practiceautomation.pages.LoginPage.loginDetails(LoginPage.java:60)\r\n\tat com.practiceautomation.stepdefinition.LoginSteps.enter_valid_and_invalid_and_in_Login(LoginSteps.java:33)\r\n\tat ✽.Then Enter valid and invalid \"madhusavi1@gmail.com\" and \"madhuvickyrekha\" in Login(src/main/resources/Feature/TestCase.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "To check if the user is able to login with valid details",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-login-with-valid-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Practice_Automation_Project"
    },
    {
      "line": 5,
      "name": "@TC-01-Login_functionlity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Open the Practice automation website",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Enter valid and invalid \"mavire@gmail.com\" and \"mavire3456\" in Login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.the_user_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 2916356851,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 72538934482,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:49315}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 559d0545fb5e8ed9bb8c261f67b85c0e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat com.practiceautomation.pages.LoginPage.openWebsite(LoginPage.java:51)\r\n\tat com.practiceautomation.stepdefinition.LoginSteps.open_the_Practice_automation_website(LoginSteps.java:26)\r\n\tat ✽.When Open the Practice automation website(src/main/resources/Feature/TestCase.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "mavire@gmail.com",
      "offset": 25
    },
    {
      "val": "mavire3456",
      "offset": 48
    }
  ],
  "location": "LoginSteps.enter_valid_and_invalid_and_in_Login(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "To check if the user is able to add the books in the basket on the filtered price",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-add-the-books-in-the-basket-on-the-filtered-price",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@TC-02-Filtering_and_adding_books_to_Basket"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "Launch the Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "open Practice automation website",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Enter the Email and password in login",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Click on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Click Shop icon and Filter price using Slider",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Add the books to the basket and View the cart",
  "keyword": "And "
});
formatter.match({
  "location": "FilterAddBooksToBasketSteps.launch_the_Chrome_browser()"
});
formatter.result({
  "duration": 2727314499,
  "status": "passed"
});
formatter.match({
  "location": "FilterAddBooksToBasketSteps.open_Practice_automation_website()"
});
formatter.result({
  "duration": 994415523,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:49379}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: fd1b53e0145eaaad658f50e8904ff512\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.practiceautomation.pages.FilterAddBooksToBasketPage.openWebsite(FilterAddBooksToBasketPage.java:60)\r\n\tat com.practiceautomation.stepdefinition.FilterAddBooksToBasketSteps.open_Practice_automation_website(FilterAddBooksToBasketSteps.java:29)\r\n\tat ✽.When open Practice automation website(src/main/resources/Feature/TestCase.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FilterAddBooksToBasketSteps.enter_the_Email_and_password_in_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FilterAddBooksToBasketSteps.click_on_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FilterAddBooksToBasketSteps.click_Shop_icon_and_Filter_price_using_Slider()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FilterAddBooksToBasketSteps.add_the_books_to_the_basket_and_View_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 30,
  "name": "To check if the user is able to buy books from HTML category",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-buy-books-from-html-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@TC_03_Adding_books_from_HTML_Category"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "To Launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "To open the Practice automation website",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Enter Email and password in login field",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Click on the Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Click Shop icon, Click HTML and buy the book",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "View the cart html book",
  "keyword": "And "
});
formatter.match({
  "location": "HTMLCategorySteps.to_Launch_the_chrome_browser()"
});
