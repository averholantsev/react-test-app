import React from 'react';
import Aux from '../../hoc/aux';


const Layout = (props) => {
  return (
    <Aux>
      <div>Toolbar, Sidebar, Backdrop</div>
      <main>
        { props.children }
      </main>
    </Aux>
  );
}

export default Layout;