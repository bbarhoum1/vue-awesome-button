import { DefineComponent } from 'vue';

export interface HelloWorldProps {
  msg: string;
}

declare const HelloWorld: DefineComponent<HelloWorldProps>;
export default HelloWorld;