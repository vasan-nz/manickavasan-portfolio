import FtpDeploy from "ftp-deploy";
import { readFileSync } from "fs";

const envFile = readFileSync(".env", "utf-8");
const env = Object.fromEntries(
  envFile
    .split("\n")
    .filter((line) => line.includes("="))
    .map((line) => line.split("=").map((s) => s.trim()))
);

const ftpDeploy = new FtpDeploy();

const config = {
  user: env.FTP_USER,
  password: env.FTP_PASSWORD,
  host: env.FTP_HOST,
  port: 21,
  localRoot: "./dist",
  remoteRoot: env.FTP_REMOTE_ROOT,
  include: ["*", "**/*"],
  deleteRemote: false,
  forcePasv: true,
};

ftpDeploy.on("uploading", ({ filename, transferredFileCount, totalFilesCount }) => {
  console.log(`[${transferredFileCount}/${totalFilesCount}] ${filename}`);
});

ftpDeploy.on("upload-error", ({ err }) => {
  console.error("Upload error:", err);
});

console.log("Starting deployment to Hostinger...");
ftpDeploy
  .deploy(config)
  .then(() => console.log("Deployment complete!"))
  .catch((err) => console.error("Deployment failed:", err));
