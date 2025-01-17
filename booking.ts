  // booking.ts
  export default {
    name: 'booking',
    title: 'Booking',
    type: 'document',
    fields: [
      {
        name: 'user_id',
        title: 'User',
        type: 'reference',
        to: [{ type: 'user' }],
      },
      {
        name: 'car_id',
        title: 'Car',
        type: 'reference',
        to: [{ type: 'car' }],
      },
      {
        name: 'start_date',
        title: 'Start Date',
        type: 'datetime',
      },
      {
        name: 'end_date',
        title: 'End Date',
        type: 'datetime',
      },
      {
        name: 'total_price',
        title: 'Total Price',
        type: 'number',
      },
      {
        name: 'status',
        title: 'Booking Status',
        type: 'string',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Confirmed', value: 'confirmed' },
            { title: 'Cancelled', value: 'cancelled' },
          ],
          layout: 'radio',
        },
        initialValue: 'pending',
      },
      {
        name: 'created_at',
        title: 'Created At',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
      },
    ],
  };
