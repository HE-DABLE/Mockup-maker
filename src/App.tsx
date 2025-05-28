import React, { useRef, useState } from 'react';
import MockupSelector from './components/MockupSelector';
import ImageUploader from './components/ImageUploader';
import PreviewCanvas from './components/PreviewCanvas';
import DownloadButton from './components/DownloadButton';
import mockups from './mockupConfig';

function App() {
  const [selectedMockupId, setSelectedMockupId] = useState(mockups[0].id);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const stageRef = useRef<any>(null);

  const selectedMockup = mockups.find(m => m.id === selectedMockupId) || mockups[0];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Mockup Maker</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <MockupSelector
                selectedMockup={selectedMockupId}
                onSelectMockup={setSelectedMockupId}
              />
              <ImageUploader onUpload={setUploadedImage} />
            </div>
            <div>
              <PreviewCanvas
                ref={stageRef}
                mockup={selectedMockup}
                uploadedImage={uploadedImage}
              />
              <DownloadButton stageRef={stageRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;