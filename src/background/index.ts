console.log("background is running");

// Function to console.log any message
chrome.runtime.onMessage.addListener((message: string) => {
  console.log(message);
});

// chrome.runtime.onMessage.addListener((message, sender, senderResponse) => {
//   fetch(message.url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(message.body),
//   })
//     .then((res) => res.json())
//     .then((res) => res.senderResponse)
//     .catch((err) => console.log(err));
// });
