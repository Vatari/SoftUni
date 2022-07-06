function encodeAndDecodeMessages() {
  let [btnENcode, btnDecode] = [...document.getElementsByTagName("button")];

  btnENcode.addEventListener("click", encode);
  btnDecode.addEventListener("click", decode);

  let [encodedMsgArea, decodedMsgArea] = [
    ...document.getElementsByTagName("textarea"),
  ];

  function encode() {
    let encodedMsg = "";
    let message = encodedMsgArea.value;

    for (let i = 0; i < message.length; i++) {
      encodedMsg += String.fromCharCode(message[i].charCodeAt(0) + 1);
    }
    decodedMsgArea.value = encodedMsg;
    encodedMsgArea.value = "";
  }

  function decode() {
    let decodedMsg = "";
    let message = decodedMsgArea.value;
    for (let i = 0; i < message.length; i++) {
      decodedMsg += String.fromCharCode(message[i].charCodeAt(0) - 1);
    }
    decodedMsgArea.value = decodedMsg;
  }
}
