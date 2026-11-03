import { Document } from "./Document";

export class Cnpj implements Document {
    private _value: string;

    constructor(value: string) {
        if (!Cnpj.isValid(value)) {
            throw new Error("Invalid CNPJ value");
        }
        this._value = value;
    }

    getDocument(): Document {
        return this;
    }

    getValue(): string {
        return this._value;
    }

    static isValid(value : string): boolean {
        if (value.length == 14) {
            return true;
        }  
        return false;
    }

}