// upload img to the site
// ==================== make the delete and edit to clone js code in creating ============================

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
adminCommentUsername.textContent = localStorage.getItem("username");

// continue event => add disabled classes
const adminSection = document.querySelector(".admin");
const overlay = document.querySelector(".overlay");
const continueBtn = document.getElementById("submit");
const adminCommentAvatar = document.querySelectorAll(".admin_avatar");

continueBtn.onclick = () => {
  if (
    adminUsername.value === "" ||
    adminAvatarUpload.src !== window.localStorage.getItem("adminAvatar")
    // localStorage.getItem("username") !== ""
  ) {
  } else {
    adminCommentAvatar.forEach((avatar) => {
      avatar.src = window.localStorage.getItem("adminAvatar");
    });
    adminSection.classList.add("disable");
    overlay.classList.add("disable");
    // adding admin avatar to admin comments section
  }
};

if (adminAvatarUpload.src !== window.localStorage.getItem("adminAvatar")) {
} else {
  // adding admin avatar to admin comments section
  adminCommentAvatar.forEach((avatar) => {
    avatar.src = window.localStorage.getItem("adminAvatar");
  });
  adminSection.classList.add("disable");
  overlay.classList.add("disable");
}

// Create replay event to add new replay message
const replyBtn = document.querySelectorAll(".reply_btn");
const replyContainer = document.querySelectorAll(".replies .reply");

replyBtn.forEach(function (btn) {
  btn.onclick = function () {
    var replyUsername =
      this.parentElement.parentElement.parentElement.children[1].children[0]
        .children[0].children[1];
    var replyHUsername =
      this.parentElement.parentElement.parentElement.parentElement.children[1]
        .children[0].children[1];
    if (
      this.parentElement.parentElement.parentElement.parentElement.children[1].classList.contains(
        "active"
      )
    ) {
    } else {
      replyContainer.forEach((re) => {
        re.style.display = "none";
      });
      this.parentElement.parentElement.parentElement.parentElement.children[1].children[0].style.display =
        "flex";
      replyHUsername.value = `@${replyUsername.textContent},`;
    }
  };
});

// push the reply admin to user comment
const replyPush = document.querySelectorAll(".reply_push");
replyPush.forEach(function (btn) {
  btn.onclick = function () {
    const adminCommentedClone = document
      .querySelector(".admin-commented")
      .cloneNode(true);
    adminCommentedClone.classList.add("admin-commented-clone");

    var reply = this.parentElement;
    var inputText = this.parentElement.children[1];
    var replyCont = this.parentElement.parentElement;
    var adminCloneText =
      adminCommentedClone.children[0].children[1].children[1];
    reply.style.display = "none";
    replyCont.appendChild(adminCommentedClone);
    adminCloneText.textContent = inputText.value;
    // clone mode
    const scoursIncAC = document.querySelectorAll(
      ".admin-commented-clone .rating .rate_increment"
    );
    const scoursDecAC = document.querySelectorAll(
      ".admin-commented-clone .rating .rate_decrement"
    );
    // increment
    scoursIncAC.forEach(function (inc) {
      inc.onclick = function () {
        Number.parseInt(this.parentElement.children[1].textContent++);
      };
    });
    // decrement
    scoursDecAC.forEach(function (dec) {
      dec.onclick = function () {
        if (this.parentElement.children[1].textContent === "0") {
          return false;
        } else {
          Number.parseInt(this.parentElement.children[1].textContent--);
        }
      };
    });

    // edit and delete event in comment admin
    const editBtnC = document.querySelectorAll(
      ".admin-commented-clone .edit_btn"
    );
    const deleteBtnC = document.querySelectorAll(
      ".admin-commented-clone .delete_btn"
    );
    const adminCommentText = document.getElementById("admin_comment_text");
    const editCommentC = document.querySelectorAll(
      ".admin-commented-clone .edit_comment"
    );
    const updateBtnC = document.querySelectorAll(
      ".admin-commented-clone .update_btn"
    );

    editBtnC.forEach((edit) => {
      updateBtnC.forEach((update) => {
        editCommentC.forEach((comment) => {
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
    const deleteAgree = document.querySelector(".delete_agree");
    const agreeBtn = document.getElementById("agree_btn");
    const cancelBtn = document.getElementById("cancel_btn");
    deleteBtnC.forEach((deleted) => {
      deleted.onclick = function () {
        if (deleteAgree.classList.contains("disable")) {
          deleteAgree.classList.remove("disable");
          overlay.classList.remove("disable");
        } else {
          return false;
        }
        var ThisAdminClone =
          this.parentElement.parentElement.parentElement.parentElement
            .parentElement;
        agreeBtn.onclick = function () {
          ThisAdminClone.remove();
          deleteAgree.classList.add("disable");
          overlay.classList.add("disable");
        };
        cancelBtn.onclick = function () {
          deleteAgree.classList.add("disable");
          overlay.classList.add("disable");
        };
      };
    });
  };
});

// Increment and Decrement the scours
const scoursInc = document.querySelectorAll(".rating .rate_increment");
const scoursDec = document.querySelectorAll(".rating .rate_decrement");
//increment
scoursInc.forEach(function (inc) {
  inc.onclick = function () {
    Number.parseInt(this.parentElement.children[1].textContent++);
  };
});
//decrement
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
const deleteAgree = document.querySelector(".delete_agree");
const agreeBtn = document.getElementById("agree_btn");
const cancelBtn = document.getElementById("cancel_btn");
deleteBtn.forEach((deleted) => {
  deleted.onclick = function () {
    if (deleteAgree.classList.contains("disable")) {
      deleteAgree.classList.remove("disable");
      overlay.classList.remove("disable");
    } else {
      return false;
    }
    agreeBtn.onclick = function () {
      adminCommented.forEach((admin) => {
        admin.remove();
      });
      deleteAgree.classList.add("disable");
      overlay.classList.add("disable");
    };
    cancelBtn.onclick = function () {
      deleteAgree.classList.add("disable");
      overlay.classList.add("disable");
    };
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
    adminCommentedClone.classList.add("admin-commented-clone");
    mainContainer.appendChild(adminCommentedClone);
    adminCommentedClone.children[0].children[1].children[1].textContent =
      adminCommentSend.value;
    adminCommentSend.value = "";
    // clone mode
    const scoursIncC = document.querySelectorAll(
      ".admin-commented-clone .rating .rate_increment"
    );
    const scoursDecC = document.querySelectorAll(
      ".admin-commented-clone .rating .rate_decrement"
    );
    // increment
    scoursIncC.forEach(function (inc) {
      inc.onclick = function () {
        Number.parseInt(this.parentElement.children[1].textContent++);
      };
    });
    // decrement
    scoursDecC.forEach(function (dec) {
      dec.onclick = function () {
        if (this.parentElement.children[1].textContent === "0") {
          return false;
        } else {
          Number.parseInt(this.parentElement.children[1].textContent--);
        }
      };
    });

    // edit and delete event in comment admin
    const editBtnC = document.querySelectorAll(
      ".admin-commented-clone .edit_btn"
    );
    const deleteBtnC = document.querySelectorAll(
      ".admin-commented-clone .delete_btn"
    );
    const adminCommentTextC = document.querySelector(
      ".admin-commented-clone #admin_comment_text"
    );
    const editCommentC = document.querySelectorAll(
      ".admin-commented-clone .edit_comment"
    );
    const updateBtnC = document.querySelectorAll(
      ".admin-commented-clone .update_btn"
    );

    editBtnC.forEach((edit) => {
      updateBtnC.forEach((update) => {
        editCommentC.forEach((comment) => {
          edit.onclick = function () {
            if (adminCommentTextC.style.display === "none") {
              adminCommentTextC.style.display = "block";
              comment.style.display = "none";
              update.style.display = "none";
            } else {
              adminCommentTextC.style.display = "none";
              comment.textContent = adminCommentTextC.textContent;
              comment.style.display = "block";
              update.style.display = "block";

              update.onclick = function () {
                adminCommentTextC.textContent = comment.value;
                adminCommentTextC.style.display = "block";
                comment.style.display = "none";
                update.style.display = "none";
              };
            }
          };
        });
      });
    });

    // (2) delete event
    const deleteAgree = document.querySelector(".delete_agree");
    const agreeBtn = document.getElementById("agree_btn");
    const cancelBtn = document.getElementById("cancel_btn");
    deleteBtnC.forEach((deleted) => {
      deleted.onclick = function () {
        if (deleteAgree.classList.contains("disable")) {
          deleteAgree.classList.remove("disable");
          overlay.classList.remove("disable");
        } else {
          return false;
        }
        var ThisAdminClone =
          this.parentElement.parentElement.parentElement.parentElement
            .parentElement;
        agreeBtn.onclick = function () {
          ThisAdminClone.remove();
          deleteAgree.classList.add("disable");
          overlay.classList.add("disable");
        };
        cancelBtn.onclick = function () {
          deleteAgree.classList.add("disable");
          overlay.classList.add("disable");
        };
      };
    });
  }
};
