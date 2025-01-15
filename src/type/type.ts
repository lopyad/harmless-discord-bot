import Config from "../config/config";
import MongoDB from "../repository/mongodb";
import Logger from "../util/logger";

interface Service{
    config: Config;
    logger: Logger;
    mongodb: MongoDB;
}

export {Service};