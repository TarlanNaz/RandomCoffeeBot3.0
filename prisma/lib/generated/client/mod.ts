import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const { PrismaClient } = require("./index.js");
export { PrismaClient };