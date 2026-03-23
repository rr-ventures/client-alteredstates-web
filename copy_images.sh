#!/bin/bash

ASSETS_DIR="src/brand/assets"

# Define target directories
TARGETS=(
  "apps/ahana/img"
  "apps/meditative/images"
  "apps/yoga/images"
  "apps/yogalax/images"
  "apps/zogin/img"
)

# Define mappings
declare -A MAPPINGS=(
  ["611185010_17992576616911758_6359808428520505471_n.jpg"]="hero.jpg"
  ["609859673_17992144829911758_3627750128898244285_n.jpg"]="retreat-1.jpg"
  ["610195304_17992334459911758_6541602778669642153_n.jpg"]="retreat-2.jpg"
  ["620417633_17994215384911758_1499016141491528773_n.jpg"]="retreat-3.jpg"
  ["609498552_17992334450911758_7260561423754856278_n.jpg"]="events-1.jpg"
  ["612405873_17993039429911758_2395989327158954337_n.jpg"]="events-2.jpg"
  ["620500103_17994215375911758_7984306465112398357_n.jpg"]="events-3.jpg"
  ["587559784_17990523992911758_7449764443645668391_n.jpg"]="gene.jpg"
  ["590422979_17990325833911758_5591702416302999544_n.jpg"]="joshua.jpg"
  ["600820150_17990422193911758_1000555469359433895_n.jpg"]="clara.jpg"
  ["612397448_17993039438911758_7429263740297513285_n.jpg"]="gallery-1.jpg"
  ["610195304_17992334459911758_6541602778669642153_n (1).jpg"]="gallery-2.jpg"
  ["612140471_17992465088911758_4226749362652590923_n.jpg"]="gallery-3.jpg"
)

for target in "${TARGETS[@]}"; do
  echo "Copying to $target..."
  mkdir -p "$target"
  for src in "${!MAPPINGS[@]}"; do
    dest="${MAPPINGS[$src]}"
    cp "$ASSETS_DIR/$src" "$target/$dest"
  done
done

echo "Done."
