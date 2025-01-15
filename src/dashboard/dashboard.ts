import Config from "../config/config";
import Logger from "../util/logger";
import DashboardService from "./service";
import express, { Application } from "express";

export default class Dashboard{
    config: Config;
    logger: Logger;
    service: DashboardService;
    app: Application;
    port: number = 3000;
    constructor(config: Config, logger:Logger, service: DashboardService){
        this.config = config;
        this.logger = logger;
        this.service = service;
        this.app = express();
    }

    serverStart(){
        this.registerRouter();
          
        this.app.listen(this.port, () => {
            console.log(`# Server listening on port ${this.port}`);
        });
    }

    registerRouter(){

    }
}