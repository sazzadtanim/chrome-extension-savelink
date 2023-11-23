console.log("background is running");

chrome.runtime.onMessage.addListener((request) => {
  if (request.type === "COUNT") {
    console.log(
      "background has received a message from popup, and the message is :",
      request?.message
    );
  }
});

chrome.runtime.onMessage.addListener((message, sender, senderResponse) => {
  fetch(message.url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message.body),
  })
    .then((res) => res.json())
    .then((res) => res.senderResponse)
    .catch((err) => console.log(err));
});
