import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import AddPropertyForm from './screens/Addproperty';
import PropertyTable from './Tables/PropertyTable';
import UserTable from './Tables/UserTable';
import BookingTable from './Tables/BooingTable';

const { TabPane } = Tabs;

function Adminscreen() {
  const renderWelcomeMessage = () => {
    return (
      <div className='welcome-container'>
        <h1 className='welcome-message'>Welcome to Emirates Hotel</h1>
        <p className='welcome-message'>
          Manage rooms, bookings, and user profiles to ensure a seamless experience for our guests.
        </p>
      </div>
    );
  };

  return (
    <div>
      <div className='ml-5 mt-3 mr-5 mb-5 bsx'>
        <h2 className='text-center' style={{ fontSize: '30px' }}>
          <b>Admin Panel</b>
        </h2>
        <Tabs defaultActiveKey='1' tabPosition='left'>
          <TabPane tab='Admin' key='1'>
            {renderWelcomeMessage()}
          </TabPane>
          <TabPane tab='Add Property' key='2'>
            <AddPropertyForm/>
          </TabPane>
          <TabPane tab='Properties' key='3'>
            <PropertyTable/>
          </TabPane>
          <TabPane tab='Rooms' key='4'>
            {/* Your Rooms component */}
          </TabPane>
          <TabPane tab='Types' key='5'>
            {/* Your Types component */}
          </TabPane>
          <TabPane tab='Bookings' key='6'>
            <BookingTable/>
          </TabPane>
          <TabPane tab='Users' key='7'>
            <UserTable/>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default Adminscreen;
