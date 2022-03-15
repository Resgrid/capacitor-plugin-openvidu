import { WebPlugin } from '@capacitor/core';

import type { OpenViduPlugin } from './definitions';

export class OpenViduWeb extends WebPlugin implements OpenViduPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
