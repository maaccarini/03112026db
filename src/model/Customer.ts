import { Uuid } from "./Uuid";
import { Document } from "./Document";
import { DocumentFactory } from "./DocumentFactory";

export class Customer {
    private _id: Uuid;
    private _name: string;
    private _document : Document;

    constructor(name: string, document: Document, id?: string) {
        this._id = id ? new Uuid(id) : Uuid.randomGenerator();
        this._name = name;
        this._document = document;
    }

    static create(name: string, document: string, id?: string) : Customer {
        const nameCustomer = name;
        const currentDocument = DocumentFactory.create(document);
        return new Customer(nameCustomer, currentDocument, id);
    }
}