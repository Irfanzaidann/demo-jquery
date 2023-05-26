$(document).ready(function () {
  $("#inputForm").submit(function (e) {
    e.preventDefault();

    var Angka = $("#Angka").val();
    var Text = $("#Text").val();

    $.ajax({
      url: "formB.php",
      type: "POST",
      data: {
        Angka: Angka,
        Text: Text,
      },
      dataType: "json",
      success: function (response) {
        displayTable(response);
      },
      error: function (xhr, status, error) {
        console.log(error);
      },
    });
  });

  function displayTable(data) {
	$('#table').hide();
	var thead = $("#table thead")
    var tbody = $("#table tbody");
    tbody.empty();

    $.each(data, function (index, item) {
      var row = "<tr>" + 
	  				"<td>" + index + "</td>" + 
					"<td>" + item + "</td>" + 
				"</tr>";
      tbody.append(row);
    });

    $("#table").fadeIn();
  }
});
