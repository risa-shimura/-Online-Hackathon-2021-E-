COMPOSE_LOCAL := docker-compose.yml

build-loc:
	docker-compose -f $(COMPOSE_LOCAL) build

loc:
	@make build-loc
	docker-compose -f $(COMPOSE_LOCAL) up

exec:
	docker-compose -f $(COMPOSE_LOCAL) exec web bash

exec-db:
	docker-compose -f $(COMPOSE_LOCAL) exec db bash

down:
	docker-compose -f $(COMPOSE_LOCAL) down

cleanup:
	- docker rm -f `docker ps -aq`
	docker system prune -af
