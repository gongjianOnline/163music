import { contextBridge,ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}

/* 窗口操作变化 */
contextBridge.exposeInMainWorld("mainWindow",{
  /* 最小化窗口 */
  "onMinimize":()=>{
    ipcRenderer.send("handelMinimize")
  },
  /* 最大窗口 */
  "onMaxWindow":()=>{
    ipcRenderer.send("handelMaxWindow")
  },
  "onClose":()=>{
    ipcRenderer.send("handelClose")
  },
  /* 获取窗口大小 */
  "getWindowStatus":()=>{
    return ipcRenderer.invoke("getWindowStatus");
  }


})
