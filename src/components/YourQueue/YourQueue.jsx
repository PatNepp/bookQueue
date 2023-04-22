import React from 'react'
import {BookCard} from '..'
import { useGetBooksByTitleQuery } from '../../services/bookApi'

const YourQueue = () => {
    const {data} = useGetBooksByTitleQuery('Congo')

  return (
    <div>
        {data?.items.map((item, i) => (
            <BookCard key={i} data={item} />
        ))}
    </div>
  )
}

export default YourQueue