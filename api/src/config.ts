// NOTE: UNUSED
const config: Record<string, string | number | undefined> = {
  PORT: 27005,
  VERSION: 'v0.0.0',
};

const assertedConfig: Record<string, string> = {};

Object.keys(config).forEach(key => {
  const value = config[key];
  if (value === undefined)
    throw new Error(`${key} environment variable required!`);

  assertedConfig[key] = value as string;
});

export default assertedConfig;
