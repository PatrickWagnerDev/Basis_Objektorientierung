// Klasse
// Beschreibung wie ein Objekt aussehen soll / Vorlage
class Contact {
    firstName;
    lastName;

    constructor(fN, lN) {
        this.firstName = fN;
        this.lastName = lN;
    }
};

const CONTACTS = [ // JSON = JavaScript Object Notation
];

function addContact(fN, lN) {
    let myContact = new Contact(fN, lN);
    CONTACTS.push(myContact);
}

addContact('Junus', 'Ergin');
addContact('Manuel', 'Thaler');
addContact('Linus', 'Kauer');