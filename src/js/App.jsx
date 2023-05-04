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
  }, [ chapterID ] );

  useEffect(() => {
    const handleHashChange = () => {
      // window.location.reload();
      setChapterID( String( window.location.hash ).split( '#' )[ 1 ] );
    };

    window.addEventListener( 'hashchange', handleHashChange );

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener( 'hashchange', handleHashChange );
    };
  }, []);

  return <div className="page">
    { chapters[ chapterID ].html }
    <nav>
      { chapterIDs.map( chapterKey => <button onClick={ () => setChapterID( chapterKey ) }>{ chapters[ chapterKey ].title }</button> ) }
    </nav>
  </div>;
}
