// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'desktop',
      use: {
        // Spécifiez ici la configuration de votre environnement de test (par exemple, 'browserName', 'channel', etc.)
        browserName: 'chromium',
      },
      testDir: './tests', // Le répertoire des tests
    },
  ],
};

export default config;
