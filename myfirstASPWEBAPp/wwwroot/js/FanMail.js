$("#btnSend").click( function () {
    alert("From: " + $("#textfrom").val() +
        ", Subject: " + $("#textsubject").val() +
        ", Message: " + $("#textmessage").val());

    $("#picanderson").fadeOut("slow");
})