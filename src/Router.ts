import {Request, Response, Router} from "express";
import { CustomerRepositoryInMemory } from "../src/infra/repository/memory/CustomerRepositoryInMemory" 
import { CreateCustomer } from "../src/controller/CustomerCreate";

const router = Router();

const repository = new CustomerRepositoryInMemory();
const createCustomer = new CreateCustomer(repository);

router.post("/customer", (request : Request, response : Response) => {
    createCustomer.execute(request, response);
});

export {router};