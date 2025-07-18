declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.jpg' {
  const value: any;
  export default value;
}

declare module '*.jpeg' {
  const value: any;
  export default value;
}

declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.webp' {
  const content: number;
  export default content;
}

declare module 'react-native-vector-icons/MaterialIcons' {
  import { ComponentType } from 'react';
  const MaterialIcons: ComponentType<any>;
  export default MaterialIcons;
}
