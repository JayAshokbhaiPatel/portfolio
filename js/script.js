function validate() {
  let email = document.getElementById("emailbox").value;
  let name = document.getElementById("namebox").value;
  let val = document.getElementById("text-area").value;
  let userregx = /^[A-Z a-z .]{3,30}$/;
  let emailregx = /^[A-Za-z_]{3,}[0-9]{1,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
  if (emailregx.test(email)) {
  } else {
    alert("**Please Enter Valid Email Id");
    return false;
  }
  if (userregx.test(name)) {
  } else {
    alert("**Please Enter Character Only");
    return false;
  }
  if (/^\s*$/g.test(val)) {
    alert("Please Fill The Message Area!");
    return false;
  }
}
let themeColor = localStorage.getItem("themeColor");
if (themeColor == null) {
  setTheme("light");
} else {
  setTheme(themeColor);
}
let themes = document.getElementsByClassName("theme-dot");
for (let i = 0; themes.length > i; i++) {
  themes[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log(mode);
    setTheme(mode);
  });
}
function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "css/style.css";
  }
  if (mode == "blue") {
    document.getElementById("theme-style").href = "css/blue.css";
  }
  if (mode == "green") {
    document.getElementById("theme-style").href = "css/green.css";
  }
  if (mode == "purple") {
    document.getElementById("theme-style").href = "css/purple.css";
  }
  localStorage.setItem("themeColor", mode);
}
