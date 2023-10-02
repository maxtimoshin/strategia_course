// Modal
const modalWrapper = document.querySelector(".form-modal-wrapper");
const modalContent = document.querySelector(".form-modal-content");
const modalForm = document.querySelector(".modal-form");
const successModal = document.querySelector(".success-modal");

const modalCross = document.querySelectorAll(".modal-cross");

const modalActionButtons = document.querySelectorAll(".modal-action-button");
const formSubmitButtons = document.querySelectorAll(".form-submit-button");

// Burger Items
const iconMenu = document.querySelector(".menu-icon");
const menuBody = document.querySelector(".menu-body");

function modalVisibilityHandler() {
  //   modalContent.classList.remove("hidden");
  modalWrapper.classList.toggle("visible");
  successModal.classList.remove("visible");
}

let currentSelectState;

if (modalActionButtons) {
  modalActionButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.dataset.value) {
        document.querySelector(".select-selected").innerHTML =
          e.target.dataset.value;
        currentSelectState = e.target.dataset.value;
      }
      modalVisibilityHandler();
      modalContent.classList.remove("hidden");
      document.body.classList.remove("lock");
      iconMenu.classList.remove("active-modal");
      menuBody.classList.remove("active-modal");
    });
  });
}

if (modalCross) {
  modalCross.forEach((cross) => {
    cross.addEventListener("click", () => {
      modalVisibilityHandler();
    });
  });
}

if (modalContent) {
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modalWrapper.classList.remove("visible");
      successModal.classList.remove("visible");
      document.body.classList.remove("lock");
      iconMenu.classList.remove("active-modal");
      menuBody.classList.remove("active-modal");
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target === modalWrapper) {
      modalVisibilityHandler();
    }
  });
}

function showSuccessMessage(e) {
  e.preventDefault();
  modalContent.classList.add("hidden");
  modalWrapper.classList.add("visible");
  successModal.classList.add("visible");
}

// Scroll To Buttons
const courseAboutButton = document.querySelectorAll(".course-about-button");
const courseForButton = document.querySelectorAll(".course-for-button");
const courseDemoButton = document.querySelectorAll(".course-demo-button");
const coursePriceButton = document.querySelectorAll(".course-price-button");
const courseSpeakerButton = document.querySelectorAll(".course-speaker-button");

// Scroll To Blocks
const courseAboutBlock = document.querySelector(".trouble-cases-block");
const courseForBlock = document.querySelector(".product-for-block");
const courseDemoBlock = document.querySelector(".video-block");
const coursePriceBlock = document.querySelector(".course-prices-block");
const courseSpeakerBlock = document.querySelector(".person-block");

// Scroll To Handler
function scrollingToBlock(btn, block) {
  btn.forEach((e) => {
    e.addEventListener("click", () => {
      block.scrollIntoView({ block: "start", behavior: "smooth" });
      document.body.classList.remove("lock");
      iconMenu.classList.remove("active-modal");
      menuBody.classList.remove("active-modal");
    });
  });
}

// ScrollTo listeners
scrollingToBlock(courseAboutButton, courseAboutBlock);
scrollingToBlock(courseForButton, courseForBlock);
scrollingToBlock(courseDemoButton, courseDemoBlock);
scrollingToBlock(coursePriceButton, coursePriceBlock);
scrollingToBlock(courseSpeakerButton, courseSpeakerBlock);

// custom select

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      currentSelectState = e.target.innerText;
      /* When an item is clicked, update the original select box,
        and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

// Burger logic toggler
if (iconMenu) {
  iconMenu.addEventListener("click", (e) => {
    document.body.classList.toggle("lock");
    iconMenu.classList.toggle("active-modal");
    menuBody.classList.toggle("active-modal");
  });
}

const modalCompanyInput = document.querySelector(".modal-company-input");
const modalNameInput = document.querySelector(".modal-name-input");
const modalJobTitleInput = document.querySelector(".modal-job-title-input");
const modalPhoneInput = document.querySelector(".modal-phone-input");
const modalEmailInput = document.querySelector(".modal-email-input");

const companyInput = document.querySelector(".company-input");
const nameInput = document.querySelector(".name-input");
const jobTitleInput = document.querySelector(".job-title-input");
const phoneInput = document.querySelector(".phone-input");
const emailInput = document.querySelector(".email-input");
const serviceInput = document.querySelector(".selected-select");

const modalSubmit = document.querySelector(".modal-submit-button");
const nonModalSubmit = document.querySelector(".non-modal-submit-button");

// const tg = {
//   token: "6085056793:AAF_0eCpKDztTxm4h0WApwugbeGaKcqcTlk",
// };

// const userIds = ["256599204"];

// Bot TEST
const tg = {
  token: "6449863246:AAH5RClB79SPPO0Bc5jn2czbLdW79VTgYxM",
};

const userIds = ["261206896"];

// BOT TEST END

function sendMessage(text, userId) {
  const encodedText = encodeURIComponent(text);
  const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${userId}&text=${encodedText}`; // The url to request
  const xht = new XMLHttpRequest();
  xht.open("GET", url);
  xht.send();
}

const formAlert = document.querySelector(".form-alert");

function showFormAlert() {
  formAlert.classList.add("visible-alert");
  setTimeout(() => {
    formAlert.classList.remove("visible-alert");
  }, 2000);
}

function generateOrderRequest(company, name, jobTitle, phone, email, option) {
  const url = "https://courageous-shift-elk.cyclic.cloud/createOrder";

  const requestBody = { company, name, jobTitle, phone, email, option };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });
}

function clearInputs() {
  modalCompanyInput.value = "";
  modalNameInput.value = "";
  modalJobTitleInput.value = "";
  modalPhoneInput.value = "";
  modalEmailInput.value = "";
  companyInput.value = "";
  nameInput.value = "";
  jobTitleInput.value = "";
  phoneInput.value = "";
  emailInput.value = "";
}

modalSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    modalCompanyInput.value &&
    modalNameInput.value &&
    modalJobTitleInput.value &&
    modalPhoneInput.value &&
    modalEmailInput.value &&
    currentSelectState
  ) {
    for (singleUserId of userIds) {
      sendMessage(
        `
        Strategia Form Request
            Company: ${modalCompanyInput.value}
            Name : ${modalNameInput.value}
            Job Title : ${modalJobTitleInput.value}
            Phone : ${modalPhoneInput.value}
            Email : ${modalEmailInput.value}
            Service : ${currentSelectState}`,
        singleUserId
      );
    }
    generateOrderRequest(
      modalCompanyInput.value,
      modalNameInput.value,
      modalJobTitleInput.value,
      modalPhoneInput.value,
      modalEmailInput.value,
      currentSelectState
    );
    showSuccessMessage(e);
    clearInputs();
  } else {
    showFormAlert();
  }
});

nonModalSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    companyInput.value &&
    nameInput.value &&
    jobTitleInput.value &&
    phoneInput.value &&
    emailInput.value &&
    currentSelectState
  ) {
    for (singleUserId of userIds) {
      sendMessage(
        `
      Strategia Form Request
          Company: ${companyInput.value}
          Name : ${nameInput.value}
          Job Title : ${jobTitleInput.value}
          Phone : ${phoneInput.value}
          Email : ${emailInput.value}
          Service : ${currentSelectState}`,
        singleUserId
      );
    }
    generateOrderRequest(
      companyInput.value,
      nameInput.value,
      jobTitleInput.value,
      phoneInput.value,
      emailInput.value,
      currentSelectState
    );
    showSuccessMessage(e);
    clearInputs();
  } else {
    showFormAlert();
  }
});
