import fs from "fs";
import path from "path";

const buildDir = "build";

fs.mkdirSync(buildDir, { recursive: true });
fs.copyFileSync("src/index.html", path.join(buildDir, "index.html"));
fs.cpSync("src/assets", path.join(buildDir, "assets"), { recursive: true });
fs.copyFileSync("../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", path.join(buildDir, "assets/bootstrap.bundle.min.js"));
fs.copyFileSync("../../build/rainboot.min.css", path.join(buildDir, "assets/rainboot.min.css"));