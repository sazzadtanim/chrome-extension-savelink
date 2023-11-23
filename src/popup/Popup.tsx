import { useState } from 'react'
import './Popup.css'

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
  }

  function gotoUrl() {
    chrome.tabs.update({
      url: url.goto.local
    })
  }

  return (
    <main className='flex'>
      <button onClick={postDataToURL}>
        {savedLink ? 'Saved' : 'Save link'}
      </button>
      <button onClick={gotoUrl}>collections</button>
    </main>
  )
}

export default Popup
