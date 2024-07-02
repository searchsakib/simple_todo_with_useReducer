import { ChangeEvent, FormEvent, useReducer, useState } from 'react';
import Notes from '../Notes/Notes';

export type TFormData = {
  name?: string;
  details?: string;
};

type TAction = {
  type: 'name_field' | 'details_field' | 'reset';
  payload?: string;
};

const initialState = {
  name: '',
  details: '',
  notes: [],
};
function reducer(formData: TFormData, action: TAction) {
  switch (action.type) {
    case 'name_field': {
      return {
        ...formData,
        name: action.payload,
      };
    }
    case 'details_field': {
      return {
        ...formData,
        details: action.payload,
      };
    }
    case 'reset': {
      return {
        ...formData,
        name: '',
        details: '',
      };
    }
    default:
      return formData;
  }
}
const Home = () => {
  const [formData, dispatch] = useReducer(reducer, initialState);
  const [notes, setNotes] = useState<{ name: string; details: string }[]>([]);
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'name_field', payload: e.target.value });
  };

  const handleDetailsChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'details_field', payload: e.target.value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotes([
      ...notes,
      { name: formData.name || '', details: formData.details || '' },
    ]);
    console.log(formData.name, formData.details);
    dispatch({ type: 'reset' });
  };

  return (
    <div className='flex items-center justify-center flex-col gap-10'>
      <div className='text-3xl'>My Notes</div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Title : </label>
            <input
              required
              onChange={handleNameChange}
              type='text'
              id='name'
              name='name'
              value={formData.name}
            />
          </div>
          <br />
          <div>
            <label htmlFor='details'>Details : </label>
            <input
              required
              onChange={handleDetailsChange}
              type='text'
              id='details'
              name='details'
              value={formData.details}
            />
          </div>
          <button
            className='btn btn-outline w-20   btn-square btn-primary'
            type='submit'
          >
            Submit
          </button>
        </form>
      </div>
      <div className='flex flex-wrap gap-7'>
        {notes?.map((note) => (
          <div key={note.name} className='w-full'>
            <Notes note={note}></Notes>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
