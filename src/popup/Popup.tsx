import { useState } from 'react'

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
      url: url.api.server,
      userName: 'Mohammad Sazzad Hossain',
      link: currentUrl
    })
    setSavedLink(true)
  }

  function gotoUrl() {
    chrome.tabs.update({
      url: url.goto.server
    })
  }

  return (
    <main className='w-60 p-5 flex gap-2 justify-center items-center shadow-md '>
      <button
        onClick={postDataToURL}
        className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded w-fit'
      >
        {savedLink ? '✔️ Saved' : 'Save link'}
      </button>
      <button
        onClick={gotoUrl}
        className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded w-fit'
      >
        Collections
      </button>
    </main>
  )
}

export default Popup
