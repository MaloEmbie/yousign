import { productionBaseUrl, sandBoxBaseUrl } from '../constants';

export const getBaseUrl = (sandbox: boolean) => (sandbox ? sandBoxBaseUrl : productionBaseUrl);

export const generateUrl = ({
    sandbox = false,
    path,
    queries,
}: {
    sandbox?: boolean;
    path?: string | string[];
    queries?: Record<string, string | string[]>;
}) => {
    const baseUrlParts = [getBaseUrl(sandbox)];
    if (path) {
        if (Array.isArray(path)) {
            baseUrlParts.push(...path);
        } else {
            baseUrlParts.push(path);
        }
    }
    const baseUrl = baseUrlParts.join('/');
    const url = new URL(baseUrl);
    if (queries) {
        Object.entries(queries).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                value.forEach(v => url.searchParams.append(key, v));
            } else {
                url.searchParams.append(key, value);
            }
        });
    }
    return url;
};
