//your JS code here. If required.
document.querySelector("#submit").addEventListener("click", (event) => {
    event.preventDefault();
    
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;
    
    if (title === "" || author === "" || isbn === "") {
        alert("Please fill in all fields");
        return;
    }
    
    const bookList = document.querySelector("#book-list");
    
    const row = document.createElement("tr");
    
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">X</button></td>
    `;
    
    bookList.appendChild(row);
    
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
});

document.querySelector("#book-list").addEventListener("click", (event) => {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.parentElement.remove();
    }
});