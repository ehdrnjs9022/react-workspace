
import WhatIsReact from './components/Chapter/WhatIsReact';
import WhatIsJSX from './components/Chapter/WhatIsJSX';
import Chapter01 from './components/Chapter/Chapter01/Chapter01';
import Chapter02 from './components/Chapter/Chapter02/Chapter02';
import Chapter022 from './components/Chapter/Chapter02/chapter02-2';
import Footer from './components/Chapter/Common/footer';
import Header from './components/Chapter/Common/Header';
import { Layout,MainContent } from './components/Chapter/Common/Common.styles';
import Main from './components/Chapter/Common/Main';
function App() {
  return(
    <>{false &&<WhatIsReact/> && <WhatIsJSX/>&& <Chapter01/> &&<Chapter02/>&&<Chapter022/>}
    <Layout> 
      <Header />
      <MainContent>
      <Main/>
      </MainContent>
      <Footer />
    </Layout>


    </>
  );
};

export default App
