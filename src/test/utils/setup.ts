  // eslint-disable-next-line import/first
import { startServer } from './test-utils'
import '@testing-library/jest-dom';
import { beforeAll, afterEach,  afterAll} from 'vitest';
import { cleanup } from '@testing-library/react';
import { vi } from 'vitest'


vi.mock('Geolocation', () => {
    return {
      getCurrentPosition: vi.fn(),
      watchPosition: vi.fn(),
    }
  });


 

const server = startServer()

beforeAll(() => server.listen())
afterEach(() => { server.resetHandlers()
                  cleanup();
                })
afterAll(() => server.close())