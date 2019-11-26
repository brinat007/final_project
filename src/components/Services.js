import React, { Component } from 'react';

class Services extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isServicesOpened: false,
        isDiscountsOpened: false
      };
  }  

  toggleServices() {
      this.setState({ isServicesOpened: !this.state.isServicesOpened });
  }

  toggleDiscounts() {
    this.setState({ isDiscountsOpened:
       !this.state.isDiscountsOpened });
  }

  render() {
    let dropdownServices;
    if (this.state.isServicesOpened) {
       dropdownServices = <div> 
        <ul>
          <li>Мужская стрижка</li>
          <li>Мужская стрижка машинкой</li>
          <li>Стрижка бороды</li>
          <li>Классическое бритьё (Королевское)</li>
          <li>Детские стрижки для мальчиков</li>
          <li>Удаление волос воском</li>
          <li>Чёрная маска</li>
        </ul>
        </div>;
    }
    let dropdownDiscounts;
    if (this.state.isDiscountsOpened) {
       dropdownDiscounts = <div> 
        <ul>
          <li>Первая стрижка</li>
          <li>Друг + друг</li>
          <li>Стрижка + чёрная маска</li>
        </ul>
         </div>;
    }
    return (
      <div>
        <div onClick={this.toggleServices.bind(this)}>
          Основные услуги
          {dropdownServices}
        </div>
        <div onClick={this.toggleDiscounts.bind(this)}>
          Акции
          {dropdownDiscounts}
        </div>
      </div>
    );
  }
}

export default Services;