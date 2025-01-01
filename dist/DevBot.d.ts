interface DevBotProps {
    apiKey: string;
    title: string;
}
declare global {
    interface Window {
        DevBot: new (apiKey: string, title: string) => void;
    }
}
export declare function DevBot({ apiKey, title }: DevBotProps): null;
export {};
