import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    containerMaxWidth: string;

    colors: {
      primary: string;
      // secondary: string;
    };
  }
}
