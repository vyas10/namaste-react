# Note1: NPM
- Npm doesn't stand for node package manager. It does manages packages. It is the standard repository for all the packages.
- Its one of the biggest package managers.

# Note2: Git and Github are not the same thing
- Git is a version control system, while GitHub is a platform for hosting and collaborating on Git repositories.    
- Git is a tool that allows you to track changes in your code, while GitHub provides a web interface for managing those changes and collaborating with others.

# Note3: NPM does not stand for Node Package Manager
- NPM is a package manager but does not stand for Node Package Manager.
- It's one of the biggest package managers.

# Note4: Package.json
- Package.json is a configuration for NPM.
- It contains metadata about the project, such as its name, version, dependencies, and scripts.

# Note5: Bundlers
- Bundlers are tools that take your code and its dependencies and bundle them into a single file or a few files for deployment.
- eg: Webpack, Parcel, Vite, Rollup, etc.
- React uses webpack and Babel behind the scenes to build the project.

# Note6: Dev dependencies vs Dependencies
- Dependencies are packages that your project needs to run in production.
- Dev dependencies are packages that are only needed during development, such as testing frameworks or build tools.

# Note7: ^ & ~ in package.json
- The caret (^) and tilde (~) symbols in package.json are used to specify version ranges for dependencies.
- The caret (^) allows for minor version updates, while the tilde (~) allows for patch version updates.

# Note8: package-lock.json
- The package-lock.json file is automatically generated when you install packages using NPM.
- It contains a snapshot of the entire dependency tree, including the exact versions of all packages and their dependencies.
- This file ensures that the same versions of packages are installed across different environments, providing consistency and stability in your project.

# Note9: node_modules
- The node_modules directory is where NPM installs all the packages and their dependencies for your project.
- It contains all the code for the packages you have installed, as well as their dependencies.
- The node_modules directory can become quite large, so it's common to add it to your .gitignore file to prevent it from being committed to version control.

# Note10: Transitive dependencies
- Transitive dependencies are dependencies of your dependencies.

# Note11: NPX : Executing Packages
- npx is a command-line tool that comes with NPM and allows you to run packages without installing them globally.
- It is useful for running one-off commands or scripts without cluttering your global NPM installation.

# Note12: type="module" in <script> tag
- The type="module" attribute in the <script> tag indicates that the script should be treated as a JavaScript module.
- This allows you to use import and export statements in your JavaScript code, enabling modular programming and better organization of your codebase.

# Note13: Parcel
- Dev Build
- Local Server
- HMR: Hot Module Replacement - Allows you to update modules in a running application without a full reload.
- File Watching Algorithm: (Written in C++) Parcel uses a file watching algorithm to detect changes in your files and automatically rebuilds the application when changes are made.
- Caching: Faster builds by caching the results of previous builds.
- Image Optimization: Parcel automatically optimizes images and other assets for better performance.
- Minification & Bundling: Parcel automatically minifies and bundles your code for production, reducing file size and improving load times.
- Compression: Parcel can compress your assets to further reduce file size.
- Consistent Hashing: Parcel uses consistent hashing to ensure that the same file always has the same hash, which helps with caching and versioning.
- Code Splitting: Parcel supports code splitting, allowing you to split your code into smaller chunks that can be loaded on demand, improving performance and reducing initial load times.
- Differential Bundling: Parcel can create different bundles for different browsers, optimizing the code for each browser's capabilities.
- Tree Shaking: Parcel automatically removes unused code from your bundles, reducing file size and improving performance.