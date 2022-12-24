export function generetaAuthError(message) {
  switch (message) {
    case "INVALID_DATA":
      return "Data entered incorrectly";

    case "INVALID_PASSWORD":
      return "Email or password entered incorrectly";

    case "EMAIL_NOT_FOUND":
      return "Email or password entered incorrectly";

    case "EMAIL_EXISTS":
      return "User with this Email already exists";

    default:
      return "Too many login attempts. Please try later";
  }
}
