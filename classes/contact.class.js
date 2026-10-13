// Klasse
// Beschreibung wie ein Objekt aussehen soll / Vorlage
class Contact {
    firstName;
    lastName;
    phone;

    constructor(fN, lN) {
        this.firstName = fN;
        this.lastName = lN;
        console.log('New Contact created!');
    };

    call() {
        window.location.href = 'tel:' + this.phone;
    };

    printFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
};