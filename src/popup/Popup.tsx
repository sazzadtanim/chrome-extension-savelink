import "./Popup.css";

export const Popup = () => {
  const onSave = () => {
    chrome.runtime.sendMessage({
      type: "COUNT",
      message: "link clicked",
    });
  };

  return (
    <main>
      <button onClick={onSave}>Save link</button>
    </main>
  );
};

export default Popup;
