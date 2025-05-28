import React, { useCallback, useState } from 'react';

interface ImageUploaderProps {
  onUpload: (imageUrl: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  
  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result;
          if (typeof result === 'string') {
            onUpload(result);
          }
        };
        reader.readAsDataURL(file);
      }
    },
    [onUpload]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result;
          if (typeof result === 'string') {
            onUpload(result);
          }
        };
        reader.readAsDataURL(file);
      }
    },
    [onUpload]
  );

  // 버튼 클릭 핸들러 추가
  const handleButtonClick = () => {
    const input = document.getElementById('screenshot-upload') as HTMLInputElement;
    if (input) {
      input.click();
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Upload Screenshot</h2>
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragging
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 hover:border-blue-500'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id="screenshot-upload"
        />
        <div className="text-gray-500 mb-2">
          Click or drag image here
        </div>
        <button
          onClick={handleButtonClick}
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Select Image
        </button>
      </div>
    </div>
  );
};

export default ImageUploader;