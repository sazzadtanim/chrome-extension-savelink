import { useState } from 'react'
import './Popup.css'

export const Popup = () => {
  const [savedLink, setSavedLink] = useState(false)
  async function getCurrentTab() {
    // defining rules
    let queryOptions = { active: true, lastFocusedWindow: true }
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions)
    return tab.url
  }

  async function postDataToURL() {
    // chrome.runtime.sendMessage("working");
    const currentUrl = await getCurrentTab()
    chrome.runtime.sendMessage(
      {
        type: 'post',
        url: 'http://localhost:3000/api/test',
        // url: "https://jsonplaceholder.typicode.com/posts",
        userName: 'Mohammad Sazzad Hossain',
        link: currentUrl
      },
      response => {
        setSavedLink(true)
        console.log('response', JSON.stringify(response, null, 2))
      }
    )
  }

  function gotoUrl() {
    chrome.tabs.update({
      url: 'http://localhost:3000/'
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
