// user.ts
export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'first_name',
        title: 'First Name',
        type: 'string',
      },
      {
        name: 'last_name',
        title: 'Last Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: Rule => Rule.required().email(),
      },
      {
        name: 'phone_number',
        title: 'Phone Number',
        type: 'string',
      },
      {
        name: 'address',
        title: 'Address',
        type: 'string',
      },
      {
        name: 'created_at',
        title: 'Created At',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
      },
    ],
  };
  
 
  