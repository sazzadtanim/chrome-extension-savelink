console.log('background is running')

// Function to console.log any message
// chrome.runtime.onMessage.addListener((message: string) => {
//   console.log(message);
// });

chrome.runtime.onMessage.addListener(
  async (message, sender, senderResponse) => {
    if (message.type === 'post') {
      fetch(message.url, {
        method: 'POST',
        body: JSON.stringify({
          userName: message.userName,
          link: message.link
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.dir({ err }))
    }
    return true
  }
)
