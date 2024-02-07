import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    //TODO
  })
} catch (err) {
  console.log('error from preload/index.ts : ', err)
}
