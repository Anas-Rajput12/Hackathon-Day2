 // car.ts
 export default {
    name: 'car',
    title: 'Car',
    type: 'document',
    fields: [
      {
        name: 'make',
        title: 'Make',
        type: 'string',
      },
      {
        name: 'model',
        title: 'Model',
        type: 'string',
      },
      {
        name: 'type',
        title: 'Car Type',
        type: 'string', // e.g., Sedan, SUV
      },
      {
        name: 'price_per',
        title: 'Price per Day/Hour',
        type: 'number',
      },
      {
        name: 'availability',
        title: 'Availability',
        type: 'boolean',
        initialValue: true,
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }],
      },
    ],
  };
  
