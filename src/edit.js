import { PlainText, useBlockProps } from '@wordpress/block-editor';
import { useCallback } from '@wordpress/element';
import { MermaidBlock } from './mermaid-block';
import { MerpressContext } from './context';

export default function Edit( props ) {
	const { content = '', img = '' } = props.attributes;
	const blockProps = useBlockProps();

	const updateContent = useCallback( (_content ) => {
		props.setAttributes( { content: _content } );
	}, [ content ] );

	const updateImg = useCallback( ( _img ) => {
		props.setAttributes( { img: _img } );
	}, [ img ] );

	const merpressContext = {
		content,
		img,
		setContent: updateContent,
		setImg: updateImg,
	};

	return (
		<MerpressContext.Provider value={ merpressContext }>
			<div { ...blockProps }>
				{ props.isSelected && (
					<>
						<pre className="mermaid-editor wp-block-code">
							<PlainText
								onChange={ updateContent }
								value={ content }
							/>
						</pre>
						<hr />
					</>
				) }
				<MermaidBlock/>
			</div>
		</MerpressContext.Provider>
	);
}
