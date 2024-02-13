import { productionBaseUrl, sandBoxBaseUrl } from '../constants';
import { generateUrl, getBaseUrl } from './url-generator';

describe('base url', () => {
    it('should return sandbox base url', () => {
        expect(getBaseUrl(true)).toBe(sandBoxBaseUrl);
    });
    it('should return production base url', () => {
        expect(getBaseUrl(false)).toBe(productionBaseUrl);
    });
});

describe('generate url', () => {
    describe('base url', () => {
        it('empty params should return production url', () => {
            const url = generateUrl({});
            expect(url.href).toBe(`${productionBaseUrl}`);
        });
        it('sandbox true should return sandbox url', () => {
            const url = generateUrl({ sandbox: true });
            expect(url.href).toBe(`${sandBoxBaseUrl}`);
        });
    });

    describe('path', () => {
        it('should return url with path', () => {
            const url = generateUrl({ path: 'path' });
            expect(url.href).toBe(`${productionBaseUrl}/path`);
        });
        it('should return url with multiple path and in the same order', () => {
            const url = generateUrl({ path: ['path', 'foo', 'bar'] });
            expect(url.href).toBe(`${productionBaseUrl}/path/foo/bar`);
        });
    });

    describe('queries', () => {
        it('should return url with path and query', () => {
            const url = generateUrl({ path: 'path', queries: { query: 'value' } });
            expect(url.href).toBe(`${productionBaseUrl}/path?query=value`);
        });
        it('should return url array queries', () => {
            const url = generateUrl({ queries: { query: ['value1', 'value2'] } });
            expect(url.href).toMatch('query=value1');
            expect(url.href).toMatch('query=value2');
        });
        it('should return url with queries', () => {
            const url = generateUrl({ queries: { query1: 'value1', query2: 'value2' } });
            expect(url.href).toMatch(`query1=value1`);
            expect(url.href).toMatch(`query2=value2`);
        });
        it('should return url with complex queries', () => {
            const url = generateUrl({
                queries: {
                    query1: ['value1', 'value2'],
                    query2: 'value3',
                },
            });
            expect(url.href).toMatch(`query1=value1`);
            expect(url.href).toMatch(`query1=value2`);
            expect(url.href).toMatch(`query2=value3`);
        });
    });
});
