import React from 'react'
import { Form, Link, useLoaderData } from 'react-router-dom'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import FormRange from './FormRange'
import FormCheckbox from './FormCheckbox'

const Filter = () => {
  const { meta } = useLoaderData();
  console.log(meta);
  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4'>
      <FormInput
        label="Search Product"
        type="search"
        name="search"
        size="input-sm"
      />

      <FormSelect
        label="Select Category"
        name="category"
        list={meta.categories}
        size="select-sm"
      />

      <FormSelect
        label="Select Company"
        name="company"
        list={meta.companies}
        size="select-sm"
      />

      <FormSelect
        label="Sort By"
        name="order"
        list={["a-z","z-a","high","low"]}
        size="select-sm"
      />

      <FormRange
        label="Select Price"
        name="price"
        size="range-sm"
      />

      <FormCheckbox
        label="Free Shipping"
        name="shipping"
        size="checkbox-sm"
      />

      <button
        type='submit'
        className='btn btn-primary btn-sm'
      >
        SEARCH
      </button>
      <Link to='/products' className='btn btn-accent btn-sm text-accent-content'>
        RESET
      </Link>

    </Form>
  )
}

export default Filter