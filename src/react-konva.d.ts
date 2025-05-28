declare module 'react-konva' {
  import * as React from 'react';
  import * as Konva from 'konva';

  // Stage 컴포넌트의 props 타입
  export interface StageProps {
    children?: React.ReactNode;
    ref?: React.Ref<any>;
    width?: number;
    height?: number;
    scale?: {
      x: number;
      y: number;
    };
    x?: number;
    y?: number;
  }

  // Layer 컴포넌트의 props 타입
  export interface LayerProps {
    children?: React.ReactNode;
  }

  // Image 컴포넌트의 props 타입
  export interface ImageProps {
    image?: HTMLImageElement;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    ref?: React.Ref<any>;
  }

  export const Stage: React.ForwardRefExoticComponent<StageProps & React.RefAttributes<any>>;
  export const Layer: React.FC<LayerProps>;
  export const Image: React.FC<ImageProps>;
}

declare module 'use-image' {
  type UseImage = [HTMLImageElement | undefined, string];
  export default function useImage(url: string): UseImage;
}