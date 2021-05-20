function generateTable(rows, columns){
    html = '<table>';

    for( row of Array(rows).keys() ){

        html = html + '<tr>';

        for( column of Array(columns).keys()){
            html = html + '<td>';

            html = html + `${(row+1) * (column+1)}`;

            html = html + '</td>';
        }

        html = html + '</tr>';
    }

    html = html + '</table>';

    return html;
}

function onGeneratePressed(){
    let rowsInput = document.getElementById("rows-input").value;
    let columnsInput = document.getElementById("columns-input").value;

    if(!isNaN(rowsInput) && !isNaN(columnsInput)){
        rows = Number(rowsInput);
        columns = Number(columnsInput);

        let html = '';
        html = generateTable(rows, columns);

        document.write(html);
    }
    else{
        alert("Error: invalid number!")
    }
}