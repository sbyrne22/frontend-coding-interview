import { GET } from '../route';

describe('GET /api/pexels route', () => {
    const originalEnv = process.env;

    beforeEach(() => {
        jest.resetAllMocks();
        process.env = { ...originalEnv };
    });

    afterAll(() => {
        process.env = originalEnv;
    });

    it('Returns photos when upstream succeeds', async () => {
        process.env.PEXELS_KEY = 'server_key';
        // mock upstream fetch
        // @ts-ignore
        fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: async () => ({ photos: [{ id: 1, photographer: 'John Doe', src: { medium: 'url' } }] }),
        });

        const res = await GET();
        expect(res.status).toBe(200);
        const data = await res.json();
        expect(data.photos).toEqual([{ id: 1, photographer: 'John Doe', src: { medium: 'url' } }]);
        expect((fetch as jest.Mock).mock.calls.length).toBeGreaterThan(0);
    });

    it('Returns 500 when PEXELS_KEY is missing', async () => {
        delete process.env.PEXELS_KEY;
        const res = await GET();
        expect(res.status).toBe(500);
        const data = await res.json();
        expect(data.error).toMatch(/missing PEXELS_KEY/i);
    });

    it('Propagates upstream error status', async () => {
        process.env.PEXELS_KEY = 'server-key';
        fetch = jest.fn().mockResolvedValue({
            ok: false,
            status: 401,
            text: async () => 'Unauthorized',
        });

        const res = await GET();
        expect(res.status).toBe(401);
        const data = await res.json();
        expect(data.error).toMatch(/Pexels fetch failed/i);
        expect(data.details).toBe('Unauthorized');
    })
});