import React from 'react'
import Grid from '../atoms/grid-component/'
import DraggableComponent from '../atoms/draggable-component/'
import Header from '../atoms/header/'
import { SalesOrderComponentStyle } from './style/'

export default class SalesOrderComponent extends React.Component{
  render() {
    const clientFolderList = {
      clientFolders: [
      {
        clientName: 'Red Lobster',
        orders: [
          {
            orderID: '#124231',
            orderStatus: 'open'
          },
          {
            orderID: '#124231',
            orderStatus: 'open'
          },
          {
            orderID: '#124231',
            orderStatus: 'open'
          },
          {
            orderID: '#124231',
            orderStatus: 'open'
          }
        ]
      },
      {
        clientName: 'Texas Road House',
        orders: [
          {
            orderID: '#124232',
            orderStatus: 'processed'
          },
          {
            orderID: '#124231',
            orderStatus: 'open'
          },
          {
            orderID: '#124231',
            orderStatus: 'open'
          },          {
            orderID: '#124231',
            orderStatus: 'open'
          }
        ]
      },
      {
        clientName: 'Apple Bee',
        orders: [
          {
            orderID: '#124233',
            orderStatus: 'delivered'
          }
        ]
      },
      {
        clientName: 'Johnny Seafood',
        orders: [
          {
            orderID: '#124234',
            orderStatus: 'delivered'
          },
          {
            orderID: '#124231',
            orderStatus: 'open'
          }
        ]
      },
      {
        clientName: 'Big Bowl',
        orders: [
          {
            orderID: '#124235',
            orderStatus: 'open'
          },
          {
            orderID: '#124231',
            orderStatus: 'open'
          },          
          {
            orderID: '#124231',
            orderStatus: 'open'
          },
          {
            orderID: '#124231',
            orderStatus: 'open'
          },          
          {
            orderID: '#124231',
            orderStatus: 'open'
          },          
          {
            orderID: '#124231',
            orderStatus: 'open'
          },

        ]
      },
      {
        clientName: 'Kimchi',
        orders: [
          {
            orderID: '#124235',
            orderStatus: 'processed'
          },
          {
            orderID: '#124231',
            orderStatus: 'open'
          },
          {
            orderID: '#124231',
            orderStatus: 'open'
          },
          {
            orderID: '#124231',
            orderStatus: 'open'
          },
          {
            orderID: '#124231',
            orderStatus: 'open'
          },
          {
            orderID: '#124231',
            orderStatus: 'open'
          }
        ]
      },
      {
        clientName: 'Little Szechuang',
        orders: [
          {
            orderID: '#124236',
            orderStatus: 'open'
          },
          {
            orderID: '#124231',
            orderStatus: 'open'
          },
          {
            orderID: '#124231',
            orderStatus: 'open'
          },
          {
            orderID: '#124231',
            orderStatus: 'open'
          },          {
            orderID: '#124231',
            orderStatus: 'open'
          },
          {
            orderID: '#124231',
            orderStatus: 'open'
          },
          {
            orderID: '#124231',
            orderStatus: 'open'
          },
          {
            orderID: '#124231',
            orderStatus: 'open'
          },          {
            orderID: '#124231',
            orderStatus: 'open'
          },
          {
            orderID: '#124231',
            orderStatus: 'open'
          }
        ]
      }
    ]
  }
    return (
      <SalesOrderComponentStyle >
        <div className='sales-order-header-wrapper'>
          <Header headerText={'Sales Order Management'} />
        </div>
        <div className='sales-order-main-component-wrapper'>
          <Grid 
            clientFolderList={clientFolderList}
          />
          <DraggableComponent />
        </div>
      </SalesOrderComponentStyle>
    )
  }
}
