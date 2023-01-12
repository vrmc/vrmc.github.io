var name = document.getElementsById("name").value;
var email = document.getElementsById("email").value;
var message = document.getElementsById("message").value;
var subject = document.getElementsById("subject").value;
var url = "https://us-central1-eptest-1.cloudfunctions.net/sendEmail?name="+name+"&message="+message+"&email="+email+"&subject="+subject;
document.getElementById('submit').action;
document.getElementById('submit').action = url;

function popUp() {
    window.alert("Your message has been received and we will be replying to you shortly. Please reload the page.");
}