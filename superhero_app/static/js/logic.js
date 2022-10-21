//  version Vanilla JAVASCRIPT
// function search(e){
//     e.preventDefault();
//     var searchForm = document.getElementById('searchForm')
//     var form = new FormData(searchForm);
//     fetch('http://localhost:5000/search',{method:'POST',body:form})
//         .then(res => res.json() )
//         .then( data => console.log(data) )
// }

// version JQUERY
$(".formulario_busqueda").on("submit", function(e){
    e.preventDefault();
    console.log("LLEGO POR ACA EL FORM?")
    var formulario = new FormData(e.target)
    enviarInfoFormulario(formulario)
})

enviarInfoFormulario = async function(formulario){
    url = "http://localhost:5000/buscarhero"
    settings = {
        method: "POST",
        body: formulario
    }


try{
    var respuesta = await fetch(url, settings)
    var data = await respuesta.json()
    if ('results' in data){
        var resultado = "<div class='card mb-3' style='max-width: 540px;'>"
        for (i in data['results']){
             resultado += `<div class='row g-0'>
            <div class="col-md-4">
              <img src="${data['results'][i]['image']['url']}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>`
            
        }
        resultado += "</div>"
        $(".resultado").append($(resultado))
    }
    else{
        let error = "<p class= text-danger> No encontramos lo que buscas</p>"
        $(".resultado").append($(error))
    }
}
catch(error){
    console.log(error)
    alert(error)
}
}
