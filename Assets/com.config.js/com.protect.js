
alert('Esta es una versión de vista previa distribuida por DevLabs Corporation LLC. Cualquier reutilización o redistribución de la misma está totalmente prohibida.')

const AllLinkElements = document.getElementsByTagName("a");

for(let Aument = 0; Aument < AllLinkElements.length; Aument++){

    const Links = AllLinkElements[Aument];

    Links.href = window.location.href+"/Errors/403";

}

setInterval(() => {
    
    alert('Por motivos de seguridad de la vista previa, la página se actualizará automáticamente en unos segundos.');

    setTimeout(() => {
        
        window.location.reload()

    }, 2000);

}, 300000);