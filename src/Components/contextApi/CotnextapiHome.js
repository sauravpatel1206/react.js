
import { useState } from 'react';
import ThemeContext from '../../utils/context';
import { ContextapiA } from '../contextApi/ContextapiA';



export const CotnextapiHome = () => {
  
    const [contextName, setContextName] = useState("we are in light context");
    return (
      <>
        <ThemeContext.Provider value={contextName}>
          <ContextapiA />
        </ThemeContext.Provider>
      </>
    );
  
}
  