export const wait = <T,>(data: T) => new Promise<T>((resolve) => setTimeout(() => resolve(data), 180))
