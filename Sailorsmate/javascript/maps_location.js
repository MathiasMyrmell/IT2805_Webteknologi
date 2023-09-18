
function addRowHandlers() {
    var table = document.getElementById("retailersTableID");
    var rows = table.getElementsByTagName("tr");
    for (i = 1; i < rows.length; i++) {
        var currentRow = table.rows[i];
        var createClickHandler = 
            function(row) 
            {
                return function() { 
                                        var cell = row.getElementsByTagName("td")[0];
                                        var cell_text = cell.innerHTML;
                                        // location = id;
                                        document.getElementById('selected_retailer').innerHTML = cell_text;
                                        // alert("id:" + id);
                                        iframeSrc();
                                 };
            };

        currentRow.onclick = createClickHandler(currentRow);
    }
}

function iframeSrc() {
    var iframe = document.getElementById('gmap_canvas');
    var retailer = document.getElementById('selected_retailer').innerHTML;
    iframe.src = "https://maps.google.com/maps?q="+ retailer +"&t=&z=5&ie=UTF8&iwloc=&output=embed";
}

window.onload = addRowHandlers();
    
