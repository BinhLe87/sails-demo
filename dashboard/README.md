# Blockpass Developer page

## Installation
- Project is created with create-react-app, for more information please visit [crear-react-app readme](./CRA.md)
```bash
git clone ... / git pull
npm install
npm start
# website host at localhost:3000
```

## Project structure
```bash
/public     # static files, logos...
/src        # source codes for the whole project
	/container  # container classes, mostly used for website layout
		/drawer   # sidebar
		/footer   # footer
		/header   # header
	/states   # all mobx states
	/utils    # utility classes
	/views    # classes for displaying different views of the website

```

## Getting started
### Principles
- Make things tidy
- Make things simple
- Pull everytimes
- Commit soon, commit early
- Good commit message: describe what you done, for what reason
- Document & test right after you finish

### Adding mobx state

### Adding component

### Adding view
- Clone `/view/Template` folder to a new one, rename the files & classes
- Modify the code as you want
- If the new view is accessible from the Sidebar, add a new entry for it
```javascript
// ${PROJECT_DIR}/src/routes.js
// --- 
// new view accessible from Sidebar menu entry
...
{
    title: 'My new view title',
    icon: 'icon-name',
    url: 'route/to/my/new/view'
},
...
// new view accessible from Sidebar submenu entry
...
{
    title: 'Parent menu entry',
    icon: 'pie-chart',
    childs: [
        {
            title: 'My new view title',
            icon: 'icon-name',
            url: 'route/to/my/new/view'
        },
        ...
    ]
}
...
```