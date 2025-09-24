// import { fileURLToPath, URL } from "node:url";

// import { defineConfig } from "vite";
// import plugin from "@vitejs/plugin-react";
// import fs from "fs";
// import path from "path";
// import child_process from "child_process";

// const baseFolder =
//   process.env.APPDATA !== undefined && process.env.APPDATA !== ""
//     ? `${process.env.APPDATA}/ASP.NET/https`
//     : `${process.env.HOME}/.aspnet/https`;

// const certificateArg = process.argv
//   .map((arg) => arg.match(/--name=(?<value>.+)/i))
//   .filter(Boolean)[0];
// const certificateName = certificateArg
//   ? certificateArg?.groups?.value
//   : "mirus_edit_order.client";

// if (!certificateName) {
//   console.error(
//     "Invalid certificate name. Run this script in the context of an npm/yarn script or pass --name=<<app>> explicitly."
//   );
//   process.exit(-1);
// }

// const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
// const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

// if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
//   if (
//     0 !==
//     child_process.spawnSync(
//       "dotnet",
//       [
//         "dev-certs",
//         "https",
//         "--export-path",
//         certFilePath,
//         "--format",
//         "Pem",
//         "--no-password",
//       ],
//       { stdio: "inherit" }
//     ).status
//   ) {
//     throw new Error("Could not create certificate.");
//   }
// }

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [plugin()],
//   resolve: {
//     alias: {
//       "@": fileURLToPath(new URL("./src", import.meta.url)),
//     },
//   },
//   server: {
//     proxy: {
//       "^/weatherforecast": {
//         target: "https://localhost:5001/",
//         secure: false,
//       },
//     },
//     port: 5173,
//     https: {
//       key: fs.readFileSync(keyFilePath),
//       cert: fs.readFileSync(certFilePath),
//     },
//   },
// });

import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import plugin from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import child_process from "child_process";
import { env } from "process";

// Detect if running in Vercel (or production build)
const isVercel = !!process.env.VERCEL;

let httpsConfig = undefined;

if (!isVercel) {
  const baseFolder =
    env.APPDATA !== undefined && env.APPDATA !== ""
      ? `${env.APPDATA}/ASP.NET/https`
      : `${env.HOME}/.aspnet/https`;

  const certificateName = "mirus_edit_order.client";
  const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
  const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

  if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
    if (
      0 !==
      child_process.spawnSync(
        "dotnet",
        [
          "dev-certs",
          "https",
          "--export-path",
          certFilePath,
          "--format",
          "Pem",
          "--no-password",
        ],
        { stdio: "inherit" }
      ).status
    ) {
      throw new Error("Could not create certificate.");
    }
  }

  httpsConfig = {
    key: fs.readFileSync(keyFilePath),
    cert: fs.readFileSync(certFilePath),
  };
}

const target = env.ASPNETCORE_HTTPS_PORT
  ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`
  : env.ASPNETCORE_URLS
    ? env.ASPNETCORE_URLS.split(";")[0]
    : "https://localhost:7012";

export default defineConfig({
  plugins: [plugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "^/weatherforecast": {
        target,
        secure: false,
      },
      "^/api": {
        target,
        secure: false,
        changeOrigin: true,
      },
    },
    port: 5173,
    https: httpsConfig, // only enabled locally
  },
});
