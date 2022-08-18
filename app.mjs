function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!
const formSection = document.querySelector(".form");
const form = document.querySelector("form");

const newElement = () => {
  const formSectionDiv = document.createElement("div");
  formSection.insertBefore(formSectionDiv, form);
  formSectionDiv.setAttribute("id", "telecom-logo");
  formSectionDiv.classList.add("telecom-logo");
  const img = document.createElement("img");
  formSectionDiv.appendChild(img);
};
newElement();

const phoneNumber = document.getElementById("phone");
const telecomLogo = document.getElementById("telecom-logo");
let image = document.querySelector(".form div img");

const MTN_SERIES = [
  "0803",
  "0806",
  "0703",
  "0706",
  "0813",
  "0816",
  "0810",
  "0814",
  "0903",
  "0906",
  "0916",
];
const GLOBACOM_SERIES = ["0805", "0807", "0811", "0705", "0815", "0905"];
const $9MOBILE_SERIES = ["0809", "0817", "0818", "0908", "0905"];
const AIRTEL_SERIES = [
  "0802",
  "0808",
  "0812",
  "0902",
  "0901",
  "0708",
  "0701",
  "0907",
  "0904",
  "0912",
];

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

phoneNumber.addEventListener("keyup", (e) => {
  let input = e.target.value;
  for (const MTN_NUMBER of MTN_SERIES) {
    if (input === MTN_NUMBER) {
      telecomLogo.classList.add("show");
      image.setAttribute("src", "../assets/MTN-use.png");
    }
  }

  for (const AIRTEL_NUMBER of AIRTEL_SERIES) {
    if (input === AIRTEL_NUMBER) {
      telecomLogo.classList.add("show");
      image.setAttribute("src", "../assets/Airtel.png");
    }
  }

  for (const GLO_NUMBER of GLOBACOM_SERIES) {
    if (input === GLO_NUMBER) {
      telecomLogo.classList.add("show");
      image.setAttribute("src", "../assets/Globacom-use.png");
    }
  }

  for (const $9MOBILE_NUMBER of $9MOBILE_SERIES) {
    if (input === $9MOBILE_NUMBER) {
      telecomLogo.classList.add("show");
      image.setAttribute("src", "../assets/9mobile.png");
    }
  }
});
}
  
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //