import {create, MMKVLoader} from 'react-native-mmkv-storage'

const MMKV = new MMKVLoader().initialize()

export const useStorage = create(MMKV)
