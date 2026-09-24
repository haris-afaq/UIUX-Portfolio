declare module 'node:fs' {
  export function existsSync(path: string): boolean
  export function readFileSync(path: string, options: string): string
}

declare module 'node:path' {
  export function resolve(...paths: string[]): string
}

declare const process: {
  env: Record<string, string | undefined>
}

declare const __dirname: string
