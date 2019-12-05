export const set = (key,val,storage=sessionStorage) => storage.setItem(key,JSON.stringify(val))

export const get = (key,storage=sessionStorage) => JSON.parse(storage.getItem(key))

export const remove = (key, storage=sessionStorage) => storage.removeItem(key)

export const clear = (storage=sessionStorage) => storage.clear()