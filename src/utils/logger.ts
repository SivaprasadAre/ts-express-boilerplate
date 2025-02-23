import winston from 'winston';
import fs from 'fs';
import path from 'path';
import DailyRotateFile from 'winston-daily-rotate-file';

// Define custom log levels
const logLevels = {
    levels: {
        fatal: 0,
        error: 1,
        warn: 2,
        info: 3,
        debug: 4,
        trace: 5
    }
};
// Create the logs directory if it doesn't exist
// const logsDir = path.join(__dirname, './../../logs');
const logsDir = process.cwd() + "/logs";
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

// Define custom format for logs
const logFormat = winston.format.printf(({ timestamp, level = 'info', message, stack }) => {
    // `[${timestamp}] [${level.toUpperCase()}]: ${context} [ServerName: ${serverName}] [PodName: ${podName}] [session-id: ${sessionId}] ${message}`
    let strLog = `[${timestamp}] [${level.toUpperCase()}] : ${message}`;
    if (level === 'error') strLog += " /-***-/ \n" + stack;
    return strLog;
});

// Create logger with daily rotation file transport
const logger = winston.createLogger({
    levels: logLevels.levels,
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
        logFormat
    ),
    transports: [
        new winston.transports.Console({
            level: 'debug',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
                logFormat
            )
        }),
        new DailyRotateFile({
            level: 'debug',
            filename: path.join(logsDir, 'app-%DATE%.log'), // Log file format with date
            datePattern: 'YYYY-MM-DD', // Daily file rotation
            zippedArchive: true, // Compress rotated logs
            maxSize: '20m', // Max size of a single log file
            maxFiles: '14d', // Keep logs for 14 days
            format: winston.format.combine(
                winston.format.timestamp(),
                logFormat
            )
        })
    ],
    exitOnError: false, // Do not exit on handled exceptions
});

export { logger };
