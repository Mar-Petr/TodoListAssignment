
$('#button').on('click', function () {
        debugger;
        let todotext=$(this);
        todotext.show();

        $('#done-list')
       .append($('<li></li>')
       .text(todotext.text()));
});






$('.list-item').on('click', function() {
        let selectedElement = $(this);
        selectedElement.hide();

        $('#done-list')
       .append($('<li></li>')
       .text(selectedElement.text()));
});



