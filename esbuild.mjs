import path from "path";
import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

const buildDir = "build";

const commonConfig = {
  entryPoints: ["src/rainboot.scss"],
  bundle: true,
  plugins: [sassPlugin()],
};

await esbuild
  .build({
    ...commonConfig,
    outfile: path.join(buildDir, "rainboot.css"),
  });

await esbuild
  .build({
    ...commonConfig,
    minify: true,
    outfile: path.join(buildDir, "rainboot.min.css"),
  });