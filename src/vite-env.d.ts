/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  readonly VITE_API_TIMEOUT: string
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_VERSION: string
  readonly VITE_DEBUG_MODE: string
  readonly VITE_PORT: string
  readonly VITE_HOST: string
  readonly VITE_SOURCEMAP: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
