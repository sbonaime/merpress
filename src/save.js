import { useBlockProps } from '@wordpress/block-editor';

export default function Save( props ) {
    const { content, img } = props.attributes;
    const blockProps = useBlockProps.save( {
        className: 'mermaid',
    } );

    return (
        <>
            <pre { ...blockProps }>{ content }</pre>
            { img.src && (
            <div className="mermaid-img">
                <img src={ img.src } width={ img.width } height={ img.height } />
            </div>
            ) }
        </>
    );
}