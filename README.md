<!--
 Copyright (c) 2022 aiocat

 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

# Totify

Notification library for browser.

## Why?

- We don't need to use a library for specific frameworks only for notifications.
- This package is works on browser without any setup. Just add script to your HTML file and done.
- The package itself is also lightweight. And totify doesn't need a setup. Importing is enough.
- I always try to keep usage simple as possible.
- Notifications are customizable, Edit `#TOTIFY_NOTIFICATIONS` (eg. `#TOTIFY_NOTIFICATIONS div`) container with CSS.

## CDN(s)

- https://cdn.jsdelivr.net/gh/aiocat/tofity@0.0.1/dist/index.min.js

## Example

```js
Totify.init("LEFT", "BOTTOM"); // Initialize tofity
Totify.info("Update avaible. Please update your system."); // An info notification
Totify.error("Unexcepted Error"); // An error notification
Totify.success("Account Created"); // A success notification
Totify.warn("Changes may be lost"); // A warn notification
```
