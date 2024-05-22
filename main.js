$(document).ready(function () {
    $("form").on("submit", function (e) {
e.preventDefault();
const novaTarefa = $(".form-input").val();

const listaTarefas = $(`<li class="has-marker">${novaTarefa}</li>`);
$(listaTarefas).appendTo("ul");
    $(".form-input").val("");
});// limpa o input
    $("ul").on("click", "li", function () {
    $(this).toggleClass("strike-through");
    });
});