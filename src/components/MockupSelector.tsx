import React from 'react';
import mockups from '../mockupConfig';

interface MockupSelectorProps {
  selectedMockup: string;
  onSelectMockup: (mockupId: string) => void;
}

const MockupSelector: React.FC<MockupSelectorProps> = ({
  selectedMockup,
  onSelectMockup,
}) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-lg font-semibold">목업 선택</h2>
      <div className="grid grid-cols-2 gap-4">
        {mockups.map((mockup) => (
          <button
            key={mockup.id}
            onClick={() => onSelectMockup(mockup.id)}
            className={`p-4 border rounded-lg ${
              selectedMockup === mockup.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <img
              src={mockup.image}
              alt={mockup.name}
              className="w-full h-auto mb-2"
            />
            <p className="text-sm font-medium text-center">{mockup.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MockupSelector;