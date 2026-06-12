/**
 * Server-side input sanitization.
 * React escapes values on render, so XSS risk is at the API boundary (what
 * we forward to external services like GHL). Strip tags and dangerous patterns
 * before touching any external call.
 */

export function sanitizeInput(value: unknown, maxLen = 500): string {
  if (typeof value !== "string") return "";
  return value
    .slice(0, maxLen)
    .replace(/<[^>]*>/g, "")           // strip HTML tags
    .replace(/javascript\s*:/gi, "")   // strip JS protocol
    .replace(/on\w+\s*=/gi, "")        // strip inline event handlers
    .trim();
}

export function sanitizeEmail(value: unknown): string {
  const s = sanitizeInput(value, 254);
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s) ? s : "";
}

export function sanitizePhone(value: unknown): string {
  if (typeof value !== "string") return "";
  // Keep digits, spaces, dashes, parentheses, plus sign only
  return value.replace(/[^\d\s\-().+]/g, "").slice(0, 30).trim();
}
