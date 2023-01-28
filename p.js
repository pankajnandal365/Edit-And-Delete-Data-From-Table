var count = 0;
var arr = [];

$("#submit").click(function () {
    var obj = {};
    obj.name = $("#inp").val();
    arr.push(obj);
    $("tbody").append(`<tr>
    <td><input type="checkbox" id="check_${count}"></td>
    <td id="id_${count}">${count+1}</td>
    <td id="name_${count}">${obj.name}</td>
    <td><button id=${count} type="button" class="btn btn-primary" onclick="EditModal(${count})">
    Edit </button></td>
    </tr>`)
    count++;
    $("#inp").val('');
    $("#select-all").prop("checked",false)
});
$(document).ready(function () {
    $('#select-all').click(function () {
        $('input[type="checkbox"]').prop('checked', this.checked);
    })
});
$("#del").click(function () {
    $("table tbody tr").each(function () {
        var isChecked = $(this).find('input[type="checkbox"]').is(":checked");
        if (isChecked) {
            $(this).remove();
        }
    });
});

function myfunc() {
        var i= $("#hdnid").val();
        arr[i].name=$("#inp2").val();
        $("#name_"+i).text(arr[i].name);
}
function EditModal(id){
    $("#exampleModal").modal('show');
    $("#inp2").val(arr[id].name);
    $("#hdnid").val(id);
}