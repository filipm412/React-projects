class ContactItem {
    constructor(content, number) {
        this.content = content;
        this.number = number;
    }
    static fromJSON (json) {
        let contactItem = new ContactItem();
        contactItem.content = json.content;
        contactItem.number = json.number;
        return contactItem;
    }
}

export default ContactItem;