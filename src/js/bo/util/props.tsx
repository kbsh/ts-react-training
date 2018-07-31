export interface Props {
    // non-style props
    foo: number;
    bar: boolean;
    // injected style props
    classes: {
      root: string;
      paper: string;
      button: string;
    };
  }
