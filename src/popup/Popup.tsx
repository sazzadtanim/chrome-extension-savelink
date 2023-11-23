import { useState } from 'react'
import './index.css'

export const Popup = () => {
  const url = {
    goto: {
      local: 'http://localhost:3000',
      server: 'https://nextjs-backend-for-chrome-extension-savelink.vercel.app'
    },
    api: {
      local: 'http://localhost:3000/api/test',
      server:
        'https://nextjs-backend-for-chrome-extension-savelink.vercel.app/api/test'
    }
  }
  const [savedLink, setSavedLink] = useState(false)
  async function getCurrentTab() {
    // defining rules
    let queryOptions = { active: true, lastFocusedWindow: true }
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions)
    return tab.url
  }

  async function postDataToURL() {
    const currentUrl = await getCurrentTab()
    chrome.runtime.sendMessage({
      type: 'post',
      url: url.api.local,
      userName: 'Mohammad Sazzad Hossain',
      link: currentUrl
    })
    setSavedLink(true)
  }

  function gotoUrl() {
    chrome.tabs.update({
      url: url.goto.local
    })
  }

  return (
    <main className='bg-transparent w-60 rounded-3xl justify-center items-center flex flex-col m-2'>
      <button
        onClick={postDataToURL}
        className={`border-2 px-3 py-2 w-fit hover:bg-blue-300 hover:text-white rounded-md ${
          savedLink ? 'bg-green-500 text-white' : 'bg-blue-50 '
        }`}
      >
        {savedLink ? 'Saved' : 'Save link'}
      </button>
      <button onClick={gotoUrl} className='underline'>
        collections
      </button>
    </main>
  )
}

export default Popup
