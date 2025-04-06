# React + Vite

```
  const axiosPublic = useAxiosPublic();

  const { data: detailArticle = [] } = useQuery({
    queryKey: ['detailArticle'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/news/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

```
```
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  ```


### vs code er configure
```
{
    "editor.fontSize": 22,
    "editor.tabSize": 2,
    "editor.wordWrap": "on",
    "editor.cursorSmoothCaretAnimation": "off",
    "editor.cursorBlinking": "expand",
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true,
    "editor.formatOnType": true,
    "editor.tokenColorCustomizations": {
        "comments": "#95afc0"
    },

    "editor.linkedEditing": true,
    "editor.bracketPairColorization.enabled": true,
    "editor.guides.bracketPairs": true,
    "editor.guides.bracketPairsHorizontal": true,
    "editor.hover.enabled": true,
    "terminal.integrated.defaultProfile.windows": "Git Bash",
    "terminal.integrated.fontSize": 20,
    "diffEditor.wordWrap": "on",
    "security.workspace.trust.untrustedFiles": "open",
    "editor.defaultFormatter": null,
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    // Screencast Mode
    "screencastMode.mouseIndicatorColor": "#f1c40f",
    "screencastMode.verticalOffset": 0,
    // Enable Emmet support for JSX
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },
    "workbench.colorTheme": "Learn with Sumit Theme - Dracula version",
    "editor.stickyScroll.enabled": false,
    "json.schemas": [],
    "github.copilot.editor.enableAutoCompletions": true,
    "terminal.integrated.env.windows": {},
    "files.autoSave": "onFocusChange",
    "diffEditor.hideUnchangedRegions.enabled": true,
    "chat.editor.wordWrap": "on",
    "notebook.output.wordWrap": true,
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
  
}
```