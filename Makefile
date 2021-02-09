.SILENT:

# Variables
include .env

# Help
help:
	echo
	echo "  $(ORG_NAME)/$(APP_NAME)"
	echo "  ------------------------------------------------------------"
	echo
	echo "  Description: "
	echo
	echo "    Org: $(ORG_NAME)"
	echo "    App: $(APP_NAME)"
	echo
	echo "  Commands: "
	echo
	echo "    help             - Show available commands"
	echo "    build            - Build the production environment"
	echo "    exec-php         - Exec into PHP container"
	echo
	echo

# Functions
define docker_build
	docker build \
		--build-arg DOCKER_IMAGE=$(DOCKER_IMAGE) \
		-f Dockerfile.prod \
		-t $(DOCKER_IMAGE)/${2}:${1} \
		${3}
endef

# Build docker images
build-prod:
	$(call docker_build,production,adeoweb-pwa-frontend,.)

# Commands
build: build-prod