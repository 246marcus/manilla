export {};

declare global {
  // Minimal typing for our mongoose cache
  // You can refine if you prefer stricter types
  var mongooseCache:
    | {
        conn: unknown | null;
        promise: Promise<unknown> | null;
      }
    | undefined;
}
