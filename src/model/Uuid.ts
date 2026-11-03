import {validate as validateUuid, v4 as uuidv4} from 'uuid';

export class Uuid {
    private _value: string;

    constructor(value: string) {
        if (!validateUuid(value)){
            throw new Error("Invalid UUID value");
        }
        this._value = value;
    }

    static randomGenerator() : Uuid {
        return new Uuid(uuidv4());
    }
}