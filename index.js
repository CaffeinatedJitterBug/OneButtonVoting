function getId(id){
    id.toString();
    let links = document.getElementsByClassName(id);
    for (let x = 0; x < links.length; x++){
        links[x].click();
    }
};
