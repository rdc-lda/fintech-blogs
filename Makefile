TAG = $(shell git describe --tags --always)
PREFIX = rdclda
REPO_NAME = fintech-blogs-webserver

all: push

container: image

image:
	# Build new image and automatically tag it as latest
	docker build -t $(PREFIX)/$(REPO_NAME) .
	
	# Add the version tag to the latest image	
	docker tag $(PREFIX)/$(REPO_NAME) $(PREFIX)/$(REPO_NAME):$(TAG)

	# Print local usage instruction
	@echo
	@echo "To run the container: docker run --rm --name $(REPO_NAME) -d -p 8080:80 $(PREFIX)/$(REPO_NAME):$(TAG)"
	@echo

push: image
	# Push image tagged as latest to repository
	docker push $(PREFIX)/$(REPO_NAME)

	# Push version tagged image to repository 
	#  -- since this image is already pushed it will simply create or update version tag
	docker push $(PREFIX)/$(REPO_NAME):$(TAG)

clean:
	# Cleanup any file not checked in the repo anyway...
	rm -Rf ./node_modules ./dist