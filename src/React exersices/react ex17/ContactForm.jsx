import { useForm } from "./useForm ex17";


const ContactForm = () => {

    const {values,handleChange} = useForm({
        name:'',   
        phone:'',
        email:''
  
    })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form data', values)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Name:
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          {" "}
          phone:
          <input
            type="number"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          {" "}
          Email:
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
