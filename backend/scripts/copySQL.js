// scripts/copySQL.js
const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "..", "src", "db");
const destDir = path.join(__dirname, "..", "dist", "db");

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const sqlFiles = fs.readdirSync(srcDir).filter(file => file.endsWith(".sql"));

for (const file of sqlFiles) {
  const srcFile = path.join(srcDir, file);
  const destFile = path.join(destDir, file);
  fs.copyFileSync(srcFile, destFile);
  console.log(`✅ Copiado: ${file}`);
}
