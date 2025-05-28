import React from 'react';

interface DownloadButtonProps {
  stageRef?: React.RefObject<any>;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ stageRef }) => {
  const handleDownload = () => {
    if (!stageRef?.current) return;

    try {
      const stage = stageRef.current;
      
      // PNG 이미지로 변환 (가장 기본적인 설정으로)
      const dataURL = stage.toDataURL({
        mimeType: 'image/png',
        quality: 1
      });

      // 다운로드 링크 생성
      const link = document.createElement('a');
      const timestamp = new Date().toISOString().split('T')[0];
      link.download = `mockup-preview-${timestamp}.png`;
      link.href = dataURL;
      
      // 다운로드 실행
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('이미지 다운로드 중 오류 발생:', error);
      alert('이미지 다운로드 중 문제가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
    >
      Download Image
    </button>
  );
};

export default DownloadButton;