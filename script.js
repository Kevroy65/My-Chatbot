document.addEventListener("DOMContentLoaded", function() {
  var messages = []; // Array to store user messages
  var botReplies = ["This chatbot is still in progress for generating responses"]; // Array to store chatbot replies

  document.getElementById("sendButton").addEventListener("click", function() {
    var messageText = document.getElementById("message").value;

    if (messageText) {
      messages.push(messageText); // Add user message to the array
      var newMessageDiv = '<div class="reply-message-box"><p class="reply-message">' + messageText + '</p></div>';
      document.getElementById("view").innerHTML += newMessageDiv; // Append new user message

      // Add chatbot response
      var botReplyDiv = '<div class="bot-reply-message-box"><p class="bot-reply-message">' + botReplies[0] + '</p></div>';
      document.getElementById("view").innerHTML += botReplyDiv; // Append new bot message

      document.getElementById("message").value = ''; // Clear input field
    }
  });
});