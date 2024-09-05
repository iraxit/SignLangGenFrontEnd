const form = document.getElementById("form");

form.addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    const name = document.getElementById("name");
    const files = document.getElementById("files");
    const formData = new FormData();
    formData.append("name", name.value);
    for(let i =0; i < files.files.length; i++) {
            formData.append("files", files.files[i]);
    }
    fetch("https://signlanggen.onrender.com/upload_files", {
        method: 'POST',
        body: formData
    })
        .then((res) => adddiv(res)) 
        .catch((err) => console.log("Error occured", err));
}


function adddiv(r){
    / Create element:
    // Create the new div element
    const newDiv = document.createElement("div");
    newDiv.textContent = "This is the new div as response is okay"; // Set the content of the div
    const lastElement = document.querySelector("body > *:last-child");
    lastElement.parentNode.insertBefore(newDiv, lastElement.nextSibling);

}
