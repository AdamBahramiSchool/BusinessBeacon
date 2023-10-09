TLDR; Each of the views or pages in our app are here. Each component in this folder represents a top-level view that corresponds to a route or a page in our application.

_Structure and Naming_
Every component inside this directory should represent a full page.
File and component names should be descriptive of the page's main content or functionality.
Avoid generic names like Page1.js. Instead, opt for more descriptive names like UserProfile.js.

_Best Practices_
State and Logic: Pages should primarily be responsible for layout and routing logic. Try to keep business logic, state management, and data fetching in dedicated hooks, contexts, or external modules.

Imports: Prefer named imports over default imports to make the codebase more consistent and refactoring easier.

Styles: If a page requires styling, place the associated CSS (or SCSS, LESS, etc.) file in a styles subfolder within the pages directory. The styling filename should mirror the component's name. For example, UserProfile.js should have associated styles in styles/UserProfile.css.
