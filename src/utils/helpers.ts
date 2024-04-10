export const ToQuery = (object: Record<string, unknown>): string => {
  let query = Object.entries(object)
    .map(([key, value]) => (value ? `${key}=${value}` : ""))
    .join("&");
  return query;
};
export const ToObject = (query: string): Record<string, unknown> => {
  const object = query.split("&").reduce((prev, current) => {
    const [key, value] = current.split("=");
    if (value) {
      prev = {
        ...prev,
        [key]: value,
      };
    }
    return prev;
  }, {});
  return object;
};
