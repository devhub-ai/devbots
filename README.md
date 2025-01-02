# DevBots
Your go-to solution for creating and integrating chatbots seamlessly into your websites and applications.

### Get API Key

To customize your devbot:

1. Go to [devbots.vercel.app](https://devbots.vercel.app)
2. Sign in to your account and navigate to dashboard
3. Configure your prompt with title,logo and description
4. Copy your API key
5. Integrate the DevBot component in your application

For more information explore DevBots [Docs](https://devbots.vercel.app/docs/devbots)

### Installation

```bash
npm i devbots
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
    Deployed Link : 

2. Html
    ```javascript
    <script src="https://cdn.jsdelivr.net/gh/devhub-ai/cdns@master/devbots-chatbot.js"></script>
    <script>
      document.addEventListener('DOMContentLoaded', function () {
        new DevBot('API_KEY', 'TITLE');
      });
    </script>
    ```
    Example File : [index.html](./examples/Html/index.html)
    Deployed Link : 

### License

This project is licensed under the Apache License 2.0 - see the [LICENSE](./LICENSE) file for details.

### Support

Need help? Visit our [documentation](https://devbots.vercel.app/docs/get-started) or [contact us](https://devbots.vercel.app/contact).

### Contribution

We welcome contributions! Please feel free to submit a Pull Request.
