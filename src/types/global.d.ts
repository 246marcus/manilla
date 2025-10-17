export {};

declare global {
  // Existing mongoose cache typing
  var mongooseCache:
    | {
        conn: unknown | null;
        promise: Promise<unknown> | null;
      }
    | undefined;

  // ✅ Add Zoho SalesIQ global type
  interface Window {
    $zoho: any;
  }
}
