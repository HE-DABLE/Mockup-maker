import React, { useEffect, forwardRef, useState } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';
import { MockupConfig } from '../mockupConfig';

interface PreviewCanvasProps {
  mockup: MockupConfig;
  uploadedImage: string | null;
}

const PreviewCanvas = forwardRef<any, PreviewCanvasProps>(({ mockup, uploadedImage }, ref) => {
  const [mockupImage] = useImage(mockup.image);
  const [screenshotImage] = useImage(uploadedImage || '');
  const [scale, setScale] = useState(0.3);

  // 캔버스 크기에 따라 스케일 자동 조정
  useEffect(() => {
    const containerWidth = 400; // 원하는 최대 너비
    const scaleX = containerWidth / mockup.canvasSize.width;
    const scaleY = (containerWidth * (mockup.canvasSize.height / mockup.canvasSize.width)) / mockup.canvasSize.height;
    setScale(Math.min(scaleX, scaleY));
  }, [mockup.canvasSize]);

  useEffect(() => {
    if (mockupImage && ref && typeof ref !== 'function' && ref.current) {
      ref.current.batchDraw();
    }
  }, [mockupImage, screenshotImage, ref]);

  const getScreenshotTransform = () => {
    const rotation = mockup.screenPosition.rotation || 0;
    return {
      rotation,
      offsetX: rotation ? mockup.screenPosition.width / 2 : 0,
      offsetY: rotation ? mockup.screenPosition.height / 2 : 0,
    };
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">미리보기</h2>
      <div className="border rounded-lg p-4 bg-gray-50 overflow-hidden" style={{ minWidth: '100%' }}>
        <div className="flex flex-col items-center">
          <Stage
            ref={ref}
            width={mockup.canvasSize.width * scale}
            height={mockup.canvasSize.height * scale}
            scale={{ x: scale, y: scale }}
          >
            <Layer>
              {screenshotImage && (
                <Image
                  key={`screenshot-${mockup.id}`}
                  image={screenshotImage}
                  x={mockup.screenPosition.x + (mockup.screenPosition.rotation ? mockup.screenPosition.width / 2 : 0)}
                  y={mockup.screenPosition.y + (mockup.screenPosition.rotation ? mockup.screenPosition.height / 2 : 0)}
                  width={mockup.screenPosition.width}
                  height={mockup.screenPosition.height}
                  {...getScreenshotTransform()}
                />
              )}
              {mockupImage && (
                <Image
                  image={mockupImage}
                  width={mockup.canvasSize.width}
                  height={mockup.canvasSize.height}
                />
              )}
            </Layer>
          </Stage>
        </div>
      </div>
    </div>
  );
});

PreviewCanvas.displayName = 'PreviewCanvas';

export default PreviewCanvas;
