import './App.css'

import WhatIsReact from './components/Chapter/WhatIsReact';
import WhatIsJSX from './components/Chapter/WhatIsJSX';
import Chapter01 from './components/Chapter/Chapter01/Chapter01';
import Chapter02 from './components/Chapter/Chapter02/Chapter02';
import Chapter022 from './components/Chapter/Chapter02/chapter02-2';

function App() {
  return(
    <>{false &&<WhatIsReact/> && <WhatIsJSX/>&& <Chapter01/> &&<Chapter02/>}
      
      <Chapter022/>


    </>
  );
};

export default App
