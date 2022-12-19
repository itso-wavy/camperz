import ReactModal from 'react-modal';

export default function ConfirmModal({ onRemove, onClose }) {
	const handleClickCancel = () => {
		onClose();
	};

	const handleClickRemove = () => {
		onRemove();
		onClose();
	};

	const handleClose = () => {
		onClose();
	};

	return (
		<ReactModal isOpen ariaHideApp={false} onRequestClose={handleClose}>
			<div>
				<button onClick={handleClickCancel}>취소</button>
				<button onClick={handleClickRemove}>삭제</button>
			</div>
		</ReactModal>
	);
}
