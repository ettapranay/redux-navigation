import React from 'react';
import { connect } from 'react-redux';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput, Image
} from 'react-native';

import { loadProduct } from './actions';

class ProductList extends React.Component {

    loadProduct = () => {
        this.props.dispatchLoadProducts(this.state);
    }
    render() {
        const { products } = this.props;

        return (
            <View style={styles.container}>
             

                <ScrollView style={styles.BooksContainer}>
                    {
                        products.map((products, index) => (
                            <View style={styles.book} key={index}>
                                <Text style={styles.name}>{products.productName}</Text>
                                <Text style={styles.details}>ID = {products.productId}</Text>
                                <Text style={styles.details}>PRICE = {products.price}</Text>
                                <Text style={styles.details}>Rating = {products.starRating}</Text>
                                <Text style={styles.details}>{products.description}</Text>
                                <Image source={{ uri: products.imageUrl }}
                                    style={{ height: '30%', width: '30%' }} />
                                <Text>releaseDate = {products.releaseDate}</Text>

                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        paddingTop: 30,
        paddingBootom: 20,
        fontSize: 20,
        textAlign: 'center'
    },

    BooksContainer: {
        borderWidth: 1,
        borderTopColor: 'red',
        flex: 1
    },

    book: {
        padding: 20
    },
    name: {
        fontSize: 18
    },
    details: {
        fontSize: 14,
        color: 'pink'
    },


})

const mapDispatchToProps = {
    dispatchLoadProducts: (products) => loadProduct(products),

}

const mapStateToProps = (state) => ({
    products: state.ProductReducer.products
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);