DOCKER_REGISTRY = docker.io
IMAGE_NAME = botkit-example-plugins
IMAGE_VERSION = latest
IMAGE_TAG = $(DOCKER_REGISTRY)/flaccid/$(IMAGE_NAME):$(IMAGE_VERSION)

WORKING_DIR := $(shell pwd)

.DEFAULT_GOAL := compile

.PHONY: build push

release:: build push

push::
		@docker push $(IMAGE_TAG)

build::
		@docker build -t $(IMAGE_TAG) $(WORKING_DIR)

test::
		@npm run eslint
