import { useState, useEffect, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useMerpressContext } from './context';

export function MermaidBlock( props ) {
	const [ isError, setError ] = useState( false );
	const container = useRef( null );
	const { content, setImg } = useMerpressContext();

	/**
	 * Using an svg string convert to a base64 encoded img.
	 * 
	 * @param {*} svg 
	 * @returns img as a base64 encoded string. 
	 */
	function convertSVG( svg ) {
		const svgEl = container.current.querySelector( 'svg' );
		const svgString = new XMLSerializer().serializeToString( svgEl );
		const svg64 = 'data:image/svg+xml;base64,' + btoa( unescape( encodeURIComponent( svgString ) ) );
		const { width, height } = svgEl.getBoundingClientRect();
		// setImg( { src: svg64, width, height } );

		var canvas = document.createElement( 'canvas' );
		var ctx = canvas.getContext( '2d' );
		canvas.width = width * 5;
		canvas.height = height * 5;
		// ctx.scale( 3, 3 );
		ctx.clearRect( 0, 0, canvas.width, canvas.height );

		const imgLoader = async function() {
			var img = new Image();
			return new Promise( ( resolve, reject ) => {
				img.onload = () => {
					ctx.drawImage( img, 0, 0 );
					const png = canvas.toDataURL( 'image/jpeg' );
					console.log( 'img', png );
					resolve( png );
				}
				img.src = 'data:image/svg+xml;base64,' + btoa( unescape( encodeURIComponent( svgString ) ) );
				console.log( 'img as svg', img.src );
			} );
		}
		imgLoader().then( ( img ) => {
			setImg( { src: img, width, height } );
		} );
	}


	useEffect( () => {
		try {
			window.mermaid.parse( content );
			setError( false );
		} catch ( e ) {
			setError( true );
		}
		container.current.removeAttribute( 'data-processed' );
		container.current.innerHTML = content;
		window.mermaid.init( undefined, container.current );
		var svg = container.current.innerHTML;
		// var svg = window.mermaid.render( '_merpress', content, undefined, container.current );
		// console.log( 'SVG', svg );
		convertSVG( svg );
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
