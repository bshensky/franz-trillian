const path = require('path');

module.exports = (Franz, options) => {
  var lastMessages = 0;

  const getMessages = () => {
    let indirectMessages = 0;
    let directMessages = 0;

    let directMessageTag = document.querySelector('#x_chatsPrivate + div.contact.unread > span.count');
    if (undefined != directMessageTag) {
      directMessages = parseInt(directMessageTag.innerText, 10);
    } else {
      directMessages = 0;
    }

    Franz.setBadge(directMessages, indirectMessages);

    lastMessages = directMessages;
  }

  // inject franz.css stylesheet
  Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));  

  Franz.loop(getMessages);
}
