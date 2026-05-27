const API_URL = "https://6a1710e41b90031f81b1f850.mockapi.io/PhoneBook";

const contactForm = document.getElementById("contactForm");
const contactListId = document.getElementById("contactList");
const searchId = document.getElementById("search");
const messageId = document.getElementById("message");

const contactId = document.getElementById("contactId");
const nameId = document.getElementById("name");
const phoneId = document.getElementById("phone");
const emailId = document.getElementById("email");

async function fetchContacts() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch contacts");
        }

        const contacts = await response.json();
        displayContacts(contacts);

    } catch (error) {
        showMessage(error.message, "red");
    }
}


function displayContacts(contacts) {

    contactListId.innerHTML = "";

    contacts.forEach(contact => {

        const card = document.createElement("div");
        card.classList.add("contact-card");

        card.innerHTML = `
            <h3>${contact.name}</h3>
            <p><strong>Phone:</strong> ${contact.phone}</p>
            <p><strong>Email:</strong> ${contact.email}</p>

            <div class="actions">
                <button class="edit-btn" onclick="editContact('${contact.id}','${contact.name}','${contact.phone}','${contact.email}')">
                    Edit
                </button>

                <button class="delete-btn" onclick="deleteContact('${contact.id}')">
                    Delete
                </button>
            </div>
        `;

        contactListId.appendChild(card);
    });
}


contactForm.addEventListener("submit", async function(e) {

    e.preventDefault();

    const name = nameId.value.trim();
    const phone = phoneId.value.trim();
    const email = emailId.value.trim();

    if (name === "" || phone === "" || email === "") {
        showMessage("All fields are required", "red");
        return;
    }

    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        showMessage("Phone number must contain 10 digits", "red");
        return;
    }

    const contactData = {
        name,
        phone,
        email
    };

    try {
           if (contactId.value) {
             const response = await fetch(`${API_URL}/${contactId.value}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contactData)
            });

            if (!response.ok) {
                throw new Error("Failed to update contact");
            }

            showMessage("Contact updated successfully", "green");

        } else {

            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contactData)
            });

            if (!response.ok) {
                throw new Error("Failed to add contact");
            }

            showMessage("Contact added successfully", "green");
        }

        contactForm.reset();
        contactId.value = "";

        fetchContacts();

    } catch (error) {
        showMessage(error.message, "red");
    }
});


function editContact(id, name, phone, email) {

    contactId.value = id;
    nameId.value = name;
    phoneId.value = phone;
    emailId.value = email;
}


async function deleteContact(id) {

    const confirmDelete = confirm("Are you sure want to delete this contactt?");

    if (!confirmDelete) return;

    try {

        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Failed to delete contact");
        }

        showMessage("Contact is deleted successfully", "green");

        fetchContacts();

    } catch (error) {
        showMessage(error.message, "red");
    }
}


searchId.addEventListener("keyup", async function() {

    const searchValue = searchId.value.toLowerCase();

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Search failed");
        }

        const contacts = await response.json();

        const filteredContacts = contacts.filter(contact =>
            contact.name.toLowerCase().includes(searchValue)
        );

        displayContacts(filteredContacts);

    } catch (error) {
        showMessage(error.message, "red");
    }
});


function showMessage(text, color) {

    message.textContent = text;
    message.style.color = color;

    setTimeout(() => {
        message.textContent = "";
    }, 3000);
}

fetchContacts();