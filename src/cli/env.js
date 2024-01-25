const parseEnv = () => {
    const envVariables = Object.keys(process.env).filter((el) => el.startsWith("RSS_"));
    const envVarWithValues = envVariables.map((envVar) => `${envVar}=${process.env[envVar]}`);
    const result = envVarWithValues.join("; ");
    console.log(result);
};

parseEnv();