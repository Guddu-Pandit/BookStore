import React from 'react'

function Cards({ item }) {
  return (
    <>
    <div className='mt-4 mb-3 p-3'>
        <div className="card bg-base-100 w-98 shadow-sm">
  <figure>
    <img className='w-full h-70 object-cover'
      src={item.image}
      alt={item.name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-xl font-bold">
      {item.name}
      <div className="badge badge-secondary">Free</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between ">
      <div className="badge badge-outline rounded-full">${item.price}</div>
      <div className="badge badge-outline p-3 rounded-full hover:bg-pink-500 duration-200 hover:text-amber-50">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards