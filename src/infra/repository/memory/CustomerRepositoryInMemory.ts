import { Customer } from "../../../model/Customer";
import { CustomerRepository } from "../../../model/Repository/CustomerRepository";

export class CustomerRepositoryInMemory implements CustomerRepository {
    private _customerCollection: Array<Customer> = [];

    constructor() {
        this._customerCollection = new Array<Customer>();
    }

    async save(customer: Customer): Promise<void> {
        /* await poderia vir aqui, mas não surte nenhuma efeito para essa operação */
        this._customerCollection.push(customer);
    }
}