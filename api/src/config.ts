// NOTE: UNUSED

const config: Record<string, string | number | undefined> = {
  PORT: 27005,
  VERSION: 'v0.0.0',
};

const assertedConfig: Record<string, string> = {};
// Iterate over each env var and assert not undefined, otherwise throw error
Object.keys(config).forEach(key => {
  const value = config[key];
  if (value === undefined) {
    throw new Error(`${key} environment variable required!`);
  }
  // once asserted, populate a non-null variable with string values (conv. to number later, as needed)
  assertedConfig[key] = value as string;
});

// export a variable of non-null env vars
export default assertedConfig;
export {assertedConfig as config};
