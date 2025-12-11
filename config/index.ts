import dev from "./dev.config";
import prod from "./prod.config";
import test from "./stag.config";

const env = process.env.NODE_ENV || "development";

const configMap: Record<string, any> = {
  development: dev,
  production: prod,
  test: test,
};

export default configMap[env];
