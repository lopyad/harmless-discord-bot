import Config from "../config/config";
import Logger from "../util/logger";

export default class MongoDB{
    config: Config;
    logger: Logger;
    constructor(config: Config, logger: Logger){
        this.config = config;
        this.logger = logger;
    }
}