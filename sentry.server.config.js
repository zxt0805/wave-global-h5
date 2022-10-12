import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN || 'https://849e851f5afb43e08a3f0c1f3b6c30ca@o4503965640097792.ingest.sentry.io/4503965641736192',
  tracesSampleRate: 1.0,
});
