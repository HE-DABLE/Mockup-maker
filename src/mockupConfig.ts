export interface MockupConfig {
  id: string;
  name: string;
  image: string;
  canvasSize: {
    width: number;
    height: number;
  };
  screenPosition: {
    x: number;
    y: number;
    width: number;
    height: number;
    rotation?: number;
  };
}

export const mockups: MockupConfig[] = [
  {
    id: 'mockup1',
    name: '목업 1',
    image: './mockups/mockup.png',
    canvasSize: {
      width: 1108,
      height: 2250
    },
    screenPosition: {
      x: 59,
      y: 51,
      width: 990,
      height: 2148,
      rotation: 0
    }
  },
  {
    id: 'mockup2',
    name: '목업 2',
    image: '/mockups/mockup2.png',
    canvasSize: {
      width: 789,
      height: 857
    },
    screenPosition: {
      x: 150,
      y: 150,
      width: 500,
      height: 600,
      rotation: -25
    }
  },
  {
    id: 'mockup3',
    name: '목업 3',
    image: '/mockups/mockup3.png',
    canvasSize: {
      width: 1108,
      height: 2250
    },
    screenPosition: {
      x: 59,
      y: 51,
      width: 990,
      height: 2148,
      rotation: 0
    }
  }
];

export default mockups; 