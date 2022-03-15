import { registerPlugin } from '@capacitor/core';

import type { OpenViduPlugin } from './definitions';

const OpenVidu = registerPlugin<OpenViduPlugin>('OpenVidu', {
  web: () => import('./web').then(m => new m.OpenViduWeb()),
});

export * from './definitions';
export { OpenVidu };
