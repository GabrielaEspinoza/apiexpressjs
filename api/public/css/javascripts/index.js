// NAVEGACION
$(document).ready(function () {
    $('a[href$="' + location.pathname + '"]').addClass('active');
});

// BUSCAR PRODUCTO
$(document).ready(function () {
    $("#filtrar").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});