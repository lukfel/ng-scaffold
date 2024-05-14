#!/bin/bash

# Function to increment the patch version in package.json
bump_version() {
  current_version=$(node -p "require('./package.json').version")
  new_version=$(npm version patch --no-git-tag-version)
  echo "Bumping version from $current_version to $new_version"
}

# Main script execution starts here
npm run lint      # Lints and formats the code based on the .eslintrc.json
if [ $? -ne 0 ]; then
  echo "Linting failed. Aborting release."
  exit 1
fi

npm run test      # Runs all defined unit tests (currently no real tests)
if [ $? -ne 0 ]; then
  echo "Tests failed. Aborting release."
  exit 1
fi

npm run build     # Builds the application in production environment
if [ $? -ne 0 ]; then
  echo "Build failed. Aborting release."
  exit 1
fi

bump_version      # Bump the version number in the package.json
if [ $? -ne 0 ]; then
  echo "Version bump failed. Aborting release."
  exit 1
fi

npm run build     # Builds the application in production environment
if [ $? -ne 0 ]; then
  echo "Build failed."
  exit 1
fi

npm run deploy    # Deploy the application
if [ $? -ne 0 ]; then
  echo "Deploy failed."
  exit 1
fi

# Stage, commit and push all changes including the new version number
git add .
git commit -m "create release $(node -p "require('./package.json').version")"
git push

# Keep the console open until you press Enter
read -p "Release process completed. Press Enter to exit..."
