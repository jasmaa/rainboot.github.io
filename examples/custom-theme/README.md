# Custom Theme Demo

Rainboot is compatible with Cloudscape's custom theming. This demo shows how to
build a custom rainboot.css theme using a custom Cloudscape theme that replaces
all fonts with Comic Sans.

## Getting Started

Install deps and build theme:

```
yarn install
yarn build
```

Generate link:

```
cd build/design-tokens
yarn link
```

## Installing Theme

Go to repo root and link in Rainboot:

```
yarn link "@cloudscape-design/design-tokens"
```

Rebuild Rainboot with new design tokens:

```
yarn build
```

## Uninstalling Theme

To uninstall the custom theme, unlink the theme and rebuild Rainboot in the repo
root:

```
yarn unlink "@cloudscape-design/design-tokens"
yarn add @cloudscape-design/design-tokens
yarn build
```