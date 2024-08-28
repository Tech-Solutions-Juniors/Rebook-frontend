import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    containerMaxWidth: string;

    colors: {
      black: string;
      background: string;
      primary: string;
      primaryDark: string;
      // secondary: string;
    };
  }
}
