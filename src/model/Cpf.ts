import { Document } from "./Document";

export class Cpf implements Document {
    private _value: string;

    constructor(value: string) {
        if (!Cpf.isValid(value)) {
            throw new Error("Invalid CPF value");
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
        if (value.length == 11) {
            return true;
        }
        return false;
    }
}