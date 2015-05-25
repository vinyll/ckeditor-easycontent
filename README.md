# CKEditor easycontent injector plugin.

Works on CKEditor 4.x and probably others.

The plugin allows you to easily create an editor button that will insert your custom HTML or call your custom function.

[View demo](http://vinyll.github.io/ckeditor-easycontent)

## Installation

1. Download to your plugins folder or use `plugins.addExternal` to add _easycontent_  plugin.
2. Add _easycontent_ plugin to your configuration: `editor.config.extraPlugins = 'easycontent';
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
    CKEDITOR.replace('editor', {
      // Activate easycontent plugin
      extraPlugins: 'easycontent',
      // Add 'Iframe' button
      toolbar: [['Bold', 'Italic'], ['Iframe']],
      // Define buttons and their action
      easycontent: [
        {
          name: 'Iframe',
          title: 'A simple iframe creator',
          icon: '/my/path/to/my/iframe-icon.png',
          html: function(editor) {
              var source = window.prompt('Insert the source of your iframe');
              if(!source) {
                  return alert("You must specify an URL to create an Iframe");
              }
              return '<iframe src="'+source+'" width="100%" height="300"></iframe>';
          }
        }
      ]
    });
```

This configuration is simple yet powerful:

Adding the button like `CKEDITOR.config.toolbar = [['Iframe']];`

You've just created powerful custom Iframe generator buttons!

See [the demo page](http://vinyll.github.io/ckeditor-easycontent/) for further examples.


## Notes

I am not CKEditor expert (nor actually a user).
If anything seems fuzzy in the code, just fork/report/pull-request/email.


## Credits

This plugin is strongly inspired from [the ckeditor htmlbuttons plugin](http://ckeditor.com/addon/htmlbuttons)


