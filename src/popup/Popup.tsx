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
    <main className='w-60 p-5 flex gap-2 justify-center items-center shadow-md bg-black/80'>
      <button
        onClick={postDataToURL}
        className='w-fit button_content button h-[2rem] flex  max-w-fit select-none items-center gap-2 rounded-[10px]  capitalize px-2 ring-2'
      >
        <p className='text-white z-10 hover:text-black'>
          {savedLink ? '✔️ Saved' : 'Save link'}
        </p>
      </button>
      <button
        onClick={gotoUrl}
        className='w-fit button_content button h-[2rem] flex  max-w-fit select-none items-center gap-2 rounded-[10px]  capitalize px-2 ring-2'
      >
        <p className='text-white z-10 hover:text-black'>Collections</p>
      </button>
    </main>
  )
}

export default Popup
