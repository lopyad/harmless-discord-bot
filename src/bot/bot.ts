import { measureMemory } from "vm";
import Config from "../config/config";
import Logger from "../util/logger";
import BotService from "./service";
import { 
    Client,
    Events,
    GatewayIntentBits
} from "discord.js";

export default class Bot{
    config: Config;
    logger: Logger;
    service: BotService;
    client: Client;
    constructor(config: Config, logger:Logger, service: BotService){
        this.config = config;
        this.logger = logger;
        this.service = service;
        this.client = new Client({ intents: [
            GatewayIntentBits.Guilds, 
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
        ]});
    }

    start(){
        this.client.once(Events.ClientReady, readyClient =>{
            console.log(`# Bot: ready ${readyClient.user.tag}`);
        });

        this.registerMessageHandler();

        this.client.login(this.config.botToken);

    }

    registerMessageHandler(){
        this.client.on(Events.MessageCreate, async(message)=>{
            if(message.content === "ping"){
                message.reply("pong!");
            }
        });
    }
}