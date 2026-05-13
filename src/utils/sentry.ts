import * as Sentry from "@sentry/nextjs";

type LogLevel = "fatal" | "error" | "warning" | "info" | "debug";

export function logEvent(
  message: string,
  category: string = "general",
  data?: Record<string, any>,
  logLevel: LogLevel = "info",
  error?: unknown,
) {
  Sentry.addBreadcrumb({
    category,
    message,
    data,
    level: logLevel,
  });

  if (error) {
    Sentry.captureException(error, {
      extra: data,
    });
  } else {
    Sentry.captureMessage(message, logLevel);
  }
}
