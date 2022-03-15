export interface OpenViduPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
