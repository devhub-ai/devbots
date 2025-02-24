# DevBots
![NPM Version](https://img.shields.io/npm/v/devbots)
![NPM Downloads](https://img.shields.io/npm/d18m/devbots)
![npm package minimized gzipped size](https://img.shields.io/bundlejs/size/devbots)
![NPM Type Definitions](https://img.shields.io/npm/types/devbots)


Your go-to solution for creating and integrating chatbots seamlessly into your websites and applications.
Devbots can be used from [devbots.vercel.app](https://devbots.vercel.app) and also available as [CLI](https://devbots.vercel.app/docs/cliInstallation) tool to create your prompted chatbot and easy integration into your websites.

## Get API Key

To customize your devbot:

1. Go to [devbots.vercel.app](https://devbots.vercel.app)
2. Sign in to your account and navigate to dashboard
3. Configure your prompt with title,logo and description
4. Copy your API key
5. Integrate the DevBot component in your application

For more information explore DevBots [Docs](https://devbots.vercel.app/docs/devbots)

## Installation

1. npm

    ```bash
    npm i devbots
    ```
2. pnpm

    ```bash
    pnpm add devbots
    ```
3. yarn

    ```bash
    yarn add devbots
    ```
4. bun

    ```bash
    bun add devbots
    ```

### Props

| Prop | Type | Description | Required
|-----|-----|-----|-----
| apiKey | string | Your DevBots API key | Yes
| title | string | Chat widget title | Yes

### Example Usage

1. React
    ```javascript
    import { DevBot } from 'devbots';

    function App() {
      return (
        <div>
          <DevBot 
            apiKey="API_KEY"
            title="TITLE"
          />
        </div>
      );
    }
    ```
    Example File : [App.tsx](./examples/React/src/App.tsx)<br/>
    Deployed Link : [devbots-example-react](https://devbots-example-html.netlify.app)

2. Html
    ```javascript
    <script src="https://cdn.jsdelivr.net/gh/devhub-ai/cdns@master/devbots-chatbot.js"></script>
    <script>
      document.addEventListener('DOMContentLoaded', function () {
        new DevBot('API_KEY', 'TITLE');
      });
    </script>
    ```
    Example File : [index.html](./examples/Html/index.html)<br/>
    Deployed Link : [devbots-example-html](https://devbots-example-html.netlify.app)
  
## CLI

### Installation

```bash
npm i -g devbots
```

### Commands

1. help

    ```bash
    devbots help
    ```
    - It will show you available commands.

2. create devbot

    ```bash
    devbots create "title" "prompt"
    ```
    - It will generate an `API_KEY`.

3. chat with devbot

    ```bash
    devbots chat "API_KEY" "query"
    ```


## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](./LICENSE) file for details.

## Support and Contribution

Need help? Visit our [documentation](https://devbots.vercel.app/docs/get-started) or [contact us](https://devbots.vercel.app/contact).

We welcome contributions! Please feel free to submit a Pull Request.
