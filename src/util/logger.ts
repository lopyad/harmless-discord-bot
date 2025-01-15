import Config from "../config/config";

export default class Logger{
    config: Config;
    constructor(config: Config){
        this.config = config;
    }
}