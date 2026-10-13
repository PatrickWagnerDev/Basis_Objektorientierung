const CONTACTS = [ // JSON = JavaScript Object Notation
];

function addContact(fN, lN) {
    let myContact = new Contact(fN, lN);
    CONTACTS.push(myContact);
}

addContact('Junus', 'Ergin');
addContact('Manuel', 'Thaler');
addContact('Linus', 'Kauer');