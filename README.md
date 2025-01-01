<div style="display: flex; align-items: center; gap: 20px;">
  <a href="https://www.npmjs.com/package/devbots">
    <img src="https://i.ibb.co/Qc6T9mp/logo.png" width="100px" alt="Universal Box Logo">
  </a>
  <div>
    <h1 style="margin: 0;">DevBots</h1>
    <p style="margin: 0;">Your go-to solution for creating and integrating chatbots seamlessly into your websites and applications.</p>
  </div>
</div>

## 📖 Props

| Prop | Type | Description | Required
|-----|-----|-----|-----
| apiKey | string | Your DevBots API key | Yes
| title | string | Chat widget title | Yes


## 🛠️ Development

To customize your chatbot:

1. Go to [devbots.vercel.app](https://devbots.vercel.app)
2. Sign in to your account and navigate to dashboard
3. Configure your prompt and settings
4. Copy your API key
5. Integrate the DevBot component in your application


## 💡 Example Usage

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

2. Html
    ```javascript
    <script src="https://cdn.jsdelivr.net/gh/devhub-ai/cdns@master/devbots-chatbot.js"></script>
    <script>
      document.addEventListener('DOMContentLoaded', function () {
        new DevBot('API_KEY', 'TITLE');
      });
    </script>
    ```

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](./LICENSE) file for details.

## 🤝 Support

Need help? Visit our [documentation](https://devbots.vercel.app/docs/get-started) or [contact us](https://devbots.vercel.app/contact).

## 🌟 Contributing

We welcome contributions! Please feel free to submit a Pull Request.
