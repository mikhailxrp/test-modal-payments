$(document).ready(function () {
  const btnPayment = $(".payment-btn");
  const overlay = $(".overlay");
  const modal = $(".modal");
  const modalForm = $(".modal-form");
  const btnClose = $(".btn-close")

  btnPayment.on("click", function () {
    overlay.fadeIn("slow");
    modal.fadeIn("slow");
  });

  modalForm.on("submit", function (event) {
    event.preventDefault();
  });

  overlay.on("click", modalClose)
  btnClose.on("click", modalClose);

  function modalClose(){
    overlay.fadeOut('slow')
    modal.fadeOut("slow");
  }

  $("#form").validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      surname: {
        required: true,
        minlength: 3,
      },
      phone: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: {
        required: "Введите Ваше имя",
        minlength: "Введите минимум 3 символа",
      },
      surname: {
        required: "Введите Вашу фамилию",
        minlength: "Введите минимум 3 символа",
      },
      phone: {
        required: "Введите Ваш телефон",
      },
      email: {
        required: "Введите Вашу почту",
        email: "Введите корректный email",
      },
    },
  });
});
