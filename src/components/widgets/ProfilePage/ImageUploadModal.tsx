import { useRef, useState, useEffect } from "react";
import { X, Upload } from "lucide-react";

interface ImageUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (imageUrl: string) => void;
}

export const ImageUploadModal = ({
  isOpen,
  onClose,
  onSave,
}: ImageUploadModalProps) => {
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) {
      setImage(null);
      setError(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }, [isOpen]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    validateAndSetImage(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0];
    if (file) validateAndSetImage(file);
  };

  const validateAndSetImage = (file: File) => {
    setError(null);

    if (!file.type.startsWith("image/")) {
      setError("Пожалуйста, загрузите файл изображения (JPEG, PNG)");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Файл слишком большой (макс. 5MB)");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSave = () => {
    if (image) {
      onSave(image);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-xs bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <X size={24} />
        </button>

        <h2 className="text-xl font-bold mb-4">Загрузить фотографию</h2>

        <div
          onClick={triggerFileInput}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer ${
            error ? "border-red-500" : "border-gray-300 hover:border-blue-500"
          } transition-colors mb-4`}
        >
          {image ? (
            <div className="relative">
              <img
                src={image}
                alt="Preview"
                className="w-full h-48 object-contain rounded-md"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setImage(null);
                }}
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-1 rounded-full"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <Upload size={48} className="text-gray-400 mb-2" />
              <p className="text-gray-600">
                Перетащите сюда фото или{" "}
                <span className="text-blue-600 font-medium">выберите файл</span>
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Поддерживаются JPEG, PNG (макс. 5MB)
              </p>
            </div>
          )}
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />

        {error && (
          <p className="text-red-500 text-sm mt-2 flex items-center">
            <X size={16} className="mr-1" /> {error}
          </p>
        )}

        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer"
          >
            Отмена
          </button>
          <button
            onClick={handleSave}
            disabled={!image}
            className={`px-4 py-2 rounded-lg ${
              image
                ? "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};
