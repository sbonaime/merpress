import { createContext, useContext } from '@wordpress/element';

export const MerpressContext = createContext( {
    content: undefined,
    setContent: () => {},
    img: {},
    setImg: () => {},
} );

export const useMerpressContext = () => useContext( MerpressContext );