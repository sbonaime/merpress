import { useState, useEffect, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useMerpressContext } from './context';

export function MermaidBlock() {
	const [ isError, setError ] = useState( false );
	const container = useRef( null );
	const { content, updateContext } = useMerpressContext();

	useEffect( () => {
		async function processContent() {
			try {
				await window.mermaid.parse( content );
				setError( false );
				container.current?.removeAttribute( 'data-processed' );
				container.current.innerHTML = content;
	
				const getSVG = () => {
					return new Promise( ( resolve ) => {
						const cb = () => {
							const svgEl = container.current.querySelector( 'svg' );
							const { width, height } = svgEl.getBoundingClientRect();
							// eslint-disable-next-line no-undef
							const svgText = new XMLSerializer().serializeToString( svgEl );
							resolve( { svgText, width, height } );
						}
						window.mermaid.run( { nodes: [ container.current ], postRenderCallback: cb } );
					} );
				};
				const svg = await getSVG();
				updateContext( { svg } );
			} catch ( e ) {
				console.error( e );
				updateContext( { svg: {} } );
				setError( true );
				return;
			}
		}
		processContent();
	}, [ content ] );

	return (
		<>
			{ isError && (
				<div className="error">
					{ __( 'Syntax Error', 'merpress' ) }
				</div>
			) }
			<div
				ref={ container }
				className={ 'mermaid ${error ? "mermaid-error" : "" }' }
			/>
		</>
	);
}
