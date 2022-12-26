import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPostList } from '../../lib/apis/postApis';
import PostItem from './PostItem';
import PostPicture from './PostPicture';

import postListOff from '../../assets/icons/post-list-off.png';
import postListFill from '../../assets/icons/post_list_fill.png';
import postAlbum from '../../assets/icons/post_album.png';
import postAlbumFill from '../../assets/icons/post_album_fill.png';

export default function PostList({ user, type }) {
	const [postList, setPostList] = useState([]);
	const [toggle, setToggle] = useState(true);

	useEffect(() => {
		getPostList(user).then((res) => {
			setPostList([...res.data.post]);
		});
	}, [user]);

	return (
		<>
			{!!postList.length && (
				<>
					<S_DivBox />
					<S_PostSection>
						<h2 className="ir">게시글 목록</h2>
						<S_Header>
							<img onClick={() => setToggle(true)} src={toggle ? postListFill : postListOff} />
							<img onClick={() => setToggle(false)} src={toggle ? postAlbum : postAlbumFill} />
						</S_Header>
						{toggle ? (
							<S_PostListBox>
								{postList.map((post, idx) => (
									<PostItem key={idx} {...post} setPostList={setPostList} user={user} type={type} />
								))}
							</S_PostListBox>
						) : (
							<S_PostAlbumBox>
								{postList.map((post, idx) => (
									<PostPicture key={idx} {...post} />
								))}
							</S_PostAlbumBox>
						)}
					</S_PostSection>
				</>
			)}
		</>
	);
}

const S_DivBox = styled.div`
	padding: 3px;
	width: 100%;
	background-color: #f2f2f2;
`;

const S_PostSection = styled.section`
	width: 100%;
	background-color: #f3f1e8;
	box-sizing: border-box;
	border-top: 1px solid #dbdbdb;
`;

const S_Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: end;
	width: 100%;
	height: 44px;
	box-sizing: border-box;
	border-bottom: 1px solid #dbdbdb;
	padding: 0 16px;
	img {
		width: 26px;
		height: 26px;
		margin-left: 16px;
		cursor: pointer;
	}
`;

const S_PostListBox = styled.div``;

const S_PostAlbumBox = styled.div`
	display: flex;
	padding: 12px;
	img {
		width: 114px;
		height: 114px;
		margin: 4px;
	}
`;
