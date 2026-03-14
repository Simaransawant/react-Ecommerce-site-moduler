import { apiClient } from '@/services/apiClient';

describe('apiClient', () => {
  it('parses JSON response', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ hello: 'world' }),
    } as Response);

    await expect(apiClient<{ hello: string }>('/api')).resolves.toEqual({ hello: 'world' });
  });
});
