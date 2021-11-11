import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import SHOP_DATA from '../../context/collections/shop.data';
import CustomButton from '../../components/custom-button/custom-button.component';

import { FormContainer, FormTitle } from './dashboard.styles'

class  DashBoard extends React.Component {
    constructor(){
        super();
        this.state = {
            key:'',
            productName: '',
            price: '',
            imgUrl:'',
            collectionFamily:''
        };
    };
    
    handleSubmit = event => {
      event.preventDefault();

      const { productName, imgUrl, price, collectionFamily, key } = this.state;
      const target = SHOP_DATA[collectionFamily];
      
      target['items'].push({
        id: key,
        name: productName,
        imageUrl: imgUrl,
        price: price
      });
     
      this.setState({
        key:'',
        productName: '',
        price: '',
        imgUrl:'',
        collectionFamily:''
      });
    };

    handleChange = event => {
      const { name, value } = event.target;
  
      this.setState({ [name]: value });
    };

    render(){
      
        const { productName, price, imgUrl, collectionFamily, key} = this.state
        return(
        <FormContainer>
        <FormTitle> upload your product</FormTitle>
        <form onSubmit={this.handleSubmit}>
        <FormInput
            type='text'
            name='productName'
            value={productName}
            onChange={this.handleChange}
            label='Add Product Name'
            required
          />
          <FormInput
            type='number'
            name='price'
            value={price}
            onChange={this.handleChange}
            label='Add price'
            required
          /> 
          <FormInput
            type='text'
            name='imgUrl'
            value={imgUrl}
            onChange={this.handleChange}
            label='Add URL photo'
            required
          />
            <FormInput list='companies' 
            name='collectionFamily' 
            value={collectionFamily} 
            onChange={this.handleChange} 
            label='Add type' />
            <datalist id='companies' key={key}>
                <option value="paper"/>
                <option value="cleaning" />
                <option value="baby" />
                <option value="cosmatics" />
                <option value="perfums" />
            </datalist>  
            <CustomButton type='submit'>Add New Item</CustomButton>
        </form>

    </FormContainer>
    );}
}

export default DashBoard;