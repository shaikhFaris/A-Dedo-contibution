import { PropTypes } from 'prop-types';

const PopupDeleteTrip = ({ show, onClose, onContinue }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="mb-4 text-lg">Estas por eliminar el viaje</h2>
        <p className="mb-6 text-lg">¿Deseas continuar?</p>
        <div className="flex justify-around">
          <button 
          onClick={onClose}
          className="px-4 py-2 text-[#5F5C5C] rounded-md">
            Cancelar
          </button>
          <button 
          onClick={onContinue}
          className="px-4 py-2 text-customGreen rounded-md">
            Continuar
          </button>
        </div>
      </div>
    </div>
  )
}

PopupDeleteTrip.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
}

export default PopupDeleteTrip