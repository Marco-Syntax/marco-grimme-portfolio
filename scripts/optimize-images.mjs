#!/usr/bin/env node
import sharp from "sharp";
import { readdir, mkdir, rm } from "node:fs/promises";
import { join, parse } from "node:path";
import { existsSync } from "node:fs";

const SRC_DIR = "public/img/images";
const OUT_DIR = "public/img/images/optimized";

// Mapping: source filename (without ext) → output prefix + sizes
const IMAGE_MAP = [
  { src: "business_organizer", out: "business", sizes: [480, 960, 1440] },
  { src: "checker_club", out: "checkerclub", sizes: [480, 960, 1440] },
  { src: "dream_feed", out: "dreamfeed", sizes: [480, 960, 1440] },
  { src: "ki_for_kids", out: "kiforkids", sizes: [480, 960, 1440] },
  { src: "monster_run", out: "monster", sizes: [480, 960, 1440] },
  { src: "next", out: "next", sizes: [480, 960, 1440] },
  { src: "business_dashborad", out: "dashboard", sizes: [480, 960, 1440] },
  { src: "5_projekt", out: "hero5", sizes: [640, 960, 1280, 1600] },
];

const FORMATS = [
  { ext: "avif", opts: { quality: 60, effort: 6 } },
  { ext: "webp", opts: { quality: 75, effort: 6 } },
];

async function run() {
  // Ensure output dir exists
  await mkdir(OUT_DIR, { recursive: true });

  // Find all source files
  const srcFiles = await readdir(SRC_DIR);

  let total = 0;
  let skipped = 0;

  for (const entry of IMAGE_MAP) {
    const srcFile = srcFiles.find(
      (f) => parse(f).name === entry.src && /\.(png|jpe?g|webp|tiff?)$/i.test(f)
    );

    if (!srcFile) {
      console.warn(`⚠  Source not found: ${entry.src} — skipping`);
      skipped++;
      continue;
    }

    const srcPath = join(SRC_DIR, srcFile);
    console.log(`\n📷 ${srcFile} → ${entry.out}`);

    for (const size of entry.sizes) {
      for (const fmt of FORMATS) {
        const outName = `${entry.out}-${size}.${fmt.ext}`;
        const outPath = join(OUT_DIR, outName);

        await sharp(srcPath)
          .resize(size, undefined, { fit: "inside", withoutEnlargement: true })
          [fmt.ext](fmt.opts)
          .toFile(outPath);

        console.log(`   ✅ ${outName}`);
        total++;
      }
    }
  }

  console.log(`\n🎉 Done! Generated ${total} files. Skipped ${skipped} sources.`);
}

run().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
});
