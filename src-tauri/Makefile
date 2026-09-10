# Default target directory for build outputs
DIST_DIR ?= ./dist-out
BUILDER_STAGE ?= export

.PHONY: all build clean run

# Default rule: builds and exports the AppImage to $(DIST_DIR)
all: build

build:
	@mkdir -p $(DIST_DIR)
	podman build --target $(BUILDER_STAGE) --output $(DIST_DIR) .

# Utility task to launch the generated AppImage
run:
	@APP=$$(find $(DIST_DIR) -maxdepth 2 -name "*.AppImage" | head -n 1); \
	if [ -z "$$APP" ]; then \
		echo "Error: No AppImage found in $(DIST_DIR). Run 'make' first."; \
		exit 1; \
	fi; \
	echo "Running $$APP..."; \
	chmod +x "$$APP" && "$$APP"

# Utility task to clean up built artifacts
clean:
	rm -rf $(DIST_DIR)
