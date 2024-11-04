using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;

namespace UnitTestsApp
{
    [TestFixture]
    public class GoogleSearchTest1
    {
        private IWebDriver? driver;

        [OneTimeSetUp]
        public void Setup()
        {
            // Initialize the ChromeDriver
            driver = new ChromeDriver(@"C:\Users\opilane\source\repos\UnitTestsApp\UnitTestsApp\drivers");
            // Maximize the browser window
            driver.Manage().Window.Maximize();
            // Set an implicit wait time
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
        }

        [Test, Order(1)]
        public void SearchTest()
        {
            // Navigate to the URL
            driver!.Navigate().GoToUrl("https://maksimdotskin22.thkit.ee/hirmumaja/");

            // Accept cookies if prompted (optional, depends on region)
            try
            {
                var acceptCookiesButton = driver.FindElement(By.Id("echo1"));
                acceptCookiesButton.Click();
            }
            catch (Exception ex)
            {
                Console.WriteLine("ERROR: "+ex.Message);
            }
        }

        // 1. Title Verification Test
        [Test, Order(2)]
        public void VerifyPageTitleTest()
        {
            driver!.Navigate().GoToUrl("https://maksimdotskin22.thkit.ee/hirmumaja/");
            string pageTitle = driver.Title;
            Assert.AreEqual("Hirmude maja", pageTitle, "The page title does not match");
        }

        // 2. Verify Element Visibility Test
        [Test, Order(5)]
        public void VerifyElementVisibilityTest()
        {
            driver!.Navigate().GoToUrl("https://maksimdotskin22.thkit.ee/hirmumaja/");

            IWebElement element = driver.FindElement(By.Id("parool"));
            Assert.IsTrue(element.Displayed, "Üksust ei kuvata lehel");
        }

        // 3. Verify Form Submission Error Message Test
        [Test, Order(6)]
        public void VerifyFormSubmissionErrorMessageTest()
        {
            driver!.Navigate().GoToUrl("https://maksimdotskin22.thkit.ee/hirmumaja/autoriseerimine/logiSisse.php");

            IWebElement submitButton = driver.FindElement(By.Id("logiSisse"));
            submitButton.Click();

            IWebElement errorMessage = driver.FindElement(By.Id("vastus"));
            Assert.IsTrue(errorMessage.Displayed, "Tõrketeadet ei kuvata");
        }


        [OneTimeTearDown]
        public void Teardown()
        {
            if (driver != null)
            {
                driver.Quit();     // Close all browser windows and safely end the session
                driver.Dispose();  // Release all resources
                driver = null;     // Set driver to null to aid garbage collection
            }
        }
    }
}