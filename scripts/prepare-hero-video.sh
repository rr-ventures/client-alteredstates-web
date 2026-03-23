#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SOURCE_VIDEO="$ROOT_DIR/src/brand/assets/HERO VIDEO.mp4"
TEMP_DIR="$ROOT_DIR/.tmp/hero-video"
OUTPUT_NAME="hero-video.mp4"

STATIC_TARGETS=(
  "$ROOT_DIR/apps/ahana/img/$OUTPUT_NAME"
  "$ROOT_DIR/apps/meditative/images/$OUTPUT_NAME"
  "$ROOT_DIR/apps/yoga/images/$OUTPUT_NAME"
  "$ROOT_DIR/apps/yogalax/images/$OUTPUT_NAME"
  "$ROOT_DIR/apps/zogin/img/$OUTPUT_NAME"
)

VITE_TARGETS=(
  "$ROOT_DIR/apps/bolt/public/media/$OUTPUT_NAME"
  "$ROOT_DIR/apps/lovable/public/media/$OUTPUT_NAME"
)

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg is required but not installed." >&2
  exit 1
fi

if [ ! -f "$SOURCE_VIDEO" ]; then
  echo "Source video not found: $SOURCE_VIDEO" >&2
  exit 1
fi

mkdir -p "$TEMP_DIR"

TEMP_OUTPUT="$TEMP_DIR/$OUTPUT_NAME"

ffmpeg -y \
  -i "$SOURCE_VIDEO" \
  -an \
  -vf "fps=24,scale='min(1280,iw)':-2:flags=lanczos" \
  -c:v libx264 \
  -profile:v high \
  -level 4.0 \
  -pix_fmt yuv420p \
  -preset medium \
  -crf 24 \
  -movflags +faststart \
  "$TEMP_OUTPUT"

for target in "${STATIC_TARGETS[@]}" "${VITE_TARGETS[@]}"; do
  mkdir -p "$(dirname "$target")"
  cp "$TEMP_OUTPUT" "$target"
  echo "Wrote $target"
done

echo "Hero video prepared successfully."
