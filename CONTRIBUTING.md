# Contributing to Native Motion

First off, thank you for considering contributing to Native Motion! We're excited to build a vibrant community around creating beautiful and performant React Native UI components. Your contributions, whether big or small, are highly valued.

This document provides guidelines for contributing to Native Motion. Please read it carefully to ensure a smooth and effective collaboration process.

## Code of Conduct

All contributors are expected to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). Please make sure you are familiar with its contents. We are committed to fostering an open and welcoming environment.

## How Can I Contribute?

There are many ways you can contribute to Native Motion:

*   **Reporting Bugs:** If you find a bug in a component or the documentation site, please open an issue.
*   **Suggesting Enhancements:** Have an idea for a new feature, a new component, or an improvement to an existing one? Open an issue to discuss it.
*   **Improving Documentation:** Clear documentation is crucial. If you find areas that can be improved, or if you want to add examples, please submit a pull request.
*   **Submitting New Components:** We welcome well-crafted, performant, and aesthetically pleasing React Native components.
*   **Code Contributions:** Help us fix bugs or implement new features for existing components or the documentation site.
*   **Providing Feedback:** Share your experience using Native Motion components.

## Getting Started (Development Setup)

Our primary focus for direct code contributions will be on new React Native components and improvements to the documentation site.

**Documentation Site (Next.js):**

If you wish to contribute to the documentation site itself (e.g., improving layout, fixing typos, adding examples to MDX files):

1.  **Fork the Repository:** Click the "Fork" button at the top right of the [Native Motion GitHub page](https://github.com/your-username/native-motion).
2.  **Clone Your Fork:** `git clone https://github.com/YOUR_USERNAME/native-motion.git`
3.  **Navigate to Project Directory:** `cd native-motion`
4.  **Install Dependencies:** We use `pnpm` (but specify if you use `npm` or `yarn` primarily for the docs site).
    ```bash
    pnpm install
    ```
5.  **Run the Development Server:**
    ```bash
    pnpm run dev
    ```
    This will start the Next.js development server, typically at `http://localhost:3000`.
6.  **Create a New Branch:** For your changes:
    ```bash
    git checkout -b feature/my-docs-improvement
    ```
7.  Make your changes to the documentation files (often located in `contents/docs/` or similar, in MDX format).

**React Native Components (Focus on Copy-Paste):**

Since Native Motion focuses on providing copy-pasteable components, direct contributions of new React Native components will primarily involve:

1.  **Developing the component in your own React Native environment (Expo or CLI).**
2.  **Ensuring it meets our quality and performance standards (see below).**
3.  **Preparing a clear code snippet and documentation for submission.**

We don't currently have a separate "component library" package to contribute to directly. Instead, contributions will be integrated into our documentation site.

## Guidelines for Component Contributions

If you're submitting a new React Native component or improvements to an existing one, please adhere to the following guidelines:

*   **Performance:** Components must be performant, primarily leveraging `react-native-reanimated` for animations to ensure they run on the native thread. Avoid unnecessary re-renders.
*   **Lightweight:** Strive for minimal dependencies and a small footprint.
*   **API Design:** Props should be clear, well-named, and provide sensible defaults.
*   **Styling:** Components should be easily stylable or themable. While we provide an aesthetic, users should be able to adapt them. (Specify if you have a preferred styling approach, e.g., pass `style` props, use specific theme variables).
*   **TypeScript:** Components should be written in TypeScript with clear type definitions for props.
*   **Cross-Platform:** Aim for good behavior on both iOS and Android.
*   **Accessibility (a11y):** Consider accessibility best practices (e.g., `accessibilityLabel`, `accessibilityRole`).
*   **Documentation:**
    *   Provide a clear description of the component and its purpose.
    *   List all available props with their types, default values, and descriptions.
    *   Include a simple, copy-pasteable usage example.
    *   Mention any peer dependencies (e.g., `react-native-reanimated`, `react-native-gesture-handler`).
*   **No External UI Kits (unless essential):** Components should generally be self-contained or rely on common React Native primitives and widely accepted animation/gesture libraries.

## Submission Process for New Components or Significant Changes

1.  **Open an Issue First (Highly Recommended):**
    *   Before starting significant work on a new component or a major refactor, please [open an issue](https://github.com/your-username/native-motion/issues/new/choose) to discuss your idea.
    *   This allows us to provide feedback, ensure it aligns with the project's goals, and avoid duplicated effort.
    *   Describe the component, its features, and its potential value to the community.

2.  **Develop Your Component/Feature:**
    *   Create your component in your local React Native development environment.
    *   Test it thoroughly on both iOS and Android.

3.  **Prepare Your Submission:**
    *   **Code Snippet:** The clean, copy-pasteable code for your React Native component.
    *   **Documentation (MDX format preferred):**
        *   Create an MDX file similar to our existing component documentation.
        *   Include a live preview if possible (e.g., using a Snack embed, a GIF, or a simple React Native Web preview if applicable to our docs setup).
        *   Follow the documentation guidelines mentioned above.
    *   **Pull Request:**
        *   If you've modified the documentation site to include your new component's docs, fork the main Native Motion repository, create a branch, add your MDX file and any supporting assets, and then open a Pull Request.
        *   In your Pull Request description, link to the issue you opened (if any).
        *   Clearly describe your component and the changes you've made.
        *   If your component is complex, provide steps for how we can test it or see it in action.

## Styleguides

*   **Code Style:** We use Prettier and ESLint for code formatting and linting (for the documentation site). Please ensure your contributions to the docs site adhere to these standards (usually by running `pnpm lint --fix` or `pnpm format`). For React Native component snippets, maintain clean, readable, and conventional React/TypeScript styling.
*   **Commit Messages:** Please follow [Conventional Commits](https://www.conventionalcommits.org/) if possible (e.g., `feat: Add SuperButton component`, `fix: Correct animation timing in PulseButton`, `docs: Update IconButton examples`). This is not strictly enforced but highly encouraged.

## Pull Request Process

1.  Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2.  Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.
3.  Increase the version numbers in any example files and the README.md to the new version that this Pull Request would represent. The Zeffective versioning scheme we use is [SemVer](http://semver.org/).
4.  Your PR will be reviewed by a maintainer. We aim to provide feedback within [e.g., a few days, one week].
5.  We may ask for changes or improvements. Please be responsive to feedback.
6.  Once approved, your PR will be merged!

## Community Components Section

We are excited to feature components developed by the community!

*   If you have a component you'd like to share that aligns with Native Motion's quality and style, please open an issue with the "Community Component Submission" label (or similar).
*   Provide a link to a repository or Gist containing your component code and a brief description.
*   If accepted, we will work with you to get it showcased in the "Community" section of our documentation site, with clear attribution to you as the author.
*   Maintenance of community components primarily remains the responsibility of the original author, but we encourage collaboration.

## Questions?

If you have any questions about contributing, feel free to open an issue or reach out to us on [mention your preferred communication channel if you have one, e.g., a Discord server, Twitter].

Thank you for helping make Native Motion awesome!