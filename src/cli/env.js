const parseEnv = () => {
    const keys = Object.keys(process.env)
        .filter(key => key.includes('RSS_'))
        .map(key => `${key}=${process.env[key]}`)
        .join('; ')

    console.log(keys);
};

parseEnv();
