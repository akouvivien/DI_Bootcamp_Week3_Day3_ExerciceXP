function onDragOver(event) {
    event.preventDefault();
 
    // Définir le dropEffect pour déplacer
    event.dataTransfer.dropEffect = "move"
}

function onDragStart(event) {
 
    // Ajouter l'identifiant de l'élément cible à l'objet de transfert de données.
    event.dataTransfer.setData("text", event.target.id);
 
    event.dataTransfer.effectAllowed = "move";
}
 
function onDrop(event) {
         
        event.preventDefault();
 
        // Obtenez l'id de la cible et ajoutez l'élément déplacé au DOM de la cible.
        var data = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(data));
 
}