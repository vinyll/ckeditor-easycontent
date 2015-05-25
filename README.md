# CKEditor easycontent injector plugin.

Works on CKEditor 4.x and probably others.

The plugin allows you to easily create an editor button that will insert your custom HTML or call your custom function.


## Installation

1. Download the content and insert it into your CKEditor plugins folder.
2. Add `easycontent` plugin to your configuration: `editor.config.extraPlugins = 'easycontent, …';
3. Define your `CKEDITOR.config.easycontent` buttons (see configuration below)
4. Add the buttons to your toolbar: `CKEDITOR.config.toolbar = [{name: 'My collection', items : ['Iframe', 'LineBreak', 'CustomHTML']}];`


## Configuration

You can create an array of buttons to add to the toolbar.
Each button has these properties:
- name: The name of the command and the button (the one to use in the toolbar configuration)
 - icon: The icon to use. Place them in the plugin folder or put an absolute path (starting with '/')
 - html: The HTML to insert or the function to call when the user clicks the button
 - title: Title that appears while hovering the button
 
### Example

```
CKEDITOR.config.easycontent =  [
    {
        name: 'LineBreak',
        icon: 'icon1.png',
        html: '<hr />',
        title: 'Insert a basic html content: a line break tag'
    },
    {
        name: 'CustomHTML',
        icon: 'icon2.png',
        html: function(editor) {
            return window.prompt("What code to you want to insert?");
        },
        title: 'A simple code prompter'
    },
    {
        name: 'Iframe',
        icon: 'icon3.png',
        html: function(editor) {
            var source = window.prompt('Insert the source of your iframe');
            if(!source) {
                return alert("You must specify an URL to create an Iframe");
            }
            return '<iframe src="'+source+'" width="100%" height="300"></iframe>';
        },
        title: 'A simple iframe creator'
    }
];
```

This configuration is simple yet powerful:

Adding the button like `CKEDITOR.config.toolbar = [{name: 'My collection', items : ['Iframe', 'LineBreak', 'CustomHTML']}];`.

You've just created powerful custom plugins-like buttons:
- `LineBreak` will insert a `<hr />` tag on click
- `CustomHTML` will prompt for some HTML code or text to insert into the editor
- `Iframe` is nothing less than an iframe editor


## Notes

I am not CKEditor expert (nor actually a user).
If anything seems fuzzy in the code, just fork/report/pull-request/email.


## Credits

This plugin is strongly inspired from [the ckeditor htmlbuttons plugin](http://ckeditor.com/addon/htmlbuttons)


