# Selenium Testing Framework (C#)

Selenium is an open-source framework for automating web browsers. It is widely used for creating automated tests to ensure the quality and stability of web applications. This guide focuses on using Selenium with **C#**.

## 📋 Description

Selenium is commonly used for:
- End-to-End (E2E) testing
- Cross-browser testing
- Automated regression testing

It allows you to simulate user interactions with web applications across multiple browsers.

## 🚀 Key Features
- **Cross-browser support**: Works with Chrome, Firefox, Edge, Safari, etc.
- **Multi-platform support**: Runs on Windows, macOS, and Linux.
- **Language flexibility**: Supports C#, Java, Python, JavaScript, and others.
- **Distributed testing**: Use Selenium Grid for parallel execution.
- **Open-source**: Free to use with active community support.

## 🛠 Installation

1. **Install Visual Studio**:
   - Download and install [Visual Studio](https://visualstudio.microsoft.com/).
   - Choose the ".NET Desktop Development" workload during installation.

2. **Set up a Selenium project**:
   - Create a new **Console App (.NET)** project in Visual Studio.
   - Install Selenium via NuGet Package Manager:
     - Open the **Tools > NuGet Package Manager > Manage NuGet Packages for Solution...**.
     - Search for and install:
       - `Selenium.WebDriver`
       - `Selenium.WebDriver.ChromeDriver` (or the driver for your preferred browser)
       - Optionally: `Selenium.Support` for additional utilities.

3. **Download and configure browser drivers**:
   - Download the appropriate driver for your browser:
     - **Chrome**: [ChromeDriver](https://chromedriver.chromium.org/)
     - **Edge**: [EdgeDriver](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/)
     - **Firefox**: [GeckoDriver](https://github.com/mozilla/geckodriver/)
   - Place the driver executable in your project's directory or add it to your system's PATH.

## 📂 Folder Structure

A simple project structure for Selenium in C# might look like this:

project/
├── Drivers/            # Browser drivers (e.g., chromedriver.exe)
├── Tests/              # Test classes
├── Utils/              # Utility functions or helper classes
└── Program.cs          # Main entry point

## 🖋 Example Test

Create a file named `GoogleSearchTest.cs` in your `Tests` folder:

```csharp
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;

namespace SeleniumTests
{
    class GoogleSearchTest
    {
        static void Main(string[] args)
        {
            // Set up the Chrome WebDriver
            IWebDriver driver = new ChromeDriver();

            try
            {
                // Open Google's homepage
                driver.Navigate().GoToUrl("https://www.google.com");

                // Verify the page title
                if (driver.Title.Contains("Google"))
                {
                    Console.WriteLine("Test Passed: Google homepage loaded successfully.");
                }
                else
                {
                    Console.WriteLine("Test Failed: Google homepage title is incorrect.");
                }

                // Find the search box, type a query, and submit
                IWebElement searchBox = driver.FindElement(By.Name("q"));
                searchBox.SendKeys("Selenium C#");
                searchBox.Submit();

                // Wait for the results to load and check the results page title
                System.Threading.Thread.Sleep(2000); // Use WebDriverWait in real tests for better reliability
                Console.WriteLine($"Results Page Title: {driver.Title}");
            }
            finally
            {
                // Close the browser
                driver.Quit();
            }
        }
    }
}

⚙️ Configuration

Adding Browser Options

You can configure the browser to run in headless mode (useful for CI/CD pipelines):

using OpenQA.Selenium.Chrome;

var options = new ChromeOptions();
options.AddArgument("--headless");
IWebDriver driver = new ChromeDriver(options);

Using WebDriverWait

For better synchronization, replace hardcoded delays with WebDriverWait:

using OpenQA.Selenium.Support.UI;

var wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
wait.Until(d => d.FindElement(By.Name("q")).Displayed);

🧪 Running Tests

	1.	Press F5 in Visual Studio to run the project.
	2.	Observe the browser actions or console output to verify the test results.

📖 Useful Resources

	•	Selenium Official Documentation
	•	NuGet Selenium WebDriver
	•	C# Selenium WebDriver Tutorial
	•	Browser Driver Setup

🧑‍💻 Support

If you encounter issues or need help:
	•	Visit the Selenium GitHub Repository.
	•	Join the Selenium Community.

Automate your browser tests and deliver high-quality applications with Selenium! 🚀
