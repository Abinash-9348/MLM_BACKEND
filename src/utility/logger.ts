import { createLogger, transports, format } from "winston"

export const logger = createLogger({
  level: "info",
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.printf(({ level, message, timestamp }) => {
      return `[${level}] ${timestamp} - ${message}`;
    })
  ),
  transports: [
    new transports.Console()
  ]
});


