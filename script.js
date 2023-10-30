let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  let in_email = document.getElementById("email").value;
  let email_out = document.getElementById("confirm_email");
  let newsletter_con = document.getElementById("newsletter_container");
  let thanks_con = document.getElementById("thanks_con");
  let dismiss_btn = document.getElementById("dismiss_btn");
  let error = document.getElementById("error");

  check_email(in_email);

  function check_email(email) {
    const mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!email.match(mail_format)) {
      error.style.display = "block";
    } else {
      email_out.textContent = email;
      newsletter_con.style.display = "none";
      thanks_con.style.display = "flex";
      error.style.display = "none";
      dismiss_btn.addEventListener("click", () => {
        thanks_con.style.display = "none";
      });
    }
  }
});
