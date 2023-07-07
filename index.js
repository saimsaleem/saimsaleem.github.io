function addRow() {
    var tableRow = document.getElementById("table");
    var day =  document.getElementById("day").value;
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
     cell1.innerHTML = day;

    cell1.appendChild(btn);
     row.setAttribute('id',day);
     row.appendChild(cell1);
     tableRow.appendChild(row);

     row.appendChild(btn);
     console.log(document.getElementById(day));
    }

function addHead(){
    var tablehead = document.getElementById("tablehead");
    var time =  document.getElementById("time").value;
    var cell1 = document.createElement("th");
     cell1.innerHTML = time;
     cell1.setAttribute('id',time);
     tablehead.appendChild(cell1);
     console.log(document.getElementById(time));
}

function addCourse(){
    var column =  document.getElementById("column").value;
    var row =  document.getElementById("row").value;
    var course =  document.getElementById("course").value;
    var day = document.getElementById(row);
    var time =  document.getElementById(column);
    var cell1 = document.createElement("td");
     cell1.innerHTML = course;
     cell1.innerHTML =  "<button id='btn'>course</button>";
     cell1.setAttribute('id',course);
     day.appendChild(cell1);
     console.log(document.getElementById(course));
}
