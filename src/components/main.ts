import type { App } from 'vue';
import { HelloWorld, BaseButton } from "@/components";

export default {
    install: (app: App) => {
        app.component('HelloWorld', HelloWorld);
        app.component('MyButton', BaseButton);
    }
};

export { HelloWorld, BaseButton };