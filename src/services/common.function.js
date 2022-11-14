export function getErrorString(error, defaultValue) {
  let e = defaultValue || "Something went wrong. Please try again";
  if (typeof error === "string") {
    e = error;
  } else if (error && error.message) {
    e = error.message;
  } else if (error && error.props) {
    e = error.props;
  }
  return e;
}
