import pino from "pino";

export const logger = pino({
  redact: ["hostname"],
  timestamp() {
    return `, ${new Date().toISOString()}`;
  },
});
