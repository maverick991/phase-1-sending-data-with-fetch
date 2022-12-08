// Add your code here
function submitData(name, email){
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    };
    return fetch("http://localhost:3000/users",configObj)
    .then(resp => resp.json())
    .then(body => addNewContact(body.id))
    .catch(message => addNewContact(message.message))
}
function addNewContact(newID){
    document.body.innerHTML = newID
}
