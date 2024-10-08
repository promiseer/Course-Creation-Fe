## Overview

This document outlines our Git flow strategy to ensure a smooth development process and maintain the integrity of our production environment.

### Branching Strategy

1. **Main Branch (`main`)**
   - This branch is reserved for the **live production site**.
   - No direct merges or commits should be made to this branch without proper approval and testing.
   - Only code that has been thoroughly reviewed and tested in the staging environment should be merged into the `main` branch.

2. **Staging Branch (`staging-branch`)**
   - This branch is used for the **staging environment**.
   - All feature branches should be checked out from this branch.
   - Code changes can be merged into the `staging-branch` branch for testing and validation before being promoted to production.

3. **Feature Branches**
   - Feature branches should be created for new features, bug fixes, or enhancements.
   - Naming convention: Use descriptive names for your feature branches, prefixed by `feature/`, for example: `feature/user-authentication`.

### Workflow

1. **Creating a Feature Branch**
   - Always checkout a new feature branch from the `staging-branch` branch:
     ```bash
     git checkout staging-branch
     git pull origin staging
     git checkout -b feature/your-feature-name
     ```

2. **Developing Your Feature**
   - Work on your feature in the created branch. Make sure to commit your changes frequently.
   - DO NOT CREATE SUBFOLDERS OF YOUR NAME. You are on your own branch, so you won't mess up on other branches.

3. **Testing Your Changes**
   - Once your feature is complete, tell your supervisor.

4. **Merging into Staging**
   - When your feature is ready to be tested in the staging environment, merge your feature branch back into `staging-branch`:
     ```bash
     git checkout staging
     git pull origin staging
     git merge feature/your-feature-name
     ```
   - Push the updated `staging-branch` branch:
     ```bash
     git push origin staging
     ```

### Important Notes
- Always ensure that your feature branch is up to date with the `staging-branch` branch to avoid conflicts during the merge.
- Review and testing are crucial before merging into `staging-branch` to maintain the stability of the staging environment.

### Conclusion
Following this Git flow strategy will help us manage our codebase efficiently and ensure that we deliver a stable product to our users. If you have any questions or need clarification, please reach out to the team.
