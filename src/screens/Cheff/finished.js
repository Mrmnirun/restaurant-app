import React, {useState}  from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Card from "../../shared/card";

export default function Finished({navigation,route}) {
  // let {item } = route.params
  const [orders, setOrders] = useState(
    [
      {
          "id": 2,
          "customer_id": 4,
          "restaurant_id": 1,
          "table_no": 1,
          "status": "initialized",
          "total_price": 1000.0,
          "menu_items": {},
          "special_offers": {},
          "customer_review": "",
          "date_created": "2021-09-24T16:57:58Z"
      },
      {
          "id": 4,
          "customer_id": 4,
          "restaurant_id": 1,
          "table_no": 3,
          "status": "initialized",
          "total_price": 3000.0,
          "menu_items": {
              "2": 3,
              "3": 2
          },
          "special_offers": {
              "1": 2
          },
          "customer_review": "",
          "date_created": "2021-09-24T17:03:54.734000Z"
      },
      {
          "id": 5,
          "customer_id": 4,
          "restaurant_id": 1,
          "table_no": 3,
          "status": "paid",
          "total_price": 3000.0,
          "menu_items": {
              "2": 3,
              "3": 2
          },
          "special_offers": {
              "1": 2
          },
          "customer_review": "",
          "date_created": "2021-09-24T17:06:31.265000Z"
      },
      {
          "id": 6,
          "customer_id": 4,
          "restaurant_id": 2,
          "table_no": 3,
          "status": "initialized",
          "total_price": 3000.0,
          "menu_items": {
              "2": 3,
              "3": 2
          },
          "special_offers": {
              "1": 2
          },
          "customer_review": "",
          "date_created": "2021-09-25T11:52:26.029000Z"
      },
      {
          "id": 7,
          "customer_id": 4,
          "restaurant_id": 2,
          "table_no": 3,
          "status": "initialized",
          "total_price": 3000.0,
          "menu_items": {
              "2": 3,
              "3": 2
          },
          "special_offers": {
              "1": 2
          },
          "customer_review": "",
          "date_created": "2021-09-25T11:52:45.487000Z"
      },
      {
          "id": 8,
          "customer_id": 4,
          "restaurant_id": 2,
          "table_no": 3,
          "status": "initialized",
          "total_price": 3000.0,
          "menu_items": {
              "2": 3,
              "3": 2
          },
          "special_offers": {
              "1": 2
          },
          "customer_review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem ligula, aliquet eget convallis at, gravida ac orci. Aliquam sit amet velit at sem faucibus lacinia. Curabitur auctor dolor sapien, eget elementum purus elementum elementum. Vestibulum felis turpis, venenatis nec finibus eu, cursus eget sem. Sed fermentum interdum faucibus. Nullam leo ex, faucibus pellentesque lobortis in, posuere sed erat. Phasellus justo justo, pellentesque nec cursus a, condimentum et augue. Nullam quis tincidunt augue, sit amet sagittis purus. Morbi volutpat ante purus, sit amet pellentesque erat eleifend non. Phasellus nec tellus sed lorem fermentum pellentesque non eget est.",
          "date_created": "2021-09-25T16:39:49.548000Z"
      },
      {
          "id": 9,
          "customer_id": 4,
          "restaurant_id": 2,
          "table_no": 3,
          "status": "confirmed",
          "total_price": 3000.0,
          "menu_items": {
              "2": 3,
              "3": 2
          },
          "special_offers": {
              "1": 2
          },
          "customer_review": "",
          "date_created": "2021-09-28T18:54:00.898000Z"
      }
  ]
  );

  const renderList = () => (
    orders.map((order,index)=>(
     (order.status == "paid" ?  <Card>
             <Text >{ order.title }</Text>
             {/* <Button title="Take Order" onPress={() =>{ order.status="placed"; navigation.navigate('MyOrders',{orders});  const neworder =[...orders];neworder.splice(neworder.indexOf(review),1);
             setReviews(newReview)
             }} /> */}
             {/* <Button title="Take Order" onPress={() =>{ navigation.navigate('Finished') }}/> */}
            </Card> :<></>
        )
  ))
  )
  return (
    <>
    {renderList()}
   </>
    // <View >
    //   <Text>Finished Screen</Text>
    //   <Card>
    //   <Text >{ item.title}</Text>
    //     <Text>{item.body }</Text>
    //     <Text>{ item.rating }</Text>
    //   </Card>
    // </View>
  );
}