// Открытие и закрытие меню
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// Модальные окна

var formWriteUs = document.querySelector('.feedback-form');
var userName = formWriteUs.querySelector('#user-name');
var userSurname = formWriteUs.querySelector('#user-surname');
var userPatronymic = formWriteUs.querySelector('#user-patronymic');
var userPhone = formWriteUs.querySelector('#user-phone');
var userEmail = formWriteUs.querySelector('#user-email');
var userText = formWriteUs.querySelector('#user-text');

var rightSumbitLink = formWriteUs.querySelector('.feedback-form__button-submit');
var modalRightWindow = formWriteUs.querySelector('.feedback-form__modal-right');
var modalWrongWindow = formWriteUs.querySelector('.feedback-form__modal-wrong');
var closeRightWindow = modalRightWindow.querySelector('.feedback-form__modal-button');
var closeWrongWindow = modalWrongWindow.querySelector('.feedback-form__modal-button');

formWriteUs.addEventListener("submit", function(evt) {
  if (!userName.value || !userSurname.value || !userPatronymic.value || !userPhone.value || !userEmail.value) {
    evt.preventDefault();
    if (!userName.value) {
      userName.classList.add("introduce-yourself__input--invalid");
    } else {
      userName.classList.remove("introduce-yourself__input--invalid");
    }
    if (!userSurname.value) {
      userSurname.classList.add("introduce-yourself__input--invalid");
    } else {
      userSurname.classList.remove("introduce-yourself__input--invalid");
    }
    if (!userPatronymic.value) {
      userPatronymic.classList.add("introduce-yourself__input--invalid");
    } else {
      userPatronymic.classList.remove("introduce-yourself__input--invalid");
    }
    if (!userPhone.value) {
      userPhone.classList.add("contact-info__input--invalid");
    } else {
      userPhone.classList.remove(".contact-info__input--invalid");
    }
    if (!userEmail.value) {
      userEmail.classList.add("contact-info__input--invalid");
    } else {
      userEmail.classList.remove(".contact-info__input--invalid");
    }
    if (!userText.value) {
      userText.classList.add("feedback-text__textarea--invalid");
    } else {
      userText.classList.remove(".feedback-text__textarea--invalid");
    }
    modalWrongWindow.classList.add('feedback-form__modal-wrong--show');

  } else {
    evt.preventDefault();
    modalRightWindow.classList.add('feedback-form__modal-right--show');
  }
});

closeRightWindow.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalRightWindow.classList.remove('feedback-form__modal-right--show');
});

closeWrongWindow.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalWrongWindow.classList.remove('feedback-form__modal-wrong--show');
});

//  Нажатие клавиши ESC при открытом модальном окне
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalRightWindow.classList.contains("feedback-form__modal-right--show") || modalWrongWindow.classList.contains("feedback-form__modal-wrong--show")) {
      modalRightWindow.classList.remove("feedback-form__modal-right--show");
      modalWrongWindow.classList.remove("feedback-form__modal-wrong--show");
    }
  }
});
