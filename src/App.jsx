import { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';
import { useIMask } from 'react-imask';

import PriceField from './components/PriceField';
import './App.css';


const CITIES = ['Бишкек', 'Нарын', 'Каракол', 'Ош']

function App() {
  const [city, setCity] = useState(CITIES[0]);
  const [address, setAddress] = useState('');
  const [room, setRoom] = useState(null);
  const [price, setPrice] = useState({
    hour: '',
    day: '',
    night: '',
    day_night: ''
  });

  const {
    ref,
    value: phone,
  } = useIMask({ mask: '+{996}(000)000-000' });


  const priceChangeHandler = (name, value) => {
    const copyObj = { ...price };

    copyObj[name] = value;

    setPrice(copyObj);
  }

  useEffect(() => {
    const isSomeprice = Object.values(price).some((value) => value);


    if (city && address && room && phone && isSomeprice) {
      let pricesObj = {};

      for (let key in price) {
        if (price[key]) {
          pricesObj[key] = price[key];
        }
      }

      const payload = {
        city,
        address,
        phone,
        room_count: room,
        price: pricesObj
      }

      WebApp.MainButton.show();
      console.log(payload);
      
    }

  }, [city, address, room, phone, price])


  return (
    <div>
      <div className="field-wrapper select-wrapper">
        <label htmlFor="city" className="field-label">Город</label>

        <select name="city" id="city" value={city} onChange={(e) => setCity(e.target.value)} className="select-field">
          {CITIES.map((v) => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>
      </div>

      <div className="field-wrapper">
        <label htmlFor="address" className="field-label">Адрес</label>

        <input type="text" id="address" className="text-field" maxLength={50} value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>

      <div className="field-wrapper">
        <label htmlFor="phone" className="field-label">Номер телефона</label>

        <input type="text" id="phone" className="text-field" ref={ref} />
      </div>

      <div className="field-wrapper">
        <span className="field-label">Количество комнат</span>

        <div className="room-buttons">
          <label className="radio-input-label">
            <input type="radio" name="room" value="1" className="radio-input" checked={room === '1'} onChange={(e) => setRoom(e.target.value)} />
            <span className="radio-input-text">1</span>
          </label>
          <label className="radio-input-label">
            <input type="radio" name="room" value="2" className="radio-input" checked={room === '2'} onChange={(e) => setRoom(e.target.value)} />
            <span className="radio-input-text">2</span>
          </label>
          <label className="radio-input-label">
            <input type="radio" name="room" value="3" className="radio-input" checked={room === '3'} onChange={(e) => setRoom(e.target.value)} />
            <span className="radio-input-text">3</span>
          </label>
          <label className="radio-input-label">
            <input type="radio" name="room" value="4" className="radio-input" checked={room === '4'} onChange={(e) => setRoom(e.target.value)} />
            <span className="radio-input-text">4</span>
          </label>
          <label className="radio-input-label">
            <input type="radio" name="room" value="5" className="radio-input" checked={room === '5'} onChange={(e) => setRoom(e.target.value)} />
            <span className="radio-input-text">5</span>
          </label>
        </div>
      </div>

      <div className="field-wrapper">
        <span className="field-label">Цена</span>

        <PriceField label="Час" name="hour" value={price.hour} onChange={priceChangeHandler} />
        <PriceField label="День" name="day" value={price.day} onChange={priceChangeHandler} />
        <PriceField label="Ночь" name="night" value={price.night} onChange={priceChangeHandler} />
        <PriceField label="Сутки" name="day_night" value={price.day_night} onChange={priceChangeHandler} />
      </div>
    </div>
  )
}

export default App
