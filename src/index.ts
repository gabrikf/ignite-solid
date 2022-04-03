import express from "express";
import swaggerUi from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";
import setupSwagger from "./swagger.json";

const app = express();
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(setupSwagger));

app.use(express.json());

app.use("/users", usersRoutes);

export { app };
