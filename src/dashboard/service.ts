import Config from "../config/config";
import Logger from "../util/logger";
import MongoDB from "../repository/mongodb";


export default class DashboardService{
    config: Config;
    logger: Logger;
    mongodb: MongoDB;
    constructor(config: Config, logger:Logger, mongodb: MongoDB){
        this.config = config;
        this.logger = logger;
        this.mongodb = mongodb;
    }
}