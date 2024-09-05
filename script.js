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
        .then((res) => {
            // Create element:
            const para = document.createElement("p");
            para.innerText = "This is a paragraph.";

            // Append to body:
            document.body.appendChild(para);})
        .catch((err) => console.log("Error occured", err));
}


