var firebaseConfig = {
  apiKey: "AIzaSyCXbnClZJe5GndR2FpyXLiDLE2t1iVb91I",
  authDomain: "javafirebase-81082.firebaseapp.com",
  databaseURL: "https://javafirebase-81082-default-rtdb.firebaseio.com",
  projectId: "javafirebase-81082",
  storageBucket: "javafirebase-81082.appspot.com",
  messagingSenderId: "408727421147",
  appId: "1:408727421147:web:669162d892a59ecdd2ccfe",
  measurementId: "G-CWEH1KZMLC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function resetFields(){
    document.getElementById("Input1").value='';
    document.getElementById("Input2").value='';
    document.getElementById("Input3").value='';
    document.getElementById("Input4").value='selecciona';
}
function createR() {
    document.getElementById("Input1").disabled = false;
    //Guardo los datos capturados usando el id de cada control
    var id = document.getElementById("Input1").value;
    var nombre = document.getElementById("Input2").value;
    var correo = document.getElementById("Input3").value;
    var vacuna = document.getElementById("Input4").value;

    //validaciones
    if (id.length > 0) {
        //creo un objeto que guarda los datos
        var persona = {
            id, //id/numero
            nombre,
            correo,
            vacuna,
        }

        //console.log(persona);

        firebase.database().ref('personas/' + id).update(persona).then(() => {
           resetFields();
        }).then(()=>{
           read();
        });

        swal("Listo!", "Agregado correctamente", "success");

        
    } 
    else {
        swal("Error", "Llena todos los campos","warning");
    }

    document.getElementById("Input1").disabled = false;
        //firebase.database().ref('users/' + userId).set({
    //    username: name,
    //    email: email,
    //    profile_picture : imageUrl
    //  });
    //https://firebase.google.com/docs/database/web/read-and-write?hl=es

  
    //Esto se usa cuando no tienen un id/matricula y Firebase les genera una
    //automaticamente
    //const key = firebase.database().ref().child('personas').push().key;
    //data[`personas/${key}`]= persona;
    //firebase.database().ref().update(data).then(()=>{
    //  alert('Agregado exitosamente');
    //})
}

function read(){
    document.getElementById("Table1").innerHTML='';

    var ref = firebase.database().ref('personas');
/**   
   ref.on('value', function(snapshot) {
        snapshot.forEach(row=>{
            printRow(row.val());
        })
    });
 */
   
    ref.on("child_added", function(snapshot) {
        printRow(snapshot.val());
    });

}

function printRow(persona){
    
    if(persona!=null){
        var table = document.getElementById("Table1"); 

        //creamos un nuevo elemento en la tabla en la ultima posicion
        var row = table.insertRow(-1);

        //Insertamos cada una de las celdas/columnas del registro
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        
        //Agregamos la informacion a cada una de las columnas del registro
        cell1.innerHTML = persona.id;
        cell2.innerHTML = persona.nombre; 
        cell3.innerHTML = persona.correo;
        cell4.innerHTML = persona.vacuna; 
        cell5.innerHTML = `<button type="button" class="btn btn-danger" onClick="deleteR(${persona.id})">Eliminar</button>`;
        cell6.innerHTML = '<button type="button" class="btn btn-success" onClick="seekR('+persona.id+')">Modificar</button>';
    }
}

function deleteR(id){
    firebase.database().ref('personas/' + id).set(null).then(() => {
      read();
    }).then(()=>{
       swal("Listo!", "Eliminado correctamente", "success");
    });
}

function seekR(id){
    var ref = firebase.database().ref('personas/' + id);
    ref.on('value', function(snapshot) {
      updateR(snapshot.val());
    });
}

function updateR(persona){
    if(persona!=null)
    {
        document.getElementById("Input1").value=persona.id;
        document.getElementById("Input1").disabled = true;
        document.getElementById("Input2").value=persona.nombre;
        document.getElementById("Input3").value=persona.correo;
        document.getElementById("Input4").value=persona.vacuna;
    }
}


//Para consulta de vacuna
function readQ(){
    document.getElementById("Table2").innerHTML='';
    var c = document.getElementById("Input5").value;

    var ref = firebase.database().ref("personas");
    ref.orderByChild("vacuna").equalTo(c).on("child_added", function(snapshot) {
        printRowQ(snapshot.val());
    });

}


function printRowQ(persona){

    var table = document.getElementById("Table2"); 
    
    //creamos un nuevo elemento en la tabla en la ultima posicion
    var row = table.insertRow(-1);

    //Insertamos cada una de las celdas/columnas del registro
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    
    //Agregamos la informacion a cada una de las columnas del registro
    cell1.innerHTML = persona.id;
    cell2.innerHTML = persona.nombre; 
    cell3.innerHTML = persona.correo;
    cell4.innerHTML = persona.vacuna; 
   
}