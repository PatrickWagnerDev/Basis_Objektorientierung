const CONTACTS = [ // JSON = JavaScript Object Notation
];

function addContact(fN, lN, ph) {
    let myContact = new Friend(fN, lN, ph);
    CONTACTS.push(myContact);
}

addContact('Junus', 'Ergin', '016364685');
addContact('Manuel', 'Thaler', '032548454');
addContact('Linus', 'Kauer', '0354698498');