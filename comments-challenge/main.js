// upload img to the site

const imgAdd = document.getElementById("img-add");
const adminAvatarUpload = document.getElementById("avatar-img");

imgAdd.onchange = function () {
  adminAvatarUpload.src = URL.createObjectURL(event.target.files[0]);
  localStorage.setItem("adminAvatar", adminAvatarUpload.src);
};

adminAvatarUpload.src = window.localStorage.getItem("adminAvatar");

// get admin username value
const adminUsername = document.getElementById("username");
const adminCommentUsername = document.querySelector(
  ".admin-commented .user_name"
);

// add timing
const contTiming = document.getElementById("admin_adding_time");
const dateNow = new Date();
contTiming.textContent = `${dateNow.getHours()} hours`;

adminUsername.onblur = function () {
  localStorage.setItem("username", adminUsername.value);
  adminCommentUsername.textContent = localStorage.getItem("username");
};

// continue event => add disabled classes
const adminSection = document.querySelector(".admin");
const overlay = document.querySelector(".overlay");
const continueBtn = document.getElementById("submit");

continueBtn.onclick = () => {
  if (
    adminUsername.value === "" ||
    adminAvatarUpload.src != window.localStorage.getItem("adminAvatar")
  ) {
  } else {
    adminSection.classList.add("disable");
    overlay.classList.add("disable");
  }
};

// adding admin avatar to admin comments section
const adminCommentAvatar = document.querySelectorAll(".admin_avatar");
adminCommentAvatar.forEach((avatar) => {
  avatar.src = window.localStorage.getItem("adminAvatar");
});

// Create replay event to add new replay message
const replyBtn = document.querySelectorAll(".reply_btn");
const replyContainer = document.querySelectorAll(".replys");
const hashUserInput = document.querySelectorAll(".reply_text");

replyBtn.forEach(function (btn) {
  btn.onclick = function () {
    var replyUsername =
      this.parentElement.parentElement.parentElement.children[1].children[0]
        .children[0].children[1];
    if (
      this.parentElement.parentElement.parentElement.parentElement.children[1].classList.contains(
        "active"
      )
    ) {
    } else {
      replyContainer.forEach(function (rep) {
        rep.classList.remove("active");
      });
      this.parentElement.parentElement.parentElement.parentElement.children[1].classList.add(
        "active"
      );
      hashUserInput.forEach(function (input) {
        input.value = `@${replyUsername.textContent},`;
      });
    }
  };
});

// Increment and Decrement the scours
const scoursInc = document.querySelectorAll(".rating .rate_increment");
const scoursNum = document.querySelectorAll(".rating .rate_num");
const scoursDec = document.querySelectorAll(".rating .rate_decrement");

scoursInc.forEach(function (inc) {
  inc.onclick = function () {
    Number.parseInt(this.parentElement.children[1].textContent++);
  };
});

scoursDec.forEach(function (dec) {
  dec.onclick = function () {
    if (this.parentElement.children[1].textContent === "0") {
      return false;
    } else {
      Number.parseInt(this.parentElement.children[1].textContent--);
    }
  };
});

// edit and delete event in comment admin
const editBtn = document.querySelectorAll(".edit_btn");
const deleteBtn = document.querySelectorAll(".delete_btn");
const adminCommentText = document.getElementById("admin_comment_text");
const editComment = document.querySelectorAll(".edit_comment");
const updateBtn = document.querySelectorAll(".update_btn");

adminCommentText.innerHTML =
  "Lorem ipsum, dolor sit amet consectetur adipisicingelit.Excepturi explicabo id odit est libero tempora in utnumquam molestias suscipit, modi deserunt ad! Dolorem commodisaepe deserunt voluptatibus? Voluptate, quia?";

editBtn.forEach((edit) => {
  updateBtn.forEach((update) => {
    editComment.forEach((comment) => {
      edit.onclick = function () {
        if (adminCommentText.style.display === "none") {
          adminCommentText.style.display = "block";
          comment.style.display = "none";
          update.style.display = "none";
        } else {
          adminCommentText.style.display = "none";
          comment.textContent = adminCommentText.textContent;
          comment.style.display = "block";
          update.style.display = "block";

          update.onclick = function () {
            adminCommentText.textContent = comment.value;
            adminCommentText.style.display = "block";
            comment.style.display = "none";
            update.style.display = "none";
          };
        }
      };
    });
  });
});

// (2) delete event
const adminCommented = document.querySelectorAll(".admin-commented");
deleteBtn.forEach((deleted) => {
  deleted.onclick = function () {
    adminCommented.forEach((admin) => {
      admin.remove();
    });
  };
});

// push admin replay to comments
const mainContainer = document.querySelector("#main .container");
const adminCommentSend = document.querySelector(".main_comment .comment_text");
const adminSendBtn = document.querySelector(".main_comment #comment_push");

adminSendBtn.onclick = function () {
  if (adminCommentSend.value === "") {
  } else {
    const adminCommentedClone = document
      .querySelector(".admin-commented")
      .cloneNode(true);
    mainContainer.appendChild(adminCommentedClone);
    adminCommentedClone.children[0].children[1].children[1].textContent =
      adminCommentSend.value;
    adminCommentSend.value = "";
  }
};
