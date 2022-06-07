import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("Please enter your name")
    .min(3, "Minimum 3 characters"),
  lastName: yup
    .string()
    .required("Please enter your name")
    .min(4, "Minimum 4 characters"),
  email: yup
    .string()
    .required("Please enter a valid email address")
    .email("Please enter a valid email address"),
  message: yup
    .string()
    .required("Please provide a message for us")
    .min(10, "The message must be at least 10 characters"),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="entireForm">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="name" {...register("firstName")} />
          {errors.firstName && <span>{errors.firstName.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="name" {...register("lastName")} />
          {errors.lastName && <span>{errors.lastName.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Subject</Form.Label>
          <Form.Control as="textarea" rows={4} {...register("message")} />
          {errors.message && <span>{errors.message.message}</span>}
        </Form.Group>

        <button className="button-25">Send</button>
      </Form>
    </div>
  );
}

export default ContactForm;
