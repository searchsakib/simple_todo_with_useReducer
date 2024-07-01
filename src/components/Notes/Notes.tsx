import { TFormData } from '../Home/Home';

const Notes = ({ formData }: { formData: TFormData }) => {
  return (
    <div className='flex items-center justify-center'>
      <div className='card bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title'>{formData?.name}</h2>
          <p>{formData?.details}</p>
        </div>
      </div>
    </div>
  );
};

export default Notes;
