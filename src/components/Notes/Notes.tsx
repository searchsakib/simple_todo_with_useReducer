import { TFormData } from '../Home/Home';

const Notes = ({ note }: { note: TFormData }) => {
  return (
    <div>
      <div className='p-5 bg-slate-700 gap-5'>
        <div className='flex flex-col'>
          <h2 className='card-title'>{note?.name}</h2>
          <p>{note?.details}</p>
        </div>
      </div>
    </div>
  );
};

export default Notes;
