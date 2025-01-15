import "dotenv/config";

export default class Config{
    botToken: string;
    constructor(){
        this.botToken = process.env.BOT_TOKEN || "error";
    }
}