import styled from 'styled-components';

export const RenderContent = styled.div`
	h2, h3, h4 {
		margin-top: 80px;
	}

	video, img {
		display: block;
		margin: 40px auto;
	}
	p > code {
		font-size: 1.6rem;
		line-height: 1.8 !important;
		padding: 2px 5px;
	}
	pre[class*='language-'],
	code[class*='language-'] {
		margin: 2px auto 40px;
		font-size: 1.6rem;
	}

	.gatsby-code-title {
		line-height: 1;
    font-size: 1.6rem;
		color: var(--grey-600);
		text-align: right;
		margin: 40px auto 0;
	}
`;
