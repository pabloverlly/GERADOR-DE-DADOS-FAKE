chrome.runtime.onMessage.addListener(async (msg) =>
{
    let fakeDataElement = document.activeElement;
    fakeDataElement.value = msg;
});