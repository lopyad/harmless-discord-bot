import Bot from "./bot/bot";
import BotService from "./bot/service";
import Config from "./config/config";
import Dashboard from "./dashboard/dashboard";
import DashboardService from "./dashboard/service";
import MongoDB from "./repository/mongodb";
import Logger from "./util/logger";

const config = new Config();
const logger = new Logger(config);

const mongodb = new MongoDB(config, logger);

const dashboardService = new DashboardService(config, logger, mongodb);
const dashboard = new Dashboard(config, logger, dashboardService);

const botService = new BotService(config, logger, mongodb);
const bot = new Bot(config, logger, botService);

dashboard.serverStart();
bot.start();




