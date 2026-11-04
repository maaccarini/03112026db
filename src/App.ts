import express from "express";
import { router } from "./Router";

export class App {
    private _server : express.Application;

    constructor() {
        this._server = express();
        this._server.use(express.json());
        this._server.use(router);
    }

    public getServer() : express.Application {
        return this._server;
    }
}