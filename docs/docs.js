
const dynamicSelect = (function() {

    let _selector = document.createElement('select');
    let _headers = document.querySelectorAll('h2, h3');

        // Selector Title:
        let _option = document.createElement('option');
            _option.value = '';
            _option.innerHTML = 'customSelect';
        _selector.appendChild(_option);

        // Items:
        Array.from(_headers).forEach((el, i) => {

            let _level = parseInt(el.tagName.match(/\d+/)[0], 10) - 2;

            let _option = document.createElement('option');
                _option.value = el.id;
                _option.innerHTML = ((_level) ? '— ' : '&rsaquo; ') + el.textContent;

            _selector.appendChild(_option);
        });

        _selector.addEventListener("change", function(e) {

            let _val = e.target.options[e.target.options.selectedIndex].value;
            window.location.hash = _val;
        });

    document.querySelector('nav').appendChild(_selector);

})();

hljs.initHighlightingOnLoad();
customSelect();
