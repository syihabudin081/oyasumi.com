import React from 'react';

// import borabora1 from '../assets/borabora1.jpg';
// import borabora2 from '../assets/borabora2.jpg';
// import maldives1 from '../assets/maldives1.jpg';
// import maldives2 from '../assets/maldives2.jpg';
// import maldives3 from '../assets/maldives3.jpg';

const Destinations = () => {
  return (
    <section className='container px-4 flex flex-col items-center my-16'>
      <h2 className='mb-4'>All-inclusive Resorts</h2>
      <p className='mb-8 font-bold'>On the Caribbean's Best Beaches</p>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
        <div className='col-span-2 md:col-span-3 md:row-span-2'>
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt='borabora1'
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt='borabora2'
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt='maldives1'
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt='maldives2'
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt='maldives1'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default Destinations;
