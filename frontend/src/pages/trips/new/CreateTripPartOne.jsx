import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setNavigationLayout } from '../../../store/slices/navigationSlice';
import { setOrigin } from '../../../store/slices/tripsSlice';
import Input from "../../../components/Input"
import volante from "../../../assets/volante.png"
import BtnNextIcon from "../../../components/BtnNextIcon"

const CreateTripPartOne = () => {
  const dispatch = useDispatch();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(()=>{
    dispatch( setNavigationLayout("create-trip-1") )
    return ()=> dispatch( setNavigationLayout("main-nav") )
  },[dispatch]);

  return (
    <div className="w-full">
      <main className="">
        <section className="m-4 flex items-center">
          <img src={volante} alt="" />
          <h2 className='text-textColor font-extrabold text-mainTitle text-[26px] m-2'>Punto de partida</h2>
        </section>
        <section className="m-4">
          <h2 className="text-[18px] font-semibold">Domicilio</h2>
          <Input
          type="text"
          placeholder="Calle y número"
          onChange={(e) => setAddress(e.target.value)}
          />
        </section>
        <section className="m-4">
          <h2 className="text-[18px] font-semibold">Localidad</h2>
          <Input
          type="text"
          onChange={(e) => setCity(e.target.value)}
          />
        </section>
        <section className="m-4">
          <h2 className="text-[18px] font-semibold">Código Postal</h2>
          <input 
          type="number"
          className="w-[100px] border-[1px] border-black px-4 my-2 py-2 rounded-md text-[#49454F]"
          onChange={(e) => setPostalCode(e.target.value)}
          />
        </section>
        <section className="m-4 flex items-center justify-between">
          <div>
            <h2 className="text-[18px] font-semibold">Fecha</h2>
            <Input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <h2 className="text-[18px] font-semibold">Horario</h2>
            <Input
            type="time"
            onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </section>
        <span className="absolute right-12">
          <BtnNextIcon
          to="/trips/new/step-2"
          onClick={()=>dispatch(setOrigin({address, city, postalCode, date, time}))}
          />
        </span>
      </main>
    </div>
  )
}

export default CreateTripPartOne