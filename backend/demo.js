const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  const axios = require("axios");
  
  function displayGuidelines() {
    console.log(
      "\nEnter state name parameter with value to return population history of the state",
    );
    console.log("Example: state_name=Alabama");
    console.log("Or");
    console.log(
      "Enter year to return list of state names and population, 2013-2021 supported",
    );
    console.log("Example: full_report=2020");
    console.log("Enter quit to exit program");
  }
  
  async function fetchData() {
    try {
      const response = await axios.get(
        "https://datausa.io/api/data?drilldowns=State&measures=Population",
      );
      return response.data.data;
    } catch (error) {
      console.error("Failed to fetch data:", error);
      return null;
    }
  }
  
  function processStateName(data, input) {
    const results = data.filter((item) => item.State === input);
    if (results.length === 0) {
      console.log("No results found, please try again.\n");
      displayGuidelines();
      return;
    }
    results.sort((a, b) => a.Year - b.Year);
    results.forEach((item) => {
      console.log(
        `Population in ${item.State} in ${item.Year} is ${item.Population}`,
      );
    });
    displayGuidelines();
  }
  
  function processFullReport(data, input) {
    if (input > 2021 || input < 2013) {
      console.log("Invalid input range. Please try again.\n");
      displayGuidelines();
      return;
    }
    const results = data.filter((item) => item.Year === input);
    results.sort((a, b) => b.Population - a.Population);
    results.forEach((item) => {
      console.log(`${item.State} Population in ${input}: ${item.Population}`);
    });
    displayGuidelines();
  }
  
  async function handleInput(input) {
    const data = await fetchData();
    if (!data) return; // Exit if data fetching failed
    const [param, value] = input.split("=");
    if (param === "state_name") {
      processStateName(data, value);
    } else if (param === "full_report") {
      processFullReport(data, value);
    } else {
      console.log("Invalid input.");
      displayGuidelines();
    }
  }
  
  function runProgram() {
    readline.question("", async (parameter) => {
      if (parameter === "quit") {
        console.log("Exiting program.");
        readline.close();
        return;
      }
      await handleInput(parameter);
      runProgram();
    });
  }
  
  displayGuidelines();
  runProgram();
  