/**** Data ****/

const emails = [
    {
        id: 0,
        author: "Natalie",
        subject: "You're the best",
        unread: false,
    },
    {
        id: 1,
        author: "Natalie",
        subject: "Good job!",
        unread: true
    }
]

/**** CREATE UPDATE DELETE ****/

function createEmail(emailData) {
    emailData.id = emails[emails.length - 1].id + 1 // little trick
    emails.push(emailData);
    renderEmailList();
}

function deleteEmail(idToDelete) {
    const index = emails.findIndex(email => email.id === idToDelete);
    emails.splice(index, 1);
    renderEmailList();
}

function updateEmail(idToUpdate, updatedEmailData) {
    const index = emails.findIndex(email => email.id === idToUpdate);
    emails[index] = updatedEmailData;
    renderEmailList();
}

function markAsRead(idToMarkAsRead) {
    emails.find(email => email.id === idToMarkAsRead).unread = false;
    renderEmailList();
}

/**** Form ****/

const $subjectInput = $("#subject-input")

function onSubmitButtonClick() {
    const newEmailData = {
        author: "Natalie",
        subject: $subjectInput.val(),
        unread: true
    }
    createEmail(newEmailData);
    $subjectInput.val("");
}

/**** READ ****/

const $emailContainer = $("#email-container");

$(() => {
    renderEmailList();
})

function renderEmailList() {
    $emailContainer.empty();
    const $emailListItems = emails.map(email => renderEmail(email))
    $emailContainer.append($emailListItems);
}

function renderEmail(email) {
    let liClass = "";
    if(email.unread) {
        liClass = "fw-bold"
    }
    return $("<li/>").addClass("list-group-item " + liClass).text(email.subject).append(
        $("<button/>").text("Mark as Read").addClass("btn btn-secondary")
            .on("click", () => markAsRead(email.id))
    )
}