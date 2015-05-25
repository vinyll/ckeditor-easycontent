CKEDITOR.plugins.add('easycontent', {

	init: function(editor) {
		var buttonsConfig = editor.config.easycontent;
		if (!buttonsConfig) {
			return;
		}

		function createCommand(definition) {
			return {
				exec: function(editor) {
					if(typeof(definition.html) === 'function') {
						editor.insertHtml(definition.html(editor));
					}
					else {
						editor.insertHtml(definition.html);
					}
				}
			};
		}

		// Create the command for each button
		buttonsConfig.forEach(function(button, i) {
			var icon = button.icon;
			var command = button.name;
			editor.addCommand(command, createCommand(button, editor));
			editor.ui.addButton(command, {
				label: button.name,
				command: command,
				icon: icon.substr(0, 1) === '/' ? icon : this.path + icon
			});
		});
	}
});
