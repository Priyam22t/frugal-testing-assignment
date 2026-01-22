package com.frugaltesting.tests;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import io.github.bonigarcia.wdm.WebDriverManager;

public class RegistrationDropdownTest {

    @Test
    public void verifyCountryStateCityDropdown() throws Exception {

        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();

        driver.get("file:///C:/Users/priya/OneDrive/Desktop/frugal%20registration%20system/index.html");

        // Select Country
        Select country = new Select(driver.findElement(By.id("country")));
        country.selectByVisibleText("India");
        Thread.sleep(1500);

        // Select State
        Select state = new Select(driver.findElement(By.id("state")));
        state.selectByVisibleText("Maharashtra");
        Thread.sleep(1500);

        // Select City
        Select city = new Select(driver.findElement(By.id("city")));
        city.selectByVisibleText("Mumbai");
        Thread.sleep(2000);

        driver.quit();
    }
}
