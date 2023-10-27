import dotenv from 'dotenv';
import path from 'path';
import Joi from 'joi';

dotenv.config({ path: path.join(__dirname, '../../.env') });

interface EnvVars {
  NODE_ENV: string;
  PORT: string;
  MONGODB_URL: string;
}

const envVarsSchema = Joi.object<EnvVars>({
  NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
  PORT: Joi.string().default('4000'),
  MONGODB_URL: Joi.string().required(),
}).unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  mongoose: {
    url: envVars.MONGODB_URL + (envVars.NODE_ENV === 'test' ? '-test' : ''),
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};

export default config;
