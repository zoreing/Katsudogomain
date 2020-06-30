    const imguno = document.getElementById('imguno')


    const boton1 = document.getElementById('fuck')
 
 
 
    var pas1 = document.getElementById('eli') 

    function cambia(val){
        var nodos = document.getElementById(val);
        var atributo = nodos.attributes.getNamedItem("src").nodeValue;
        //alert(atributo)
        var elementoRecibe = document.getElementById("eli");
        elementoRecibe.setAttribute("src",atributo);
    }

    
    boton1.addEventListener('click', () => {
       
        imguno.setAttribute('open', 'true');
       
      
      })
    //  boton2/addEventListener('click',() => {
    //     imguno.setAttribute('open', 'true');
    //    })
     


    pas1.addEventListener('click', () => {
        imguno.removeAttribute('open');  
     })
