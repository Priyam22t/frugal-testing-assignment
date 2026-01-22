package com.frugaltesting.tests;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import io.github.bonigarcia.wdm.WebDriverManager;

import java.io.File;
import org.apache.commons.io.FileUtils;

public class RegistrationNegativeTest {

    @Test
    public void verifyMissingLastNameError() throws Exception {

        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();

        driver.get("file:///C:/Users/priya/OneDrive/Desktop/frugal%20registration%20system/index.html");

        driver.findElement(By.id("firstName")).sendKeys("Test");
        driver.findElement(By.id("email")).sendKeys("test@gmail.com");
        driver.findElement(By.id("phone")).sendKeys("9876543210");
        driver.findElement(By.id("password")).sendKeys("Test1234");
        driver.findElement(By.id("confirmPassword")).sendKeys("Test1234");
        driver.findElement(By.id("terms")).click();

        driver.findElement(By.id("submitBtn")).click();

     // wait for error message
     Thread.sleep(2000);

     // scroll to top (where error message appears)
     ((JavascriptExecutor) driver).executeScript("window.scrollTo(0,0)");

     File src = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
     FileUtils.copyFile(src, new File("error-state.png"));


        Thread.sleep(3000);
        driver.quit();
    }
}
