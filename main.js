function openInNewTab(url) { //confirm to open link in a new tab
  let text = "We're going to a new tab!";
  if (confirm(text) == true) { //if user clicks "ok", they will be redirected to link in a new tab
    window.open(url, '_blank').focus();
  } else { //if they click "cancel", they will stay in the same location
    location.reload();
  }
 }

function sendMessage() { //confirm correct contact details
  let text = "Make sure that contact details are correct before sending message.\nSend message?";
  if (confirm(text) == true) { //if user clicks "ok", message will be sent and user will receive message sent confirmation
    alert("Message sent!\nWill get back to you very soon!");
    location.reload();
  }
}

function postComment() { //comment posted confirmation 
    alert("Comment posted!");
    location.reload();
}