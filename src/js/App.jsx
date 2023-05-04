import React, { useState, useEffect } from "https://cdn.skypack.dev/react@17.0.1";
import { chapters } from './chapters';
import { getRandomElement } from './utils/utils.js';

// const author = "Kahlil Gibran";

const targetChapterID = String( window.location.hash ).split( '#' )[ 1 ];

const chapterIDs = Object.keys( chapters );
export default function App() {
  const [ chapterID, setChapterID ] = useState( targetChapterID || getRandomElement( Object.keys( chapters ) ) );

  useEffect( () => {
    window.location.hash = chapterID;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [ chapterID ] );

  useEffect( () => {
    const handleHashChange = () => {
      // window.location.reload();
      setChapterID( String( window.location.hash ).split( '#' )[ 1 ] );
    };

    window.addEventListener( 'hashchange', handleHashChange );

    // the function that gets returned from useEffect is called when the component is unmounted
    return () => {
      // clean up the event listener when the component is unmounted
      window.removeEventListener( 'hashchange', handleHashChange );
    };

    // an empty dependency array makes the effect run only once (on mount and unmount)
  }, [] );

  return <div className={ 'page' }>
    { chapters[ chapterID ].html }
    <nav>
      { chapterIDs.map( chapterKey => <button onClick={ () => setChapterID( chapterKey ) }>{ chapters[ chapterKey ].title }</button> ) }
    </nav>
  </div>;
}
