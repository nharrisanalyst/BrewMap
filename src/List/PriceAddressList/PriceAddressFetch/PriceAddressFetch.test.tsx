import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import { it, expect } from 'vitest'

import { getServer } from '../../../test/utils/test-utils'
import * as stories from './PriceAddressFetch.stories'



const { Primary } = composeStories(stories)

const server = getServer()

it('renders film cards for each film', async () => {
  
  server.use(...Primary.parameters.msw.handlers)
  render(<Primary />)

  expect(screen.getByText(/Fetching Coffee Locations.../i)).not.toBeNull();

  await screen.findAllByText('Shady Coffee & Tea')

  const coffeeShop = await screen.findAllByText('Shady Coffee & Tea')
  expect(coffeeShop).toHaveLength(4)
})

