import { X, AlertTriangle } from "lucide-react";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  serviceTitle: string;
}

export const DeleteModal = ({
  isOpen,
  onClose,
  onConfirm,
  serviceTitle,
}: DeleteModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 cursor-pointer">
      <div
        className="bg-white rounded-xl shadow-xl max-w-4xl w-full cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pl-6 pr-3 pt-3 pb-3 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">
            Подтверждение удаления
          </h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-6 h-6 text-red-500 mt-0.5">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-gray-700">
                Услуга{" "}
                <span className="font-semibold text-gray-900">
                  "{serviceTitle}"
                </span>{" "}
                будет удалена без возможности восстановления.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 p-3 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-2 py-2 sm:px-8 sm:py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium cursor-pointer"
          >
            Отмена
          </button>
          <button
            onClick={onConfirm}
            className="px-2 py-2 sm:px-8 sm:py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium cursor-pointer"
          >
            Удалить услугу
          </button>
        </div>
      </div>
    </div>
  );
};
