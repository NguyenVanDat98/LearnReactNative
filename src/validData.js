export class Validate {
    required = {value: true, message: 'This is required!'};
    name={
      required: this.required
    }
    email = {
      required: this.required,
      pattern: {
        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        message: 'the Value is not a Email!',
      },
    };
    address = {
      required: this.required,
      minLength: {
        message: 'Min lenght at least 8',
        value: 8,
      },
    };
    telephone = {
      required: this.required,
      minLength: {
        message: 'Min lenght at least 8',
        value: 9,
      },
      maxlenght: {
        message: 'Max lenght no more than 8',
      },
    };
  }