import React, { useRef } from 'react';
import styled from 'styled-components';

import iconSrc from '../../assets/image/img-upload-icon.svg';

export default function ProfileForm({ setUserInfo, userInfo }) {
	const photoInput = useRef();
	const { image, username, accountname, intro } = userInfo;

	const onChange = (e) => {
		const { name, value } = e.target;
		setUserInfo({
			...userInfo,
			[name]: value,
		});
	};

	const handleImgChange = (e) => {
		setUserInfo({
			...userInfo,
			image: URL.createObjectURL(e.target.files[0]),
		});
	};

	return (
		<div>
			<div>
				<div
					style={{
						width: '200px',
						height: '200px',
						backgroundColor: 'gray',
					}}
					onClick={() => {
						photoInput.current.click();
					}}
				>
					<LabelImg />
					<input
						name="image"
						id="image"
						style={{ display: 'none' }}
						ref={photoInput}
						type="file"
						accept="image/*"
						onChange={handleImgChange}
					/>
					<PictureArea src={image} alt="z" />
				</div>
			</div>
			<div>
				사용자이름
				<input
					name="username"
					type="text"
					placeholder={username}
					value={username}
					onChange={(e) => onChange(e)}
				/>
			</div>
			<div>
				계정id
				<input
					name="accountname"
					type="text"
					placeholder={accountname}
					value={accountname}
					onChange={(e) => onChange(e)}
				/>
			</div>
			<div>
				소개
				<input
					name="intro"
					type="text"
					placeholder={intro}
					value={intro}
					onChange={(e) => onChange(e)}
				/>
			</div>
		</div>
	);
}

const PictureArea = styled.img`
	width: 200px;
	height: 150px;
	object-fit: cover;
`;

const LabelImg = styled.img`
	width: 50px;
	height: 50px;
	background-image: url(${iconSrc});
	border: 0;
	padding: 0;
	border-radius: 50px;
	cursor: pointer;
`;