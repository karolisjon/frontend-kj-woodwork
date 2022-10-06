# React project conventions

## Project structure
  * src/
    * components/ - components used in more than one page
    * pages/ - website pages
    * styles/ - files for themes, mixins and CSS

## File naming
  * kebab-case for all files
  * React files must have *.jsx extension
  * Helper files must have *.js extensions

## Styling
  * use theme variables if possible
  * common components are placed in ./src/components folder
  * if component is used only in a single page, then it must be saved in that page's folder 'components/'
  * if component uses more than 4 CSS props, it should be segregated into a component

  ## CSS property order
    * Positioning
    * Display and complementary props
    * Dimensions
    * Box-Model
    * Color
    * Text
    * Other
}

## file importing
  use in all jsx files:
```
  import * as React from 'react';
```
  ### order
    * global files
    * components
    * helpers
    * assets
