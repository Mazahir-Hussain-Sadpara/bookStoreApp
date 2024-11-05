import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'
function Course() {
  return (
    <>
      <div className='pt-28 max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div className=' items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl '>We'er delighted to have you <span className='text-pink-500'>Here! :)</span> </h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  commodi recusandae quaerat magnam. Accusamus mollitia hic error explicabo harum deleniti! Culpa sit distinctio autem aliquam error. Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nam eligendi cumque dolor accusantium cupiditate laborum inventore quasi animi</p>
          <Link to='/'>
            <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>
            Back
            </button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course
