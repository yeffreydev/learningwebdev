const idElements = {
    inputFile: document.getElementById("input_file"),
    dropZone: document.getElementById("drop_zone"),
    previewImgDiv: document.getElementById("preview_img"),
    clearFile: document.querySelector(".clear_file"),
    previewContainer: document.querySelector(".preview_container"),
    dropContainer: document.querySelector(".drop_container")
}

const {previewContainer,dropContainer,previewImgDiv,dropZone,clearFile} = idElements;

//function for verify file type
const verifyFileType = (type)=>type === "image/jpeg" || type === "image/png"

//render img in #preview_img container
const addPreviewImage = (url) => {
    if (!url) return;
    const imgNode = document.createElement("img"); //create a img node
    imgNode.src = url;

    // clear #previe img container
    dropContainer.classList.remove("hide_drop_container")
    while (previewImgDiv.children[0]) {
        previewImgDiv.removeChild(previewImgDiv.children[0])
    }
    //render image
    previewImgDiv.appendChild(imgNode);
    dropContainer.classList.add("hide_drop_container");
    previewContainer.classList.remove("hide_preview_container")
    clearFile.classList.remove("hide")
}
const removeImage = ()=> {
    previewContainer.classList.remove("hide_preview_container")
    while (previewImgDiv.children[0]) {
        previewImgDiv.removeChild(previewImgDiv.children[0])
    }
    const spanNode = document.createElement("span");
    const txtNode = document.createTextNode("Choose Image")
    spanNode.appendChild(txtNode)
    previewImgDiv.appendChild(spanNode);
    previewContainer.classList.add("hide_preview_container")
    dropContainer.classList.remove("hide_drop_container");
    clearFile.classList.add("hide");
}
window.addEventListener("drop", (e)=> {
    e.preventDefault();
})

window.addEventListener("dragover", (e) => {
    e.preventDefault();
})

//drop zone
idElements.dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    if (!e.dataTransfer.items) {
       return alert("error dropping items")
    }

    //get first file
    const file = e.dataTransfer.files[0];
    
    //accept only jpeg and png files
    const isVerifyFileType = verifyFileType(file.type)
    
    if (!isVerifyFileType) {
      return  alert("not support " + file.type+" files")
    }
    
    //convert file to object url
    const objectUrl = URL.createObjectURL(file);
    addPreviewImage(objectUrl);
})

idElements.inputFile.addEventListener("change", (e) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (!file) return alert("not files contain")

    //accept only jpeg and png files
    const isVerifyFileType = verifyFileType(file.type)
    
    if (!isVerifyFileType) {
        return  alert("not support " + file.type+" files")
     }
     
   //convert file to object url
   const objectUrl = URL.createObjectURL(file);
   addPreviewImage(objectUrl);
})

//clear file
clearFile.addEventListener("click", removeImage)

//ref drop zone with file input
idElements.dropZone.addEventListener("click", () => idElements.inputFile.click());

