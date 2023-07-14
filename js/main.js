let num = 3;

// Se muestran las secciones de la pagina, menu, aside izquierdo, aside derecho, data.
function DocumentReady(){
    $(document).ready(function () {
        $('.hed').load('menu.html');
        $('.asideLeft').load('asideLeft.html');
        $('.dataPage').load('data.html');
        $('.asideRight').load('asideRigth.html');
    });
}

DocumentReady();


function loadDoc(num) {
  const xhttp = new XMLHttpRequest();
  let data = document.getElementById("loadData");
  switch (num) {
    case 1:
        xhttp.onload = function() {
            data.innerHTML = this.responseText;
        }
        xhttp.open("GET", "data.html");
        xhttp.send();
        break;
    case 2:
        xhttp.onload = function() {
            data.innerHTML = this.responseText;
        }
        xhttp.open("GET", "noticias.html");
        xhttp.send();
        break;
    case 3:
        xhttp.onload = function() {
            data.innerHTML = this.responseText;
        }
        xhttp.open("GET", "contacto.html");
        xhttp.send();
        break;
  }  
}


// Se crea el modal de bienvenida
function CrearModal(){
    var dataModal = `
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body firstModal">
                <h1>Welcome!</h1>
                <p>Visit our page in facebook of create a videogames and other notices</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
    `;
    return dataModal;
}

function ImprimirModal(){
    var datos = document.getElementById("welcome");
    datos.innerHTML = CrearModal();
    $( document ).ready(function() {
        $('#exampleModal').modal('toggle')
    });
}

ImprimirModal();