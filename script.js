const CONTACTS = [ // JSON = JavaScript Object Notation
];

function addContact(fN, lN) {
    let myContact = new Contact(fN, lN);
    CONTACTS.push(myContact);
}

addContact('Junus', 'Ergin', '016364685');
addContact('Manuel', 'Thaler', '032548454');
addContact('Linus', 'Kauer', '0354698498');