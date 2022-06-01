import {create, MMKVLoader} from 'react-native-mmkv-storage'

const MMKV = new MMKVLoader().initialize()

export const useMMKVStorage = create(MMKV)

export function useStorage<T = string | number | boolean | Array<any>>(
  key: string,
  defaultValue: T,
) {
  return useMMKVStorage(key, defaultValue)
}
