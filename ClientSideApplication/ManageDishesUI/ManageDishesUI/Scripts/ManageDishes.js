$(document).ready(function () {
    dishesList();

    $("#dishesTable").on('click', 'input[id="deleteRow"]', function (event) {
        $.ajax({
            url: 'http://localhost:3000/dishes/' + $(this).data('id'),
            type: 'DELETE',
            dataType: 'json',
            success: function (dishes) {
                populateHTMLTable(dishes);
            },
            error: function (request, message, error) {
                alert(error.message)
            }
        });
    });

    $('#addButton').on('click', function (event) {
        // Build Dish object from inputs
        Dish = new Object();
        Dish.id = $("#dishId").val();
        Dish.type = $("#dishType").val();
        Dish.name = $("#dishName").val();
        Dish.price = $("#price").val();
        $.ajax({
            url: 'http://localhost:3000/dishes/',
            type: 'POST',
            contentType:
                "application/json;charset=utf-8",
            data: JSON.stringify(Dish),
            success: function (dishes) {
                populateHTMLTable(dishes);
            },
            error: function (request, message, error) {
                alert(error);
            }
        });
    });
});

function dishesList() {
    // Call Web API to get a list of Dishes
    $.ajax({
        url: 'http://localhost:3000/dishes/',
        type: 'GET',
        dataType: 'json',
        success: function (dishes) {
            populateHTMLTable(dishes);
        },
        error: function (request, message, error) {
            alert(error)
        }
    });
}

function populateHTMLTable(dishes) {
    $("#dishesTable tbody").empty();
    $.each(dishes, function (index, dish) {
        // Add a row to the Dishes table
        var record =
            "<tr>" +
            "<td>" + dish.id + "</td>" +
            "<td>" + dish.type + "</td>" +
            "<td>" + dish.name + "</td>"
            + "<td>" + dish.price + "</td>" +
            "<td><input type='button' value='Delete' id='deleteRow' data-id='" + dish.id + "'/></td>"
        "</tr>";

        $("#dishesTable tbody").append(record);
    });
}