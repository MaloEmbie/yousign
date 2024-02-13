type configAgent = {
    apiToken: string;
    sandbox?: boolean;
};
const yousign = ({ apiToken, sandbox = false }: configAgent) => {
    const bearerToken = `Bearer ${apiToken}`;
    return {
        signature_request: {},
    };
};
