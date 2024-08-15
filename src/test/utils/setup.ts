  // eslint-disable-next-line import/first
import { startServer } from './test-utils'
import '@testing-library/jest-dom';
import { beforeAll, afterEach,  afterAll} from 'vitest';
import { cleanup } from '@testing-library/react';
import { mock } from 'vitest-mock-extended'
import { vi } from 'vitest'

global.navigator = { geolocation: {
  getCurrentPosition: ()=>{}
} }

vi
  .spyOn(global.navigator.geolocation, 'getCurrentPosition')
  .mockImplementation((success) =>
    Promise.resolve(
      success({
        ...mock<GeolocationPosition>(),
        coords: {
          ...mock<GeolocationCoordinates>(),
          latitude: 51.1,
          longitude: 45.3,
        },
      }),
    ),
  )



 

const server = startServer()

beforeAll(() => server.listen())
afterEach(() => { server.resetHandlers()
                  cleanup();
                })
afterAll(() => server.close())