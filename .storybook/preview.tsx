import React from 'react';
import { initialize, mswLoader } from 'msw-storybook-addon'
import type { Preview } from "@storybook/react";
import { I18nextProvider } from "react-i18next";
import 'tailwindcss/tailwind.css'
import i18n from '../src/i18n/config.js';

//initialize mswLoader

 
// Wrap your stories in the I18nextProvider component
const withI18next = (Story) => {
 return (
   // This catches the suspense from components not yet ready (still loading translations)
   // Alternative: set useSuspense to false on i18next.options.react when initializing i18next
   
     <I18nextProvider i18n={i18n}>
       <Story />
     </I18nextProvider>
  
 );
};
 
// export decorators for storybook to wrap your stories in
export const decorators = [withI18next];

const preview: Preview = {
  //initialize mswLoader
  beforeAll: async() => {
    await initialize();
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview