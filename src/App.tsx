import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import TextField from './component/TextField';
import Button from '@mui/material/Button';
import Select from './component/Select';

function App() {

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
    },
  });

  const onSubmit = (data: any) => console.log(data);
  const onError = (error: any) => console.log(error);

  return (
    <div>
      <h1>MUI REACT HOOK FORM POC</h1>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit, onError)}>
          <TextField
            name="firstName"
            label="First Name"
            rules={{ required: "Required!" }}
          />
          <br/><br/>
          <TextField
            name="lastName"
            label="Last Name"
            rules={{ required: "Required!" }}
          />
          <br/><br/>
          <Select
            name="age"
            label="Age"
            rules={{ required: "Required!" }}
            defaultItem={{ name: "Select", value: "" }}
            items={[
              { name: "Ten", value: 10 },
              { name: "Twenty", value: 20 },
              { name: "Thirty", value: 30 },
              { name: "Fourty", value: 40 },
            ]}
         />
          <br/><br/>
          <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default App;
