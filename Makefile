# Основные команды проекта

.PHONY: install dev build preview lint test clean

# Установка зависимостей
install:
	npm install

# Запуск в режиме разработки
dev:
	npm run dev

# Сборка проекта
build:
	npm run build

# Просмотр production версии
preview:
	npm run preview

# Проверка кода
lint:
	npm run lint

# Запуск тестов
test:
	npm run test

# Анализ кода SonarQube
sonar:
	npx sonar-scanner

# Анализ неиспользуемого кода
knip:
	npx knip

# Очистка
clean:
	rm -rf node_modules dist coverage

# Полная переустановка
reinstall: clean install

# Проверка всего
check: lint test build

# Запуск всего цикла
all: install build
