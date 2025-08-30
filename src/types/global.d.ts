export {};

declare global {
  // Minimal typing for our mongoose cache
  // You can refine if you prefer stricter types
  var mongooseCache:
    | {
        conn: any | null;
        promise: Promise<any> | null;
      }
    | undefined;
}
