COMPOSE = docker-compose -f docker-compose.dev.yml

up:
	$(COMPOSE) up --build -d

down:
	$(COMPOSE) down

logs:
	$(COMPOSE) logs -f

reload:
	$(COMPOSE) restart browsersync
