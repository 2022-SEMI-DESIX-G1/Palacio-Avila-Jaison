(() => {
  const App = {
    htmlElements: {
      form: document.getElementById("formulario"),
      input: document.getElementById("numero"),
      response: document.getElementById("resultado"),
    },
    init: () => {
      App.htmlElements.form.addEventListener(
        "submit",
        App.handlers.onFormSubmit
      );
      App.htmlElements.response.addEventListener(
        "click",
        App.handlers.onCardClick
      );
    },
    utils: {
      fibonacci: (number) => {
        const fibonacci = [];

        fibonacci[0] = 0;
        fibonacci[1] = 1;

        for (var i = 2; i < number; i++) {
          fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
        }
        return fibonacci;
      },
    },
    templates: {
      card: (number, index) => {
        return `<p name=${index} class="card">${number}</p>`;
      },
    },
    handlers: {
      onCardClick: (e) => {
        if (e.target.className === "card") {
          var mensaje = confirm(
            `¿Deseas eliminar este elemento de la lista?`
          );
          if (mensaje) {
            e.target.remove();
            alert("¡Gracias por confirmar!");
          } else {
            alert("¡Haz Cancelado la ejecucion!");
          }


        }
      },
      onFormSubmit: (e) => {
        e.preventDefault();
        App.htmlElements.response.innerHTML = "";
        const number = App.htmlElements.input.value;
        console.log(App.utils.fibonacci(number));
        if (!numero.value | (numero.value < 0)) {
          return alert("Ingrese un numero natural positivo");
        }

        App.utils.fibonacci(number).forEach((value, index) => {
          App.htmlElements.response.innerHTML += App.templates.card(
            value,
            index
          );
        });
      },
    },
  };
  App.init();
})(document.Utils);
