import { t } from 'gt-react/browser';

// Module-level translations — resolved at import time via bootstrap()
export const NAV_ITEMS = [
  { label: t('Home'), path: '/' },
  { label: t('About'), path: '/about' },
  { label: t('Contact'), path: '/contact' },
];

export const ERROR_MESSAGES = {
  notFound: t('Page not found'),
  unauthorized: t('You do not have permission to view this page'),
  serverError: t('Something went wrong. Please try again later.'),
};
