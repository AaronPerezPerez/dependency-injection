import { createApp } from "./test/utils/createApp";
import dotenv from "dotenv";

dotenv.config();

const app = createApp();
app.listen(() => console.log(`Server started at http://localhost:3000`));
