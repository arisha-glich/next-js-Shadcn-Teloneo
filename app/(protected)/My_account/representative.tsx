import { useState, ChangeEvent } from 'react';

type ServiceKey = 'videoConsultation' | 'clinicConsultation' | 'homeConsultation';

interface Service {
  selected: boolean;
  charge: string;
}

interface Services {
  videoConsultation: Service;
  clinicConsultation: Service;
  homeConsultation: Service;
}

export default function ConsultationSettings() {
  const [services, setServices] = useState<Services>({
    videoConsultation: { selected: true, charge: '' },
    clinicConsultation: { selected: true, charge: '' },
    homeConsultation: { selected: true, charge: '' },
  });

  const handleCheckboxChange = (serviceKey: ServiceKey) => {
    setServices((prevState) => ({
      ...prevState,
      [serviceKey]: {
        ...prevState[serviceKey],
        selected: !prevState[serviceKey].selected,
      },
    }));
  };

  const handleChargeChange = (e: ChangeEvent<HTMLInputElement>, serviceKey: ServiceKey) => {
    const { value } = e.target;
    setServices((prevState) => ({
      ...prevState,
      [serviceKey]: {
        ...prevState[serviceKey],
        charge: value,
      },
    }));
  };

  return (
    <div className="max-w-[546px] mx-auto p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Our service is available for...</h2>

      {/* Video Consultation */}
      <div className="mb-6 p-4 bg-white rounded-lg flex items-center justify-between">
        <label className="text-lg font-medium">Video consultation</label>
        <input
          type="checkbox"
          checked={services.videoConsultation.selected}
          onChange={() => handleCheckboxChange('videoConsultation')}
          className="h-6 w-6 text-orange-500  rounded focus:ring-0 bg-white border-gray-300"
        />
      </div>

      {/* Clinic Consultation */}
      <div className="mb-6 p-4 bg-white rounded-lg">
        <div className="flex items-center justify-between">
          <label className="text-lg w-[546px] font-medium">
            Clinic consultation <span className="text-gray-500">(face-to-face at my clinic)</span>
          </label>
          <input
            type="checkbox"
            checked={services.clinicConsultation.selected}
            onChange={() => handleCheckboxChange('clinicConsultation')}
            className="h-6 w-6 text-orange-500 rounded focus:ring-0 border-gray-300"
          />
        </div>
        {!services.clinicConsultation.selected && (
          <input
            type="text"
            value={services.clinicConsultation.charge}
            onChange={(e) => handleChargeChange(e, 'clinicConsultation')}
            placeholder="$ Consultation charges"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
            style={{ width: '400px' }} // Increased width
          />
        )}
      </div>

      {/* Home Consultation */}
      <div className="mb-6 p-4 bg-white rounded-lg">
        <div className="flex items-center justify-between">
          <label className="text-lg font-medium">
            Home consultation <span className="text-gray-500">(face-to-face at patient’s home)</span>
          </label>
          <input
            type="checkbox"
            checked={services.homeConsultation.selected}
            onChange={() => handleCheckboxChange('homeConsultation')}
            className="h-6 w-6 text-orange-500 rounded focus:ring-0 border-gray-300"
          />
        </div>
        {!services.homeConsultation.selected && (
          <input
            type="text"
            value={services.homeConsultation.charge}
            onChange={(e) => handleChargeChange(e, 'homeConsultation')}
            placeholder="$ Consultation charges"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
            style={{ width: '400px' }} // Increased width
          />
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-8">
        <button className="px-6 py-2 text-lg font-medium text-gray-600 bg-transparent hover:bg-gray-100 rounded-lg focus:outline-none">
          Cancel
        </button>
        <button className="px-6 py-2 text-lg font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg focus:outline-none">
          Update
        </button>
      </div>
    </div>
  );
}
