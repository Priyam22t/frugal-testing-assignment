package com.frugaltesting.tests;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import io.github.bonigarcia.wdm.WebDriverManager;

import java.io.File;
import org.apache.commons.io.FileUtils;

public class RegistrationPositiveTest {

    @Test
    public void verifySuccessfulRegistration() throws Exception {

        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();

        driver.get("file:///C:/Users/priya/OneDrive/Desktop/frugal%20registration%20system/index.html");

        driver.findElement(By.id("firstName")).sendKeys("Test");
        driver.findElement(By.id("lastName")).sendKeys("User");
        driver.findElement(By.id("email")).sendKeys("testuser@gmail.com");
        driver.findElement(By.id("phone")).sendKeys("9876543210");

        driver.findElement(By.id("password")).sendKeys("Test1234");
        driver.findElement(By.id("confirmPassword")).sendKeys("Test1234");
        driver.findElement(By.id("terms")).click();

        driver.findElement(By.id("submitBtn")).click();

        // Screenshot after success
        File src = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(src, new File("success-state.png"));

        Thread.sleep(3000);
        driver.quit();
    }
}
