import React, {useState} from 'react'
import Card from '../../../shared/card'
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    FlatList,
    Button,
    Alert,
    ScrollView,
    TouchableHighlight,
    Image,
    TextInput,
    CheckBox
} from 'react-native';
import {useOrder} from '../../../context/OrderContext'
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../../config'
import Preparing from './Preparing.gif'

const OrderItem = ({order, token}) => {
    // const orders = useOrder().orders || []
    const [review, setReview] = useState('')
    const navigation = useNavigation();
    // if (!order) {
    //     order = {
    //         "customer": 4,
    //         "customer_review": "",
    //         "date_created": "2021-11-06T15:05:30.269130+05:30",
    //         "id": 61,
    //         "menu_items": "{\"1\": 15, \"4\": 1}",
    //         "restaurant": 2,
    //         "special_offers": "{\"1\": 2}",
    //         "status": "initialized",
    //         "table_no": 3,
    //         "total_price": "250.00",
    //       }
    // }

    const handleChange = (itemId, selected) => {
        changeSelection(itemId, selected)
    }

    const handleReviewChange = text => {
        setReview(text)
    }

    const handleSubmit = () => {
        // navigation.navigate('MenuItems')
        const data = {
            order_id: order.id,
            customer: "janedoe",
            customer_review: review
        }
        fetch(`${api}/api/order/add_review`,
                {
                    method: 'POST',
                    headers: {
                        'Authorization': `Token ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response=> response.json())
                .then(data => {
                    Alert.alert('Review Added')
                    setReview('')
                    // clearCart()
                    // addItem(data.order)
                    // navigation.navigate('OrderStatus')
                })
    }
    return (
        <Card>
                    <View style={styles.cartDetail}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Text
                                style={styles.titleText}
                            >
                                Order id
                            </Text>
                            <Text
                                style={{fontWeight: '600'}}
                            >{order.id}</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Text
                                style={styles.titleText}
                            >
                                Total Price
                            </Text>
                            <Text
                                style={{fontWeight: '600'}}
                            >{order.total_price}</Text>
                        </View>
                    </View>
                    <View style={styles.status}>
                    <Text style={styles.statusText}>
                        {order.status}
                    </Text>
                    </View>
                    <View>
                        <TextInput
                            style={styles.reviewInput}
                            editable
                            value={review}
                            onChangeText={handleReviewChange}
                            placeholder="Review for this order"
                        />
                    </View>
                    {!!review &&

                        <View style={styles.submitCnt}>
                            <Button
                                height="50"
                                title="Add Review"
                                onPress={handleSubmit}
                            />
                        </View>
                    }
            </Card>
    );
}
 
export default OrderItem;

const styles = StyleSheet.create({
    title: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-end',
        
    },
    titleCheckbox: {

    },
    titleText: {
        marginVertical: 'auto',
        minWidth: '40%'
    },
    cartDetail: {
        backgroundColor: '#ccc',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginHorizontal: 5,
        borderRadius: 8
    },
    orderButtonCont: {
        paddingTop: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    orderButton: {
        display: 'flex',
        height: 50
    },
    photo: {
        height: 300,
        width: "100%",
    },
    photoCnt: {
        height: 250,
        overflow: 'hidden'
    },
    status: {
        backgroundColor: '#00cc66',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginHorizontal: 5,
        marginTop: 5,
        borderRadius: 8
    },
    statusText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff'
    },
    reviewInput: {
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
        marginTop: 10
    },
    submitCnt: {
        marginVertical: 10,
        paddingHorizontal: 10,
    },
});