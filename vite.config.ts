import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import basicSSL from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import dns from 'dns';
import fs from 'fs';
import path from 'path';
import { CommonServerOptions, defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const vitePlugins = [
  react(),
  tsconfigPaths(),
  TanStackRouterVite({
    routesDirectory: './src/router/routes',
    generatedRouteTree: './src/router/routeTree.gen.ts',
  }),
];

let httpsConfig: CommonServerOptions['https'] = undefined;
if (process.env.IS_SECURE === 'true') {
  configureSsl();
  dns.setDefaultResultOrder('verbatim');
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: vitePlugins,
    server: {
      https: httpsConfig,
      host: process.env.IS_SECURE === 'true' ? 'localhost' : '127.0.0.1',
    },
    build: {
      minify: mode === 'production' ? 'esbuild' : false,
      sourcemap: mode === 'staging',
    },
  };
});

function configureSsl() {
  const certs = path.join(__dirname, '.certs');
  const sslCertPath = path.join(certs, 'localhost.pem');
  const sslKeyPath = path.join(certs, 'localhost-key.pem');

  if (fs.existsSync(sslKeyPath) && fs.existsSync(sslCertPath)) {
    httpsConfig = {
      key: sslKeyPath,
      cert: sslCertPath,
    };
    return;
  }

  vitePlugins.push(basicSSL());
}
