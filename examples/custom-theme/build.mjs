import path from "path";
import fs from "fs";
import theming from '@cloudscape-design/components-themeable/theming';

const buildDir = "build";

const theme = {
  tokens: {
    fontFamilyBase: "Comic Sans MS",
  }
};

await theming.buildThemedComponents({
  theme,
  outputDir: buildDir,
});

// Fix artifacts to match @cloudscape-design/design-tokens

fs.renameSync(path.join(buildDir, "/design-tokens/visual-refresh.scss"), path.join(buildDir, "/design-tokens/index.scss"));

fs.writeFileSync(path.join(buildDir, "/design-tokens/package.json"), JSON.stringify({
  "name": "@cloudscape-design/design-tokens",
}, null, 2));