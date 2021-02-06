# auto-resize-custom-select

> Auto-resize the width of a `select` element based on the size of the current selected `option`.
Fully customizable with CSS without the common styling limitations of a `select` element.

**customSelect**. Auto resizes drop-down `select` html elements to fit the size of the option that has been selected. It also gives you total freedom and control to style the list selector with CSS without the usual constraints on this form elements.
It creates a substitute `span` element with the `.custom-select` class, which contains two children `span` elements, with the selection value (`.selection`) and the expand figure (`.arrow`) that you can stylize as you wish.

```html
<!-- Generated markup from the <select/> element -->
<span class="custom-select">
    <span class="selection">value</span>
    <span class="arrow">[::after]</span>
</span>
```


## Usage

Include the script on your document and call the `customSelect` function

```html
    ...
    <select>
        <option value="1">un</option>
        <option value="2">deux</option>
        <option value="3">trois</option>
    </select>
    ...
    <script src="../path/to/dist/auto-resize-custom-select.js"></script>
    <script>
        customSelect();
    </script>
</body>
</html>
```


## Options

You can set some options by passing an object as parameter to overwrite the default values:

```javascript
customSelect({
    el: 'select',
    className: 'custom-select',
    expandChar: '\u25BE',
    width: false
});
```

### `el`

A css selector that'll pick the elements you want to be affected by the script. It defaults to **`select`** in order to take all the `&lt;select&gt;` elements.

### `className`

Name of the `class` that will adopt the substitute parent element. Its default name is `custom-select`. The element tree to style then result as follows:

```css
.custom-select {} /* Container Element */
.custom-select .selection {} /* span containing the selected option */
.custom-select .arrow {} /* span containing the expand element (arrow) */
.custom-select .arrow:after {} /* - it's created using the :after pseudo-element */
```

### `expandChar`

The expand character created via `content` in the `:after` pseudo-element. The default value is the CSS ISO Code `\u25BE` ( _Black down-pointing small triangle_ )

### `width`

When set to `false` (default) it will resize itself to the width of the selected option. When set to a valid css dimension value, it will have a fixed size.


## Development

```sh
# Source: /src/customSelect.js

# Clone the repo
$ git clone https://github.com/alterebro/auto-resize-custom-select.git
$ cd auto-resize-custom-select/

# Install dependencies
$ npm install

# Build (/dist)
$ npm run build
```

## License

[MIT](https://github.com/alterebro/auto-resize-custom-select/blob/main/LICENSE) © Jorge Moreno. [@alterebro](https://twitter.com/alterebro)
