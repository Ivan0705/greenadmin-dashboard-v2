#!/bin/bash

# Рекурсивно создать index.ts
create_indexes() {
  local dir=$1
  
  for subdir in "$dir"/*/; do
    if [ -d "$subdir" ] && [ "$(basename "$subdir")" != "node_modules" ]; then
      create_indexes "$subdir"
    fi
  done
  
  # Создать index.ts, если есть .tsx файлы
  if ls "$dir"/*.tsx 2>/dev/null | head -1 | grep -q .; then
    local index_file="$dir/index.ts"
    > "$index_file"
    
    for file in "$dir"/*.tsx; do
      local basename=$(basename "$file" .tsx)
      if [ "$basename" != "index" ]; then
        echo "export { default as $basename } from \"./$basename\";" >> "$index_file"
      fi
    done
    
    echo "✅ $index_file"
  fi
}

create_indexes src/entities
create_indexes src/features
create_indexes src/widgets
create_indexes src/shared/ui

echo "🎉 Готово!"
