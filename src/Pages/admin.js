import React, { Component } from 'react';
import HeadFeed from '../Component/headfeed/headfeed';
import TableUser from '../Component/TableUser/TableUser';

class Admin extends Component {
    render() {
      return (
  
        <div className="admin">
            <HeadFeed />
            <TableUser />
        </div>
  
      );
    }
  }
  
  export default Admin;