import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ isOpen, onClose, onConfirm, title, children }) {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-[#171717] text-white rounded-lg shadow-lg p-8 max-w-sm w-full">
                <h2 className="text-xl font-semibold mb-4">{title}</h2>
                <div className="mb-4">{children}</div>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="bg-gray-400 text-gray-900  hover:bg-gray-200  font-bold py-2 px-4 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
}

export default Modal;
