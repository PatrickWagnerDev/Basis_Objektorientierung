// Klasse
// Beschreibung wie ein Objekt aussehen soll / Vorlage
class Contact {
    firstName;
    lastName;
};

const CONTACTS = [ // JSON = JavaScript Object Notation
];

function addContact(fN, lN) {
    CONTACTS.push(
        {
            'firstName':fN,
            'lastName':lN
        }
    );
}

addContact('Junus', 'Ergin');
addContact('Manuel', 'Thaler');
addContact('Linus', 'Kauer');