export function generetaReviewError(message) {
  switch (message) {
    case "NOT ACCEPTABLE":
      return "The field is required to fill";

    default:
      return "Too many login attempts. Please try later";
  }
}
