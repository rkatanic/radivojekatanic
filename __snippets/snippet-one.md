---
title: "Snippet One"
description: "Snippet description text"
---

```javascript
const hanleThemeToggle = (): void => {
  setIsDarkMode((prevState: boolean): boolean => {
    const isDarkModeActive = !prevState;
    localStorage.setItem("isDarkMode", isDarkModeActive.toString());

    if (isDarkModeActive) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    return isDarkModeActive;
  });
};
```
