import app from "./app"
import config from 'config'
import logger from "./helpers/winston_logger";
import db from "./helpers/db_sequelize";

const NAME = config.get("project.name");
const PORT = process.env.PORT || config.get("project.port");

app.listen(PORT, async () => {
    db.instance.authenticate().then(() => {
        logger.info(`${NAME} Connected to DB and is running on port ${PORT}`);
    }).catch((error) => {
        logger.error(`${error}`);
    });
});

export default app;