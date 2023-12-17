const classNames = (...classNames: (string | boolean)[]): string =>
  classNames.filter(Boolean).join(" ");

export default classNames;
