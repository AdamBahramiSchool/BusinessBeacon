TLDR; use this folder to put formatting functions i.e formatting api json data for UIs

The utils (short for "utilities") folder usually contains utility functions that are:

Generic: Functions that can be used across different parts of your application. They aren't tied to a specific business logic or component.

Pure: Ideally, utility functions should have no side effects. Given the same input, they should always return the same output.

Reusable: Functions that are used in multiple places across the application.

Examples of what you might find in a utils folder:

String manipulation functions.
Date format conversion functions.
Functions to work with local storage.
Calculations and math-related utility functions.
