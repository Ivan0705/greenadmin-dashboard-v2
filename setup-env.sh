#!/bin/bash

# Скрипт для настройки окружения
echo "Setting up environment..."

# Копировать .env.example в .env
if [ ! -f .env ]; then
  cp .env.example .env
  echo "✅ Created .env from .env.example"
  echo "⚠️  Don't forget to update values in .env"
else
  echo "ℹ️  .env already exists"
fi

# Создать .env.local для разработки
if [ ! -f .env.local ]; then
  cp .env.example .env.local
  echo "✅ Created .env.local"
fi

echo "Done!"
