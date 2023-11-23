import "./Popup.css";

export const Popup = () => {
  const onSave = async () => {
    chrome.runtime.sendMessage("link clicked");
  };

  async function getCurrentTab() {
    // defining rules
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    chrome.runtime.sendMessage(tab.url);
  }

  return (
    <main>
      <button onClick={() => getCurrentTab()}>Save link</button>
    </main>
  );
};

export default Popup;
