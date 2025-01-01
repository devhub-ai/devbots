'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function DevBot(_a) {
    var apiKey = _a.apiKey, title = _a.title;
    var devBotRef = react.useRef(null);
    react.useEffect(function () {
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/devhub-ai/cdns@master/devbot-chatbot.js';
        script.async = true;
        script.crossOrigin = 'anonymous';
        script.onerror = function (error) {
            console.error('Error loading DevBot script:', error);
        };
        script.onload = function () {
            try {
                if (window.DevBot) {
                    devBotRef.current = new window.DevBot(apiKey, title);
                }
                else {
                    console.error('DevBot not found in window object');
                }
            }
            catch (error) {
                console.error('Error initializing DevBot:', error);
            }
        };
        document.body.appendChild(script);
        return function () {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
            if (devBotRef.current) {
                devBotRef.current = null;
            }
        };
    }, [apiKey, title]);
    return null;
}

exports.DevBot = DevBot;
//# sourceMappingURL=index.js.map
