export class stroge {
  static set(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  static get(key: string) {
    const value = sessionStorage.getItem(key);
    if (!value) return value;
    return JSON.parse(value);
  }

  static remove(key: string) {
    sessionStorage.removeItem(key);
  }

  static clear() {
    sessionStorage.clear();
  }
}
