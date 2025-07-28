export default class LocalStorage {
  static getItemAsString(key: string) : string | null {
    if(!import.meta.env.SSR) {
      const item = window.localStorage.getItem(key);

      if (item === null) return null;

      return item;
    } else {
      return null;
    }
  }

  static getItemFromJson<T>(key: string) : T | null {
    const item = LocalStorage.getItemAsString(key);

    if (item === null) return null;

    return JSON.parse(item) as T;
  }

  static setItemAsString(key: string, value: string | null) {
    if(value == null) {
      window.localStorage.removeItem(key);
      return;
    }

    window.localStorage.setItem(key, value);
  }

  static setItemAsJson<T>(key: string, value: T | null) {
    if(value == null) {
      LocalStorage.setItemAsString(key, value as null);
      return;
    }

    LocalStorage.setItemAsString(key, JSON.stringify(value));
  }
}