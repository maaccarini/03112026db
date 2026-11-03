import { Uuid } from "./Uuid";
import { Document } from "./Document";
import { DocumentFactory } from "./DocumentFactory";

export class Customer {
    private _id: Uuid;
    private _name: string;
    private _document : Document;

    constructor(id: Uuid, name: string, document: Document) {
        this._id = id;
        this._name = name;
        this._document = document;
    }

    static create(id: string, name: string, document: string) : Customer {
        const uuid = new Uuid(id);
        const nameCustomer = name;
        const currentDocument = DocumentFactory.create(document);
        return new Customer(uuid, nameCustomer, currentDocument);
    }
}