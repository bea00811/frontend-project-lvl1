install: npm ci

# Добавили в Makefile команду

brain-games: node bin/brain-games.js 

# Добавили в Makefile команду  npm publish --dry-run
publish: npm publish --dry-run
