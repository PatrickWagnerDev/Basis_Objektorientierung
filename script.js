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